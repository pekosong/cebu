import React from "react";

import { createStackNavigator } from "react-navigation";

import AuthScreen from "../screens/Auth/AuthScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Login: LoginScreen,
  Signup: SignupScreen
});

export default AuthStack;
