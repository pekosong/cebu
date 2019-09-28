import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  AsyncStorage,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Button, Block, Text } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const MyShopScreen = props => {
  const { navigation } = props;
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");

  const [profile, setProfile] = useState({});

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("profile");
      if (value !== null) {
        setProfile(JSON.parse(value));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  handleEdit = (name, text) => {
    profile[name] = text;
    setProfile(profile);
  };
  renderEdit = () => {
    <TextInput
      defaultValue={name}
      placeholder="song"
      onChangeText={() => setName(name)}
      style={{ fontSize: 20 }}
    />;
  };

  toggleEdit = name => {
    setEditing(!editing ? name : null);
  };

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        AsyncStorage.removeItem("email");
        navigation.navigate("Auth");
      })
      .catch(function(err) {
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
        <TouchableOpacity>
          <Text bold h2>
            저장
          </Text>
        </TouchableOpacity>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
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
                {profile.email}
              </Text>
            </Block>
          </Block>
          <Block>
            <Block style={{ marginBottom: 10 }}>
              <Text h3 gray>
                사진 등록
              </Text>
            </Block>

            <Block row>
              <Image
                source={require("../../assets/images/cebu_food1.jpg")}
                style={styles.avatar}
              />
              <Image
                source={require("../../assets/images/cebu_food2.jpeg")}
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.avatar}
              />
            </Block>
          </Block>

          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                매장 태그
              </Text>
              <TextInput
                defaultValue={sex}
                placeholder="한국음식, 배달가능"
                onChangeText={() => setSex(sex)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>

          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                매장 이름
              </Text>
              <TextInput
                defaultValue={name}
                placeholder=""
                onChangeText={() => setName(name)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                매장 영어 이름
              </Text>
              <TextInput
                defaultValue={name}
                placeholder=""
                onChangeText={() => setName(name)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>

          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                매장 주소
              </Text>
              <TextInput
                defaultValue={sex}
                placeholder=""
                onChangeText={() => setSex(sex)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                매장 영어 주소
              </Text>
              <TextInput
                defaultValue={sex}
                placeholder=""
                onChangeText={() => setSex(sex)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                주요 메뉴
              </Text>
              <TextInput
                defaultValue={sex}
                placeholder=""
                onChangeText={() => setSex(sex)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Block>
              <Text h3 gray style={{ marginBottom: 10 }}>
                기타 정보
              </Text>
              <TextInput
                defaultValue={sex}
                placeholder=""
                onChangeText={() => setSex(sex)}
                style={{ fontSize: 20 }}
              />
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

MyShopScreen.navigationOptions = {
  header: null
};
MyShopScreen.defaultProps = {};
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
    marginRight: 5
  },
  inputs: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.padding
  },
  inputRow: {
    alignItems: "flex-end",
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray
  }
});

export default MyShopScreen;
