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

const EMAIL = "peko22@naver.com";

const Forgot = props => {
  const { navigation } = props;
  const [email, setEmail] = useState(EMAIL);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  const handleForgot = () => {
    setLoading(true);
    setErrors([]);
    let myErrors = [];

    Keyboard.dismiss();

    setTimeout(() => {
      if (email !== EMAIL) {
        myErrors.push("email");
      }

      setErrors(myErrors);
      setLoading(false);

      if (!myErrors.length) {
        Alert.alert(
          "Password sent!",
          "Please check your email.",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Login");
              }
            }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Error",
          "Please check your Email address.",
          [
            {
              text: "Try again"
            }
          ],
          { cancelable: false }
        );
      }
    }, 2000);
  };

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot
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

          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Forgot
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

Forgot.navigationOptions = {};

const styles = StyleSheet.create({
  forgot: {
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

export default Forgot;
