import React, { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Block, Text, WideText } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { watchUserData, downloadShopData } from "../../redux/action";

const EMAIL = "peko22@naver.com";

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
  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    unsubscribe1 = dispatch(watchUserData(EMAIL));
    unsubscribe2 = dispatch(downloadShopData());
    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, []);

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
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
          {profileList.map((item, idx) => (
            <WideText
              item={item}
              key={idx}
              onPress={() => navigation.navigate(item.navigation)}
            >
              <Text h3>{item.title}</Text>
              <Ionicons
                size={25}
                name={item.icon}
                style={{ color: theme.colors.primary }}
              ></Ionicons>
            </WideText>
          ))}

          <Block style={{ marginTop: 20, marginBottom: 10 }}>
            <Text h3 gray>
              Hosting
            </Text>
          </Block>
          {hostList.map((item, idx) => (
            <WideText
              item={item}
              key={idx}
              onPress={() => navigation.navigate(item.navigation)}
            >
              <Text h3>{item.title}</Text>
              <Ionicons
                size={25}
                name={item.icon}
                style={{ color: theme.colors.primary }}
              ></Ionicons>
            </WideText>
          ))}

          <Block style={{ marginTop: 20, marginBottom: 10 }}>
            <Text h3 gray>
              지원
            </Text>
          </Block>
          {helpList.map((item, idx) => (
            <WideText
              item={item}
              key={idx}
              onPress={() => navigation.navigate(item.navigation)}
            >
              <Text h3>{item.title}</Text>
              <Ionicons
                size={25}
                name={item.icon}
                style={{ color: theme.colors.primary }}
              ></Ionicons>
            </WideText>
          ))}
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
