import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import WelcomeNavigator from './WelcomeNavigator';

const MainStack = createSwitchNavigator({
  Main: MainTabNavigator,
  Auth: WelcomeNavigator,
});

export default createAppContainer(MainStack, {});
