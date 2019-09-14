import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  AsyncStorage,
  Image
} from "react-native";
import { Button, Block, Text } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TripInfosScreen = props => {
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
    <Block>
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
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block
            flex={1}
            middle
            center
            style={{
              backgroundColor: theme.colors.primary,
              borderRadius: 10,
              height: 60
            }}
          >
            <Text white h3 bold>
              일정
            </Text>
          </Block>
          <Block flex={4}>
            <Block row middle center>
              <Text h4 bold>
                2019-10-01 {" ~ "}
              </Text>
              <Text h4 bold>
                2019-10-07
              </Text>
            </Block>
            <Block middle center>
              <Text h4 bold>
                세부 ㅌㅌ 호텔
              </Text>
            </Block>
          </Block>
          <Block flex={0.5} middle center>
            <TouchableOpacity>
              <Ionicons
                size={35}
                color={theme.colors.black}
                name="ios-arrow-forward"
              />
            </TouchableOpacity>
          </Block>
        </Block>
        <Block style={styles.inputs}>
          <Block
            flex={1}
            middle
            center
            style={{
              backgroundColor: theme.colors.gray,
              borderRadius: 10,
              height: 60
            }}
          >
            <Text white h3 bold>
              일정
            </Text>
          </Block>
          <Block flex={4}>
            <Block row middle center>
              <Text h4 bold>
                2018-10-01 {" ~ "}
              </Text>
              <Text h4 bold>
                2018-10-07
              </Text>
            </Block>
            <Block middle center>
              <Text h4 bold>
                세부 ㅌㅌ 호텔
              </Text>
            </Block>
          </Block>
          <Block flex={0.5} middle center>
            <TouchableOpacity>
              <Ionicons
                size={35}
                color={theme.colors.black}
                name="ios-arrow-forward"
              />
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
      <Block
        flex={false}
        style={{ marginHorizontal: theme.sizes.padding, marginBottom: 10 }}
      >
        <Button gradient onPress={() => navigation.navigate("TripInfo")}>
          <Text bold white center>
            새로운 여행 등록
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

TripInfosScreen.navigationOptions = {
  header: null
};
TripInfosScreen.defaultProps = {};
const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.base * 6,
    height: theme.sizes.base * 6
  },
  inputs: {
    flexDirection: "row",
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.padding,
    marginVertical: 10
  }
});

export default TripInfosScreen;
