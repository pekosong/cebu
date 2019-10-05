import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import WelcomeNavigator from './WelcomeNavigator';

const MainStack = createSwitchNavigator({
  // Auth: WelcomeNavigator,
  Main: MainTabNavigator,
});

export default createAppContainer(MainStack, {});
