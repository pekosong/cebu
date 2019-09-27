import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Button, Block, Text } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import uuidv1 from "uuid/v1";

const PersonalScreen = props => {
  const { navigation } = props;
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  _retrieveData = () => {
    setProfile(user);
    setName(user.name);
    setEmail(user.email);
    setSex(user.sex);
    setBirth(user.birth);
    setImage(user.image);
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  uploadImage = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();

    let uploadTask = firebase
      .storage()
      .ref()
      .child("images/" + uuidv1())
      .put(blob);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log("Upload is running");
            break;
        }
      },
      error => {
        switch (error.code) {
          case "storage/unauthorized":
            break;

          case "storage/canceled":
            break;

          case "storage/unknown":
            break;
        }
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4]
    });

    if (!result.cancelled) {
      uploadImage(result.uri);
    }
  };

  _cameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4]
    });

    if (!result.cancelled) {
      uploadImage(result.uri);
    }
  };

  savePerson = async () => {
    let newProfile = {
      ...profile,
      name: name,
      sex: sex,
      birth: birth,
      image: image
    };
    await firebase
      .firestore()
      .collection("users")
      .doc(email)
      .update(newProfile)
      .then(() => {
        dispatch({ type: "UPDATE", payload: newProfile });
        setProfile(newProfile);
        setSaved(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
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
        <TouchableOpacity onPress={() => savePerson()}>
          <Text bold h2>
            {saved ? "완료" : "저장"}
          </Text>
        </TouchableOpacity>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block row style={{ marginVertical: 20 }}>
            <Block flex={false}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : { uri: "https://placeholder.com/150" }
                }
                onLoadEnd={() => {
                  setIsLoaded(true);
                }}
                style={styles.avatar}
              />
            </Block>
            <Block row style={{ position: "absolute", bottom: -10, left: 120 }}>
              <Button onPress={_pickImage} style={{ marginRight: 20 }}>
                <Ionicons size={40} name="md-photos" />
              </Button>
              <Button onPress={_cameraImage}>
                <Ionicons size={40} name="ios-camera" />
              </Button>
            </Block>
          </Block>

          <Block
            row
            space="between"
            style={{ ...styles.inputRow, borderBottomWidth: 0 }}
          >
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                이메일
              </Text>
              <Text bold style={{ fontSize: 20 }}>
                {email}
              </Text>
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                이름
              </Text>
              <TextInput
                defaultValue={name}
                placeholder="홍길동"
                onChangeText={e => setName(e)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                성별
              </Text>
              <TextInput
                defaultValue={sex}
                placeholder="남/여"
                onChangeText={e => setSex(e)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                생년월일
              </Text>
              <TextInput
                defaultValue={birth}
                placeholder="2001-01-01"
                onChangeText={e => setBirth(e)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

PersonalScreen.navigationOptions = {
  header: null
};
PersonalScreen.defaultProps = {};
const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.base * 6,
    height: theme.sizes.base * 6,
    borderRadius: theme.sizes.base * 3
  },
  inputs: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.padding
  },
  inputRow: {
    alignItems: "flex-end",
    marginVertical: 15,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray
  }
});

export default PersonalScreen;
