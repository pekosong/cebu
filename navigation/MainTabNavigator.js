import React from "react";
import { Platform } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import MyTripScreen from "../screens/MyTripScreen";
import TripSceen from "../screens/TripScreen";

import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ShopScreen from "../screens/ShopScreen";

import TabBarIcon from "../components/TabBarIcon";

import { theme } from "../constants";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "홈",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `md-home` : "md-home"}
    />
  )
};

HomeStack.path = "";

const MyTripStack = createStackNavigator(
  {
    MyTrip: MyTripScreen,
    Trip: TripSceen
  },
  config
);

MyTripStack.navigationOptions = {
  tabBarLabel: "내 일정",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `md-pin` : "md-pin"}
    />
  )
};

MyTripStack.path = "";

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Category: CategoryScreen,
    Shop: ShopScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "찾기",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

SearchStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "예약 관리",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "md-book" : "md-book"}
    />
  )
};

SettingsStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "내 정보",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "md-person" : "md-person"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    MyTripStack,
    SearchStack,
    SettingsStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.primary,
      inactiveTintColor: theme.colors.gray2,
      style: {
        margin: 0,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
