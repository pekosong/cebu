import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";

import AuthScreen from "../screens/AuthScreen"
const MainStack = createSwitchNavigator({
  Auth: AuthScreen,
  Main: MainTabNavigator
});

export default createAppContainer(MainStack, {
});
