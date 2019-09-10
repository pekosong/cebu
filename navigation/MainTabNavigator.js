import React from "react";
import { Platform } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import EtcScreen from "../screens/EtcScreen";
import MyTripScreen from "../screens/MyTripScreen";
import TripSceen from "../screens/TripScreen";

import SearchScreen from "../screens/SearchScreen";
import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ShopScreen from "../screens/ShopScreen";

import TabBarIcon from "../components/TabBarIcon";

import { theme } from "../constants";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Category: CategoryScreen,
    Shop: ShopScreen,
    Chat: ChatScreen
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

const MyTripStack = createStackNavigator(
  {
    MyTrip: MyTripScreen,
    Trip: TripSceen,
    Chat: ChatScreen
  },
  config
);

MyTripStack.navigationOptions = {
  tabBarLabel: "내 일정",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-list` : "ios-list"}
    />
  )
};

MyTripStack.path = "";

const ChatStack = createStackNavigator(
  {
    ChatLists: ChatListScreen,
    Chat: ChatScreen
  },
  config
);

ChatStack.navigationOptions = {
  tabBarLabel: "메시지",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatbubbles" : "ios-chatbubbles"}
    />
  )
};

ChatStack.path = "";

const EtcStack = createStackNavigator(
  {
    Etc: EtcScreen
  },
  config
);

EtcStack.navigationOptions = {
  tabBarLabel: "정보",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle`
          : "ios-information-circle"
      }
    />
  )
};

EtcStack.path = "";

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

ProfileStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    SearchStack,
    MyTripStack,
    ChatStack,
    EtcStack,
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
