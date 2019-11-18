import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  ActivityIndicator,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Button, Block, Text, CachedImage} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateShop, setImagesData} from 'app/src/redux/action';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import uuidv1 from 'uuid/v1';

const {height, width} = Dimensions.get('window');

const MyShopScreen = props => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [engName, setEngName] = useState('');
  const [address, setAddress] = useState('');
  const [menuName, setMenuName] = useState('');
  const [menuPrice, setMenuPrice] = useState('');
  const [menuDesc, setMenuDesc] = useState('');
  const [menuImg, setMenuImg] = useState('');
  const [engAddress, setEngAddress] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [pickup, setPickup] = useState(false);
  const [baby, setBaby] = useState(false);
  const [korean, setKorean] = useState(false);
  const [myShop, setMyShop] = useState({});
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');

  const [progress, setProgress] = useState(null);
  const [menuSelected, setMenuSelected] = useState(null);
  const [saved, setSaved] = useState(false);
  const [changed, setChanged] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);
  const shopImages = useSelector(state => state.shopImages, shallowEqual);

  const [hideAnim] = useState(new Animated.Value(0));

  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .firestore()
      .collection('shops')
      .doc(user.shops[0])
      .get()
      .then(doc => {
        const shop = doc.data();
        setMyShop(shop);
        setName(shop.name);
        setEngName(shop.engName);
        setAddress(shop.address);
        setEngAddress(shop.engAddress);
        setOpenTime(shop.openTime);
        setCloseTime(shop.closeTime);
        setPhone(shop.phone);
        setCategory(shop.category);
        setPickup(shop.pickup);
        setImages(shop.source);
        setTags(shop.tags);
        setBaby(shop.baby);
        setKorean(shop.korean);
        setIsLoaded(true);
      });
  }, [changed]);

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  uploadImage = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();

    let uploadTask = firebase
      .storage()
      .ref()
      .child('images/' + uuidv1())
      .put(blob);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        var prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(`${Math.round(prog, 1)}%`);

        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      },
      error => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;

          case 'storage/canceled':
            break;

          case 'storage/unknown':
            break;
        }
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          if (menuSelected != null) {
            setMenuImg(downloadURL);
            setImage(downloadURL);
            setProgress(null);
            console.log('song');
          } else {
            let newImages = images;
            newImages.push(downloadURL);
            setImages(newImages);
            setProgress(null);
          }
        });
      },
    );
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
    });

    if (!result.cancelled) {
      uploadImage(result.uri);
    }
  };

  _cameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
    });

    if (!result.cancelled) {
      uploadImage(result.uri);
    }
  };

  saveShop = () => {
    let newMenu = {
      name: menuName,
      price: menuPrice,
      desc: menuDesc,
      src: menuImg,
    };
    let newMenus = myShop.menus;
    newMenus[menuSelected] = newMenu;

    setSaved(true);

    let newShop = {
      ...myShop,
      menus: menuSelected != null ? newMenus : myShop.menus,
      name: name,
      engName: engName,
      category: category,
      source: images,
      tags: tags,
      address: address,
      engAddress: engAddress,
      openTime: openTime,
      closeTime: closeTime,
      pickup: pickup,
      phone: phone,
      baby: baby,
      korean: korean,
    };

    dispatch(updateShop(newShop)).then(() => {
      setMyShop(newShop);
      setChanged(!changed);
      setSaved(false);
      Animated.timing(hideAnim, {
        toValue: 1,
        duration: 300,
      }).start();
      if (menuSelected != null) {
        setTimeout(() => {
          setMenuSelected(null);
        }, 200);
      }
    });
  };

  handleSelectImage = imageId => {
    let lists = shopImages;

    if (lists.includes(imageId)) {
      const idx = lists.indexOf(imageId);
      lists.splice(idx, 1);
    } else {
      lists.push(imageId);
    }
    dispatch(setImagesData(lists));
    setChanged(!changed);
  };

  handleDeleteImage = () => {
    let newImages = images;
    const result = newImages.filter(e => shopImages.includes(e) == false);
    let newShop = {
      ...myShop,
      source: result,
    };
    dispatch(updateShop(newShop)).then(() => {
      dispatch(setImagesData([]));
      setMyShop(newShop);
      setChanged(!changed);
    });
  };

  handleMenu = idx => {
    if (menuSelected == idx) {
      Animated.timing(hideAnim, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        setMenuSelected(null);
      });
      return;
    }
    setMenuSelected(idx);
    setMenuName(myShop.menus[idx].name);
    setMenuPrice(myShop.menus[idx].price);
    setMenuDesc(myShop.menus[idx].desc);
    setMenuImg(myShop.menus[idx].src);

    Animated.timing(hideAnim, {
      toValue: 1,
      duration: 300,
    }).start();
  };

  renderList = (item, idx) => {
    return (
      <TouchableWithoutFeedback key={idx} onPress={() => handleMenu(idx)}>
        <Block
          style={{
            ...styles.categoryContainer,
            backgroundColor: menuSelected == idx ? colors.black : 'white',
          }}>
          <CachedImage
            style={{
              borderColor: 'red',
              width: '100%',
              height: 70,
              resizeMode: 'cover',
            }}
            uri={item.src}></CachedImage>

          <Text
            style={{
              color: menuSelected == idx ? colors.white : colors.black,
              padding: 8,
            }}>
            {item.name}
          </Text>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  return isLoaded ? (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Block style={style.header}>
            <Block row center space="between">
              <Button onPress={() => navigation.goBack()}>
                <Block center row>
                  <Ionicons
                    size={30}
                    color={colors.black}
                    name="ios-arrow-back"
                  />
                </Block>
              </Button>
              <TouchableOpacity onPress={() => saveShop()}>
                <Text bold h3>
                  {progress ? progress : '저장'}
                </Text>
              </TouchableOpacity>
            </Block>
            <Text h1 bold style={{marginTop: 10, marginBottom: 30}}>
              매장 정보
            </Text>
          </Block>

          <Block style={styles.inputs}>
            <Block style={{marginBottom: 20}}>
              <Block row space="between">
                <Block flex={1}>
                  <Text style={styles.textStyle}>사진 등록</Text>
                </Block>
                <Block right row flex={2}>
                  {shopImages.length != 0 ? (
                    <TouchableOpacity onPress={() => handleDeleteImage()}>
                      <AntDesign
                        size={30}
                        name={'delete'}
                        style={{
                          color: colors.primary,
                          marginRight: 10,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}

                  <TouchableOpacity onPress={_cameraImage}>
                    <AntDesign
                      size={30}
                      name={'camera'}
                      style={{
                        color: colors.black,
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={_pickImage}>
                    <AntDesign
                      size={30}
                      name={'picture'}
                      style={{
                        color: colors.black,
                      }}
                    />
                  </TouchableOpacity>
                </Block>
              </Block>
              <Block row style={{flexWrap: 'wrap'}}>
                {images.map((source, idx) => (
                  <Block key={idx} style={{...styles.avatar, flex: 0}}>
                    <TouchableOpacity onPress={() => handleSelectImage(source)}>
                      <CachedImage uri={source} style={styles.avatar} />
                    </TouchableOpacity>
                    {shopImages.includes(source) ? (
                      <AntDesign
                        size={30}
                        name={'checkcircleo'}
                        style={{
                          color: colors.accent,
                          position: 'absolute',
                          top: 5,
                          right: 5,
                        }}
                      />
                    ) : null}
                  </Block>
                ))}
              </Block>
            </Block>
            <Block style={{marginBottom: 20}}>
              <Block row space="between">
                <Text style={styles.textStyle}>추천 메뉴</Text>
              </Block>
              <Block style={{...styles.content}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={true}>
                  {myShop.menus.map((item, idx) => renderList(item, idx))}
                </ScrollView>
              </Block>
              {menuSelected != null ? (
                <Block style={{height: 430}}>
                  <Animated.View
                    style={{
                      height: hideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 300],
                      }),
                      opacity: hideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    }}>
                    <Block style={{...styles.inputRow}}>
                      <Text style={styles.textStyle}>메뉴명</Text>
                      <TextInput
                        defaultValue={myShop.menus[menuSelected].name}
                        onChangeText={e => {
                          setMenuName(e);
                        }}
                        style={{fontSize: 16}}></TextInput>
                    </Block>
                    <Block style={styles.inputRow}>
                      <Text style={styles.textStyle}>가격</Text>
                      <TextInput
                        defaultValue={myShop.menus[menuSelected].price}
                        onChangeText={e => {
                          setMenuPrice(e);
                        }}
                        style={{fontSize: 16}}></TextInput>
                    </Block>
                    <Block style={styles.inputRow}>
                      <Text style={styles.textStyle}>설명</Text>
                      <TextInput
                        defaultValue={myShop.menus[menuSelected].desc}
                        onChangeText={e => {
                          setMenuDesc(e);
                        }}
                        style={{fontSize: 16}}></TextInput>
                    </Block>
                    <Block>
                      <Text h3 gray style={{marginBottom: 10}}>
                        이미지
                      </Text>
                      <TouchableOpacity onPress={() => _pickImage()}>
                        {image ? (
                          <CachedImage uri={image} style={styles.avatar} />
                        ) : (
                          <CachedImage
                            uri={myShop.menus[menuSelected].src}
                            style={styles.avatar}
                          />
                        )}
                      </TouchableOpacity>
                    </Block>
                  </Animated.View>
                </Block>
              ) : null}
            </Block>
            <Block style={{marginBottom: 20}}>
              <Text style={{...styles.textStyle, marginBottom: 0}}>
                매장 태그
              </Text>
              {tags.map((tag, idx) => (
                <Block row key={idx} style={styles.inputRow}>
                  <TextInput
                    key={idx}
                    defaultValue={tag}
                    placeholder="한국음식, 배달가능"
                    onChangeText={() => {}}
                    style={{fontSize: 20, width: '100%'}}
                  />
                </Block>
              ))}
            </Block>

            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>매장 이름</Text>
              <TextInput
                defaultValue={name}
                placeholder=""
                onChangeText={e => setName(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>매장 분류</Text>
              <TextInput
                defaultValue={category}
                placeholder=""
                onChangeText={e => setCategory(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>매장 영어 이름</Text>
              <TextInput
                defaultValue={engName}
                placeholder=""
                onChangeText={e => setEngName(e)}
                style={{fontSize: 20}}
              />
            </Block>

            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>매장 주소</Text>
              <TextInput
                defaultValue={address}
                placeholder=""
                onChangeText={e => setAddress(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>매장 영어 주소</Text>
              <TextInput
                defaultValue={engAddress}
                placeholder=""
                onChangeText={e => setEngAddress(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>전화번호</Text>
              <TextInput
                defaultValue={phone}
                placeholder=""
                onChangeText={e => setPhone(e)}
                style={{fontSize: 20}}
              />
            </Block>

            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>오픈 시간</Text>
              <TextInput
                defaultValue={openTime}
                placeholder=""
                onChangeText={e => {
                  setOpenTime(e);
                }}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>마감 시간</Text>
              <TextInput
                defaultValue={closeTime}
                placeholder=""
                onChangeText={e => {
                  setCloseTime(e);
                }}
                style={{fontSize: 20}}
              />
            </Block>
            <Block
              center
              middle
              row
              space="between"
              style={{...styles.inputRow, paddingVertigal: 15}}>
              <Text h3>픽업가능 여부</Text>
              <Switch
                value={pickup}
                onValueChange={value => setPickup(value)}
              />
            </Block>
            <Block
              center
              middle
              row
              space="between"
              style={{...styles.inputRow, paddingVertigal: 15}}>
              <Text h3>베이티시터 여부</Text>
              <Switch value={baby} onValueChange={value => setBaby(value)} />
            </Block>
            <Block
              center
              middle
              row
              space="between"
              style={{...styles.inputRow, paddingVertigal: 15}}>
              <Text h3>한국어 여부</Text>
              <Switch
                value={korean}
                onValueChange={value => setKorean(value)}
              />
            </Block>

            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>기타 정보</Text>
              <TextInput
                defaultValue={''}
                placeholder=""
                onChangeText={() => {}}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  ) : (
    <Block style={style.full}>
      <ActivityIndicator size="large" color={colors.accent}></ActivityIndicator>
    </Block>
  );
};

MyShopScreen.navigationOptions = {
  header: null,
};
MyShopScreen.defaultProps = {};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    marginBottom: 10,
  },
  avatar: {
    width: width / 2 - sizes.padding * 1 - 5,
    height: width / 2 - sizes.padding * 1 - 5,
    marginRight: 5,
    marginBottom: 5,
  },
  inputs: {
    paddingHorizontal: sizes.padding,
  },
  inputRow: {
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
  },
  categoryContainer: {
    flex: 0,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.gray2,
    width: 120,
    height: 120,
    marginRight: 20,
  },
});

export default MyShopScreen;
