import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {fromRight, fromBottom} from 'react-navigation-transitions';

import HomeScreen from 'app/src/screens/Home';
import CategoryScreen from 'app/src/screens/Category';

import MyTripScreen from 'app/src/screens/MyTrip';

import ChatListScreen from 'app/src/screens/ChatList';
import ChatScreen from 'app/src/screens/Chat';

import FavoritesScreen from 'app/src/screens/Favorites';

import ProfileScreen from 'app/src/screens/Profile/ProfileScreen';
import PersonalScreen from 'app/src/screens/Profile/PersonalScreen';
import NoticeScreen from 'app/src/screens/Profile/NoticeScreen';
import TripInfosScreen from 'app/src/screens/Profile/TripInfosScreen';
import TripInfoScreen from 'app/src/screens/Profile/TripInfoScreen';
import MyShopScreen from 'app/src/screens/Profile/MyShopScreen';
import ReservationScreen from 'app/src/screens/Profile/ReservationScreen';

import ShopScreen from 'app/src/screens/Shop';

import TabBarIcon from 'app/src/components/TabBarIcon';

import {theme} from 'app/src/styles';

const SearchStack = createStackNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    Shop: ShopScreen,
    Chat: ChatScreen,
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => fromRight(500),
  },
);
SearchStack.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName !== 'Search') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    tabBarLabel: '찾기',
    tabBarIcon: ({focused}) => (
      <TabBarIcon focused={focused} name={'search1'} />
    ),
  };
};

SearchStack.path = '';

const MyTripStack = createStackNavigator(
  {
    MyTrip: MyTripScreen,
    Shop: ShopScreen,
    Chat: ChatScreen,
  },
  {
    initialRouteName: 'MyTrip',
    transitionConfig: () => fromRight(500),
  },
);

MyTripStack.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'Shop') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    tabBarLabel: '내 일정',
    tabBarIcon: ({focused}) => (
      <TabBarIcon focused={focused} name={'enviromento'} />
    ),
  };
};
MyTripStack.path = '';

const FavoritesStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    Shop: ShopScreen,
  },
  {
    initialRouteName: 'Favorites',
    transitionConfig: () => fromRight(500),
  },
);

FavoritesStack.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'Shop') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    tabBarLabel: '저장소',
    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'hearto'} />,
  };
};

FavoritesStack.path = '';

const ChatStack = createStackNavigator(
  {
    ChatLists: ChatListScreen,
    Chat: ChatScreen,
    Shop: ShopScreen,
  },
  {
    initialRouteName: 'ChatLists',
    transitionConfig: () => fromRight(500),
  },
);

ChatStack.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName !== 'ChatLists') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    tabBarLabel: '메시지',
    tabBarIcon: ({focused}) => (
      <TabBarIcon focused={focused} name={'message1'} />
    ),
  };
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
  {
    initialRouteName: 'Profile',
    transitionConfig: () => fromRight(500),
  },
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
