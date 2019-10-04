import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {Button, Block, Text, CachedImage, Test} from '../../components';
import {theme} from '../../constants';
import firebase from '../../constants/store';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateShop, setImagesData} from '../../redux/action';

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
  const [engAddress, setEngAddress] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [pickup, setPickup] = useState(false);
  const [myShop, setMyShop] = useState({});
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');

  const [saved, setSaved] = useState(false);
  const [changed, setChanged] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);
  const shopImages = useSelector(state => state.shopImages, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('render?');
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
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          let newImages = images;
          newImages.push(downloadURL);
          setImages(newImages);
          setImage(downloadURL);
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
    setSaved(true);
    let newShop = {
      ...myShop,
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
    };
    dispatch(updateShop(newShop)).then(() => {
      setMyShop(newShop);
      setChanged(!changed);
      setSaved(false);
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

  return isLoaded ? (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block flex={false} row center space="between" style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Block center row>
            <Ionicons
              size={35}
              color={theme.colors.primary}
              name="ios-arrow-back"
            />
          </Block>
        </Button>
        <TouchableOpacity onPress={() => saveShop()}>
          <Text bold h2>
            {saved ? '저장 중' : '저장'}
          </Text>
        </TouchableOpacity>
      </Block>
      <ScrollView>
        <Block style={styles.inputs}>
          <Block style={{marginBottom: 10}}>
            <Block row space="between" style={{marginBottom: 10}}>
              <Block flex={1}>
                <Text h3 gray>
                  사진 등록
                </Text>
              </Block>
              <Block right row flex={2}>
                {shopImages.length != 0 ? (
                  <TouchableOpacity onPress={() => handleDeleteImage()}>
                    <AntDesign
                      size={30}
                      name={'delete'}
                      style={{
                        color: theme.colors.primary,
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
                      color: theme.colors.accent,
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={_pickImage}>
                  <AntDesign
                    size={30}
                    name={'picture'}
                    style={{
                      color: theme.colors.accent,
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
                        color: theme.colors.accent,
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
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                주요 메뉴
              </Text>
              <TextInput
                defaultValue={''}
                placeholder=""
                onChangeText={() => {}}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={{marginBottom: 20}}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                매장 태그
              </Text>
              <Block row>
                {tags.map((tag, idx) => (
                  <TextInput
                    key={idx}
                    defaultValue={tag}
                    placeholder="한국음식, 배달가능"
                    onChangeText={() => {}}
                    style={{fontSize: 20, width: 80}}
                  />
                ))}
              </Block>
            </Block>
          </Block>

          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                매장 이름
              </Text>
              <TextInput
                defaultValue={name}
                placeholder=""
                onChangeText={e => setName(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                매장 분류
              </Text>
              <TextInput
                defaultValue={category}
                placeholder=""
                onChangeText={e => setCategory(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                매장 영어 이름
              </Text>
              <TextInput
                defaultValue={engName}
                placeholder=""
                onChangeText={e => setEngName(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>

          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                매장 주소
              </Text>
              <TextInput
                defaultValue={address}
                placeholder=""
                onChangeText={e => setAddress(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                매장 영어 주소
              </Text>
              <TextInput
                defaultValue={engAddress}
                placeholder=""
                onChangeText={e => setEngAddress(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                전화번호
              </Text>
              <TextInput
                defaultValue={phone}
                placeholder=""
                onChangeText={e => setPhone(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>

          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                오픈 시간
              </Text>
              <TextInput
                defaultValue={openTime}
                placeholder=""
                onChangeText={e => {
                  setOpenTime(e);
                }}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                마감 시간
              </Text>
              <TextInput
                defaultValue={closeTime}
                placeholder=""
                onChangeText={e => {
                  setCloseTime(e);
                }}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
          <Block row space="between" style={{marginBottom: 20}}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                픽업가능 여부
              </Text>
              <Switch value={pickup} onValueChange={e => setPickup(e)} />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{marginBottom: 10}}>
                기타 정보
              </Text>
              <TextInput
                defaultValue={''}
                placeholder=""
                onChangeText={() => {}}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </KeyboardAvoidingView>
  ) : (
    <Block style={styles.full}>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}></ActivityIndicator>
    </Block>
  );
};

MyShopScreen.navigationOptions = {
  header: null,
};
MyShopScreen.defaultProps = {};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.padding,
  },
  avatar: {
    width: width / 2 - theme.sizes.padding * 1 - 5,
    height: width / 2 - theme.sizes.padding * 1 - 5,
    marginRight: 5,
    marginBottom: 5,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.padding,
  },
  inputRow: {
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray,
  },
});

export default MyShopScreen;
