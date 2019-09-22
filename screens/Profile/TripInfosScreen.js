import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { Button, Block, Text } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const TripInfosScreen = props => {
  const { navigation } = props;
  const [editing, setEditing] = useState(null);
  const [plans, setPlans] = useState({});
  const user = useSelector(state => state.user, shallowEqual);

  const NUMTOWEEK = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토"
  };

  useEffect(() => {
    setPlans(user.plans);
  }, [user]);

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
          <Block space="between" row style={styles.plan}>
            <Text h3 bold>
              일정
            </Text>
            <Text h3 bold>
              호텔
            </Text>
          </Block>
          {Object.keys(plans).map((key, idx) => {
            return (
              <Block space="between" row key={idx} style={styles.plan}>
                <Text h4>
                  {key}
                  {" (" + NUMTOWEEK[moment(key).day()] + ")"}
                </Text>
                <Text h4>{plans[key].hotel}</Text>
              </Block>
            );
          })}
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
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.padding,
    marginVertical: 10
  },
  plan: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.gray
  }
});

export default TripInfosScreen;
