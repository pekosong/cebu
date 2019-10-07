import React from 'react';

import {createStackNavigator} from 'react-navigation';

import AuthScreen from '../screens/Auth/AuthScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import ForgotScreen from '../screens/Auth/ForgotScreen';

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  Forgot: ForgotScreen,
});

export default AuthStack;
