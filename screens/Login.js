import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const EMAIL = "peko22@naver.com";
const PASSWORD = "1q2w3e4r";
const Login = props => {
  const { navigation } = props;

  const [email, setEmail] = useState(EMAIL);
  const [password, setPassword] = useState(PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  const handleLogin = () => {
    setLoading(true);
    setErrors([]);
    let myErrors = [];

    Keyboard.dismiss();

    setTimeout(() => {
      if (email !== EMAIL) {
        myErrors.push("email");
      }

      if (password !== PASSWORD) {
        myErrors.push("password");
      }

      setErrors(myErrors);
      setLoading(false);

      if (!myErrors.length) {
        navigation.navigate("Browse");
      }
    }, 500);
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Input
            secure
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />

          <Button gradient onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Login
              </Text>
            )}
          </Button>
          <Button>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
              onPress={() => navigation.navigate("Forgot")}
            >
              Forget your password?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

Login.navigationOptions = {};

const styles = StyleSheet.create({
  login: {
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

export default Login;
