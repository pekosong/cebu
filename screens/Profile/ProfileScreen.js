import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, TextInput, AsyncStorage } from "react-native";
import { Button, Block, Text, WideTextList } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const profileList = [
  { title: "개인 정보", navigation: "Personal", icon: "md-person" },
  {
    title: "내 여행 정보",
    navigation: "TripInfos",
    icon: "ios-planet"
  },
  { title: "알림", navigation: "Notice", icon: "md-notifications" }
];

const hostList = [
  { title: "매장 정보", navigation: "MyShop", icon: "ios-home" },
  {
    title: "예약 관리",
    navigation: "",
    icon: "md-book"
  },
  { title: "고객 정보", navigation: "", icon: "md-people" },
  { title: "이벤트 등록", navigation: "=", icon: "ios-basket" }
];

const helpList = [
  {
    title: "도움말",
    navigation: "",
    icon: "md-information-circle"
  },
  {
    title: "의견 남기기",
    navigation: "",
    icon: "ios-paper"
  },
  ,
];
const ProfileScreen = props => {
  const { navigation } = props;
  const [profile, setProfile] = useState({});

  const user = useSelector(state => state.user, []);

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

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        AsyncStorage.removeItem("profile");
        navigation.navigate("Auth");
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  return (
    <Block>
      <Block flex={false} style={styles.header}>
        <Text h1 bold>
          내 정보
        </Text>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block margin={[10, 0]}>
            <Text h3 gray>
              My Profile
            </Text>
          </Block>
          <WideTextList
            lists={profileList}
            profile={profile}
            navigation={navigation}
          />

          <Block style={{ marginTop: 20, marginBottom: 10 }}>
            <Text h3 gray>
              Hosting
            </Text>
          </Block>
          <WideTextList
            lists={hostList}
            profile={profile}
            navigation={navigation}
          />

          <Block style={{ marginTop: 20, marginBottom: 10 }}>
            <Text h3 gray>
              지원
            </Text>
          </Block>
          <WideTextList
            lists={helpList}
            profile={profile}
            navigation={navigation}
          />

          <TouchableOpacity onPress={() => handleLogout()}>
            <Block
              row
              space="between"
              style={{
                ...styles.inputRow,
                marginVertical: 30
              }}
            >
              <Text color={theme.colors.primary} h3>
                로그아웃
              </Text>
              <Ionicons
                size={25}
                name="md-log-out"
                style={{ color: theme.colors.primary }}
              ></Ionicons>
            </Block>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </Block>
  );
};

ProfileScreen.navigationOptions = {
  header: null
};
ProfileScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 4,
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  inputs: {
    marginTop: theme.sizes.base * 2,
    paddingHorizontal: theme.sizes.padding
  },
  inputRow: {
    paddingBottom: 6,
    marginVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.gray
  }
});

export default ProfileScreen;
