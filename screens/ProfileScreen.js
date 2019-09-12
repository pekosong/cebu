import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Switch,
  TextInput,
  AsyncStorage
} from "react-native";
import { Divider, Button, Block, Text } from "../components";
import { theme } from "../constants";
import Slider from "react-native-slider";
import firebase from "../constants/store";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = props => {
  const { navigation } = props;
  const [budget, setBudget] = useState(850);
  const [monthly_cap, setMonthly_cap] = useState(1700);
  const [notifications, setNotifications] = useState(true);
  const [newsletters, setNewsletters] = useState(false);
  const [editing, setEditing] = useState(null);
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
  renderEdit = name => {
    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => handleEdit([name], text)}
        />
      );
    }
    return <Text bold>{profile[name]}</Text>;
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
        <Text h1 bold>
          내 정보
        </Text>
        <Button onPress={() => handleLogout()}>
          <Text color={theme.colors.accent} bold>
            <Ionicons size={25} name="md-log-out"></Ionicons>
          </Text>
        </Button>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text h4 gray style={{ marginBottom: 10 }}>
                이메일
              </Text>
              <Text bold>{profile.email}</Text>
            </Block>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text h4 gray style={{ marginBottom: 10 }}>
                숙박정보
              </Text>
              {renderEdit("hotel")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("hotel")}>
              {editing === "hotel" ? "Save" : "Edit"}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text h4 gray style={{ marginBottom: 10 }}>
                여행 시작일
              </Text>
              {renderEdit("startDate")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("startDate")}>
              {editing === "startDate" ? "Save" : "Edit"}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text h4 gray style={{ marginBottom: 10 }}>
                여행 종료일
              </Text>
              {renderEdit("endDate")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("endDate")}>
              {editing === "endDate" ? "Save" : "Edit"}
            </Text>
          </Block>
        </Block>

        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text h4 gray style={{ marginBottom: 10 }}>
              예산
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={budget}
              onValueChange={value => setBudget(value)}
            />
            <Text h4 caption gray right>
              ${budget.toFixed(0)}
            </Text>
          </Block>
          <Block margin={[10, 0]}>
            <Text h4 gray style={{ marginBottom: 10 }}>
              Monthly Cap
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={5000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={monthly_cap}
              onValueChange={value => setMonthly_cap(value)}
            />
            <Text h4 caption gray right>
              ${monthly_cap.toFixed(0)}
            </Text>
          </Block>
        </Block>
        <Divider />
        <Block style={styles.toggles}>
          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text gray>알림설정</Text>
            <Switch
              value={notifications}
              onValueChange={value => setNotifications(value)}
            />
          </Block>
          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text gray>새정보받기</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
            />
          </Block>
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
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  inputs: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.base * 2
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2
  }
});

export default ProfileScreen;
