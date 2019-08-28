import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

import { theme } from "../constants";

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Login: LoginScreen,
  Signup: SignupScreen
});

export default AuthStack;
