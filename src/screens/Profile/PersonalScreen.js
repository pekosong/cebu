import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Button, Block, Text, CachedImage} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {updateUser} from 'app/src/api/user';
import {UserStoreContext} from 'app/src/store/user';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import uuidv1 from 'uuid/v1';

const PersonalScreen = observer(props => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [image, setImage] = useState('');
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({});
  const [progress, setProgress] = useState(null);

  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    setProfile(user);
    setEmail(user.email ? user.email : '');
    setName(user.name ? user.name : '');
    setSex(user.sex ? user.sex : '');
    setBirth(user.birth ? user.birth : '');
    setPhone(user.phone ? user.phone : '');
    setImage(user.image ? user.image : '');
  }, []);

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
        console.log('Upload is ' + prog + '% done');
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
          setImage(downloadURL);
          setProgress(null);
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

  savePerson = () => {
    let newProfile = {
      ...profile,
      name: name,
      sex: sex,
      birth: birth,
      image: image,
      phone: phone,
    };
    updateUser(email, newProfile)
      .then(() => {
        setProfile(newProfile);
        setSaved(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
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
              <TouchableOpacity onPress={() => savePerson()}>
                <Text bold h3>
                  {progress ? progress : '저장'}
                </Text>
              </TouchableOpacity>
            </Block>
            <Text h1 bold style={{marginTop: 10, marginBottom: 30}}>
              내 정보
            </Text>
          </Block>

          <Block style={styles.inputs}>
            <Block style={{marginBottom: 20}}>
              <Block row space="between">
                <Block flex={1}>
                  <Text style={styles.textStyle}>사진</Text>
                </Block>
                <Block right row flex={2}>
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
              <CachedImage uri={image} style={styles.avatar} />
            </Block>

            <Block style={{...styles.inputRow, borderBottomWidth: 0}}>
              <Text style={styles.textStyle}>이메일</Text>
              <Text bold style={{fontSize: 20}}>
                {email}
              </Text>
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>이름</Text>
              <TextInput
                defaultValue={name}
                placeholder="홍길동"
                onChangeText={e => setName(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>성별</Text>
              <TextInput
                defaultValue={sex}
                placeholder="남/여"
                onChangeText={e => setSex(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>생년월일</Text>
              <TextInput
                defaultValue={birth}
                placeholder="2001-01-01"
                onChangeText={e => setBirth(e)}
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>전화번호</Text>
              <TextInput
                defaultValue={phone}
                placeholder="010-"
                onChangeText={e => setPhone(e)}
                style={{fontSize: 20}}
              />
            </Block>
          </Block>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

PersonalScreen.navigationOptions = {
  header: null,
};
PersonalScreen.defaultProps = {};

const styles = StyleSheet.create({
  avatar: {
    width: sizes.base * 6,
    height: sizes.base * 6,
    borderRadius: sizes.base * 3,
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputs: {
    paddingHorizontal: sizes.padding,
  },
  inputRow: {
    marginVertical: 15,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
  },
});

export default PersonalScreen;
