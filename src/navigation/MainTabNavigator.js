import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {fromRight, fromBottom} from 'react-navigation-transitions';

import HomeScreen from 'app/src/screens/Home';
import CategoryScreen from 'app/src/screens/Category';
import SearchScreen from 'app/src/screens/Search';

import MyTripScreen from 'app/src/screens/MyTrip';

import ChatListScreen from 'app/src/screens/ChatList';
import ChatScreen from 'app/src/screens/Chat';

import FavoritesScreen from 'app/src/screens/Favorites';

import ProfileScreen from 'app/src/screens/Profile/ProfileScreen';
import PersonalScreen from 'app/src/screens/Profile/PersonalScreen';
import NoticeScreen from 'app/src/screens/Profile/NoticeScreen';
import NoticeTestScreen from 'app/src/screens/Profile/NoticeTestScreen';
import TripInfosScreen from 'app/src/screens/Profile/TripInfosScreen';
import TripInfoScreen from 'app/src/screens/Profile/TripInfoScreen';
import MyShopScreen from 'app/src/screens/Profile/MyShopScreen';
import ReservationScreen from 'app/src/screens/Profile/ReservationScreen';
import HelpScreen from 'app/src/screens/Profile/HelpScreen';
import ProposalScreen from 'app/src/screens/Profile/ProposalScreen';

import LoginScreen from 'app/src/screens/Auth/LoginScreen';
import SignupScreen from 'app/src/screens/Auth/SignupScreen';
import ForgotScreen from 'app/src/screens/Auth/ForgotScreen';

import ShopScreen from 'app/src/screens/Shop';

import TabBarIcon from 'app/src/components/TabBarIcon';

import {theme} from 'app/src/styles';

const SearchStack = createStackNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    Shop: ShopScreen,
    Chat: ChatScreen,
    Search: SearchScreen,
    Login: LoginScreen,
    Forgot: ForgotScreen,
    Signup: SignupScreen,
    Personal: PersonalScreen,
    TripInfos: TripInfosScreen,
    TripInfo: TripInfoScreen,
  },
  {
    initialRouteName: 'Home',
    transitionConfig: ({navigation}) => {
      return fromRight(500);
    },
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
    Login: LoginScreen,
    Forgot: ForgotScreen,
    Signup: SignupScreen,
    TripInfos: TripInfosScreen,
    TripInfo: TripInfoScreen,
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
    Login: LoginScreen,
    Forgot: ForgotScreen,
    Signup: SignupScreen,
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
    Login: LoginScreen,
    Forgot: ForgotScreen,
    Signup: SignupScreen,
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
    NoticeTest: NoticeTestScreen,
    TripInfos: TripInfosScreen,
    TripInfo: TripInfoScreen,
    MyShop: MyShopScreen,
    Reservation: ReservationScreen,
    Help: HelpScreen,
    Proposal: ProposalScreen,
    Login: LoginScreen,
    Forgot: ForgotScreen,
    Signup: SignupScreen,
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
        fontSize: 10,
      },
      style: {
        height: 52,
        paddingTop: 13,
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
