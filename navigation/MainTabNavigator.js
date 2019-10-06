import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import SearchScreen from '../screens/Search/SearchScreen';
import CategoryScreen from '../screens/Search/CategoryScreen';

import MyTripScreen from '../screens/MyTrip/MyTripScreen';
import TripSceen from '../screens/MyTrip/TripScreen';

import ChatListScreen from '../screens/ChatList/ChatListScreen';
import ChatScreen from '../screens/ChatList/ChatScreen';

import FavoritesScreen from '../screens/Favorites/FavoritesScreen';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import PersonalScreen from '../screens/Profile/PersonalScreen';
import NoticeScreen from '../screens/Profile/NoticeScreen';
import TripInfosScreen from '../screens/Profile/TripInfosScreen';
import TripInfoScreen from '../screens/Profile/TripInfoScreen';
import MyShopScreen from '../screens/Profile/MyShopScreen';

import ShopScreen from '../screens/Search/ShopScreen';

import TabBarIcon from '../components/TabBarIcon';

import {theme} from '../constants';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Category: CategoryScreen,
    Shop: ShopScreen,
    Chat: ChatScreen,
  },
  config,
);

SearchStack.navigationOptions = {
  tabBarLabel: '찾기',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

SearchStack.path = '';

const MyTripStack = createStackNavigator(
  {
    MyTrip: MyTripScreen,
    Trip: TripSceen,
    Chat: ChatScreen,
  },
  config,
);

const FavoritesStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    Shop: ShopScreen,
  },
  config,
);

FavoritesStack.navigationOptions = {
  tabBarLabel: '저장소',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-heart` : 'ios-heart'}
    />
  ),
};

FavoritesStack.path = '';
MyTripStack.navigationOptions = {
  tabBarLabel: '내 일정',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `logo-google` : 'logo-google'}
    />
  ),
};

MyTripStack.path = '';

const ChatStack = createStackNavigator(
  {
    ChatLists: ChatListScreen,
    Chat: ChatScreen,
    Shop: ShopScreen,
  },
  config,
);

ChatStack.navigationOptions = {
  tabBarLabel: '메시지',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'ios-chatbubbles'}
    />
  ),
};

ChatStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Personal: PersonalScreen,
    Notice: NoticeScreen,
    TripInfos: TripInfosScreen,
    TripInfo: TripInfoScreen,
    MyShop: MyShopScreen,
  },
  config,
);

ProfileStack.navigationOptions = {
  tabBarLabel: '내 정보',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-person' : 'md-person'}
    />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    SearchStack,
    FavoritesStack,
    MyTripStack,
    ChatStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.primary,
      inactiveTintColor: theme.colors.gray2,
      style: {
        margin: 0,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

tabNavigator.path = '';

export default tabNavigator;
