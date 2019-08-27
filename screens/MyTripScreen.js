import React, { useState, useEffect } from "react";
import {
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");
const tabs = ["ALL", "first", "second", "third"];
const dayMap = {
  ALL: "전체",
  first: "1일차",
  second: "2일차",
  third: "3일차"
};

function MyTripScreen(props) {
  const { profiles, plans, navigation } = props;
  const [active, setActive] = useState("ALL");
  const [selectedPlans, setSelectedPlans] = useState([]);

  useEffect(() => {
    setSelectedPlans(Object.keys(plans));
  }, []);

  const renderTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {dayMap[tab]}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleTab = tab => {
    if (tab == "ALL") {
      setSelectedPlans(Object.keys(plans));
    } else {
      setSelectedPlans([tab]);
    }
    setActive(tab);
  };

  const renderPlan = plan => {
    return plan.map(todo => (
      <TouchableOpacity
        key={todo.location}
        onPress={() => navigation.navigate("Trip", { trip: todo })}
      >
        <Card middle shadow style={styles.category}>
          <Block middle flex={1.3}>
            <Badge margin={[0, 0]} size={45} color={theme.colors.primary}>
              <Ionicons size={30} color="white" name={todo.category} />
            </Badge>
          </Block>
          <Block middle flex={3}>
            <Text h4 bold medium height={25}>
              {todo.time}
            </Text>

            <Text gray medium height={25}>
              {todo.location}
            </Text>
          </Block>
          {todo.pickup ? (
            <Block center middle flex={1.5}>
              <Badge margin={[0, 0]} size={25} color={theme.colors.secondary}>
                <Ionicons size={15} color="white" name="md-car" />
              </Badge>
              <Text medium caption height={20}>
                {todo.pickup.location}
              </Text>
              <Text medium caption>
                {todo.pickup.time}
              </Text>
            </Block>
          ) : (
            <Block center middle flex={1.5}>
              <Badge margin={[0, 0]} size={25} color={theme.colors.gray}>
                <Ionicons size={15} color="white" name="md-car" />
              </Badge>
              <Text medium caption height={20}>
                No Pickup
              </Text>
            </Block>
          )}
        </Card>
      </TouchableOpacity>
    ));
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedPlans.map(myPlan => (
          <Block
            key={myPlan}
            flex={false}
            row
            space="between"
            style={styles.categories}
          >
            <Text h2 bold height={40}>
              {dayMap[myPlan]}
              <Text>{"  " + plans[myPlan]["date"]}</Text>
              <Text>{"  "}</Text>
              <Ionicons size={14} name="ios-arrow-forward"></Ionicons>
            </Text>
            {renderPlan(plans[myPlan]["plan"])}
          </Block>
        ))}
      </ScrollView>
    </Block>
  );
}

MyTripScreen.navigationOptions = {
  header: null
};

MyTripScreen.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories,
  plans: mocks.plans
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
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
  shadow: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "white",
    marginBottom: theme.sizes.base / 4,
    paddingHorizontal: 10,
    borderBottomColor: "red"
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 1.5,
    marginBottom: theme.sizes.base * 1
  },
  category: {
    flexDirection: "row",
    padding: theme.sizes.padding / 2,
    width: width - theme.sizes.base * 3
  }
});

export default MyTripScreen;
