import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const Signup = props => {
  const { navigation } = props;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  const handleSignUp = () => {
    setLoading(true);
    setErrors([]);
    let myErrors = [];

    Keyboard.dismiss();

    if (!email) myErrors.push("email");
    if (!password) myErrors.push("password");
    if (!username) myErrors.push("username");

    setErrors(myErrors);
    setLoading(false);

    if (!myErrors.length) {
      Alert.alert(
        "Success!",
        "Your Account has been created.",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <KeyboardAvoidingView style={styles.signup} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          SignUp
        </Text>
        <Block middle>
          <Input
            email
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Input
            label="Username"
            error={hasErrors("username")}
            style={[styles.input, hasErrors("username")]}
            defaultValue={username}
            onChangeText={text => {
              setUsername(text);
            }}
          />
          <Input
            sercure
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <Button gradient onPress={() => handleSignUp()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Sign Up
              </Text>
            )}
          </Button>
          <Button>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
              onPress={() => navigation.navigate("Login")}
            >
              Back to Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

Signup.navigationOptions = {};

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});

export default Signup;
