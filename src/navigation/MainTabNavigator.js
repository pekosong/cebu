import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import SearchScreen from 'app/src/screens/Search/SearchScreen';
import CategoryScreen from 'app/src/screens/Search/CategoryScreen';
import TestScreen from 'app/src/screens/Search/TestScreen';

import MyTripScreen from 'app/src/screens/MyTrip/MyTripScreen';

import ChatListScreen from 'app/src/screens/ChatList/ChatListScreen';
import ChatScreen from 'app/src/screens/ChatList/ChatScreen';

import FavoritesScreen from 'app/src/screens/Favorites/FavoritesScreen';

import ProfileScreen from 'app/src/screens/Profile/ProfileScreen';
import PersonalScreen from 'app/src/screens/Profile/PersonalScreen';
import NoticeScreen from 'app/src/screens/Profile/NoticeScreen';
import TripInfosScreen from 'app/src/screens/Profile/TripInfosScreen';
import TripInfoScreen from 'app/src/screens/Profile/TripInfoScreen';
import MyShopScreen from 'app/src/screens/Profile/MyShopScreen';
import ReservationScreen from 'app/src/screens/Profile/ReservationScreen';

// import ShopScreen from 'app/src/screens/Search/ShopScreen';
import ShopScreen from 'app/src/screens/Shop';

// import ActivityScreen from 'app/src/screens/Search/ActivityScreen';
import CategoryActivityScreen from 'app/src/screens/Search/CategoryActivityScreen';

import TabBarIcon from 'app/src/components/TabBarIcon';

import {theme} from 'app/src/styles';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Category: CategoryScreen,
    Shop: ShopScreen,
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
      activeTintColor: theme.colors.black,
      inactiveTintColor: theme.colors.gray,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        height: 55,
        paddingTop: 15,
        paddingBottom: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
      },
    },
  },
);

tabNavigator.path = '';

export default tabNavigator;
