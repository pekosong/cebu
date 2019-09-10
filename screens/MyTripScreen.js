import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  AsyncStorage,
  FlatList
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import firebase from "../constants/store";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

function MyTripScreen(props) {
  const { profiles, navigation, lists, myplans } = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState("");
  const [plans, setPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    let unsubscribePlans;
    setActive("ALL");

    _retrieveData().then(email => {
      unsubscribePlans = firebase
        .firestore()
        .collection("users")
        .doc(email)
        .onSnapshot(doc => {
          let myPlans = doc.data().plans;
          setPlans(myPlans);
          setSelectedPlans(myPlans);
          setTabs(["ALL"].concat(myPlans.map(e => e.nDay)));
          setisLoaded(true);
        });
    });
    return () => {
      unsubscribePlans();
    };
  }, []);

  getShopData = shops => {
    shops.forEach(e => {
      firebase
        .firestore()
        .collection("shops")
        .doc(e.category)
        .get()
        .then(e => console.log(e));
    });
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("profile");
      if (value !== null) {
        const profile = JSON.parse(value);
        return profile.email;
      }
    } catch (err) {
      console.log(err);
    }
  };

  upload = async email => {
    await firebase
      .firestore()
      .collection("users")
      .doc(email)
      .set({ plans: myplans }, { merge: true })
      .then(() => console.log("done"));
  };

  renderTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  handleTab = tab => {
    if (tab == "ALL") {
      setSelectedPlans(plans);
    } else {
      setSelectedPlans(plans.filter(plan => plan.nDay == tab));
    }
    setActive(tab);
  };

  renderList = ({ item }) => {
    return (
      <Block key={item.date} style={styles.categories}>
        <Text h2 bold height={40}>
          {item.date}
          <Text>{"   "}</Text>
          <Text>{item.nDay}</Text>
          <Text>{"  "}</Text>
          <Ionicons size={14} name="ios-arrow-forward"></Ionicons>
        </Text>
        {item.plan.map((todo, idx) => {
          const shop = lists[todo.category].filter(e => e.id == todo.shopId)[0];
          return shop ? (
            <TouchableOpacity
              key={todo.shopId + idx}
              onPress={() =>
                navigation.navigate("Trip", {
                  title: "내 일정",
                  trip: todo,
                  shop: shop,
                  shopId: todo.shopId,
                  category: todo.category
                })
              }
            >
              <Block
                row
                style={{
                  marginVertical: 10,
                  paddingBottom: 5,
                  borderBottomWidth: 0.3,
                  borderBottomColor: theme.colors.gray
                }}
              >
                <Block left flex={1}>
                  <Image source={shop.source} style={styles.avatarChat} />
                </Block>
                <Block flex={3.5} style={{ marginTop: 5, height: 48 }}>
                  <Block middle row space="between">
                    <Text h3 bold>
                      {shop.name}
                    </Text>
                    <Text caption>{todo.time}</Text>
                  </Block>
                  <Block bottom style={{ marginTop: 6 }}>
                    <Text>{shop.engName}</Text>
                  </Block>
                </Block>
              </Block>
            </TouchableOpacity>
          ) : null;
        })}
      </Block>
    );
  };
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          내 일정
        </Text>
        <Button onPress={() => navigation.navigate("Settings", { profiles })}>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={selectedPlans}
            keyExtractor={(item, index) => "key" + index}
            renderItem={item => renderList(item)}
          />
        </ScrollView>
      ) : (
        <Block style={styles.full}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
          ></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
}

MyTripScreen.navigationOptions = {
  header: null
};

MyTripScreen.defaultProps = {
  profiles: mocks.profiles,
  lists: mocks.lists,
  myplans: mocks.plans
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  avatarChat: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical:
      Platform.OS === "ios" ? theme.sizes.base * 0.8 : theme.sizes.base,
    marginHorizontal: theme.sizes.base * 1.5
  },
  tab: {
    marginRight: theme.sizes.base * 1.5,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    paddingHorizontal: theme.sizes.base * 1.5,
    marginBottom: theme.sizes.base * 1
  }
});

export default MyTripScreen;
