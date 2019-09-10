import React from "react";

import { createStackNavigator } from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Login: LoginScreen,
  Signup: SignupScreen
});

export default AuthStack;
