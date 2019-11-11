import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import SearchScreen from '../screens/Search/SearchScreen';
import CategoryScreen from '../screens/Search/CategoryScreen';
import TestScreen from '../screens/Search/TestScreen';

import MyTripScreen from '../screens/MyTrip/MyTripScreen';

import ChatListScreen from '../screens/ChatList/ChatListScreen';
import ChatScreen from '../screens/ChatList/ChatScreen';

import FavoritesScreen from '../screens/Favorites/FavoritesScreen';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import PersonalScreen from '../screens/Profile/PersonalScreen';
import NoticeScreen from '../screens/Profile/NoticeScreen';
import TripInfosScreen from '../screens/Profile/TripInfosScreen';
import TripInfoScreen from '../screens/Profile/TripInfoScreen';
import MyShopScreen from '../screens/Profile/MyShopScreen';
import ReservationScreen from '../screens/Profile/ReservationScreen';

import ShopScreen from '../screens/Search/ShopScreen';
import ActivityScreen from '../screens/Search/ActivityScreen';
import CategoryActivityScreen from '../screens/Search/CategoryActivityScreen';

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
    Activity: ActivityScreen,
    CategoryActivity: CategoryActivityScreen,
    Chat: ChatScreen,
    Test: TestScreen,
  },
  config,
);

SearchStack.navigationOptions = {
  tabBarLabel: '찾기',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'search1'} />,
};

SearchStack.path = '';

const MyTripStack = createStackNavigator(
  {
    MyTrip: MyTripScreen,
    Shop: ShopScreen,
    Chat: ChatScreen,
    Activity: ActivityScreen,
  },
  config,
);

const FavoritesStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    Shop: ShopScreen,
    Activity: ActivityScreen,
  },
  config,
);

FavoritesStack.navigationOptions = {
  tabBarLabel: '저장소',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'hearto'} />,
};

FavoritesStack.path = '';
MyTripStack.navigationOptions = {
  tabBarLabel: '내 일정',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'enviromento'} />
  ),
};

MyTripStack.path = '';

const ChatStack = createStackNavigator(
  {
    ChatLists: ChatListScreen,
    Chat: ChatScreen,
    Shop: ShopScreen,
    Activity: ActivityScreen,
  },
  config,
);

ChatStack.navigationOptions = {
  tabBarLabel: '메시지',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'message1'} />,
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
    Reservation: ReservationScreen,
  },
  config,
);

ProfileStack.navigationOptions = {
  tabBarLabel: '내 정보',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'user'} />,
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
      activeTintColor: theme.colors.accent,
      inactiveTintColor: theme.colors.gray2,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        height: 60,
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderTopWidth: 0.6,
        shadowOffset: {width: 2, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
      },
    },
  },
);

tabNavigator.path = '';

export default tabNavigator;
