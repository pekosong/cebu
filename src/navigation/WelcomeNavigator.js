import React from 'react';

import {createStackNavigator} from 'react-navigation';

import AuthScreen from 'app/src/screens/Auth/AuthScreen';
import LoginScreen from 'app/src/screens/Auth/LoginScreen';
import SignupScreen from 'app/src/screens/Auth/SignupScreen';
import ForgotScreen from 'app/src/screens/Auth/ForgotScreen';

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  Forgot: ForgotScreen,
});

export default AuthStack;
