import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import firebase from "../constants/store";

const EMAIL = "peko22@naver.com";
const PASSWORD = "1q2w3e4r";
const steps = [1, 2, 3];

const SignupScreen = props => {
  const { navigation } = props;

  const [email, setEmail] = useState(EMAIL);
  const [password, setPassword] = useState(PASSWORD);
  const [step, setStep] = useState(1);

  const signUp = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
      });
  };
  const handleSignup = () => {
    if (step == 1) {
      return (
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text bold style={{ fontSize: 40, paddingBottom: 40 }}>
              Email
            </Text>
            <Input
              label="Email"
              style={[styles.input]}
              defaultValue={email}
              onChangeText={text => {
                setEmail(text);
              }}
            />
            <Input
              secure
              label="Password"
              style={[styles.input]}
              defaultValue={password}
              onChangeText={text => {
                setPassword(text);
              }}
            />

            <Button
              gradient
              onPress={() => {
                setStep(step + 1);
              }}
            >
              <Text bold white center>
                Next
              </Text>
            </Button>
            <Button shadow style={styles.shadow}>
              <Text center semibold onPress={() => navigation.goBack()}>
                Back
              </Text>
            </Button>
          </Block>
        </Block>
      );
    } else if (step == 2) {
      return (
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text bold style={{ fontSize: 40, paddingBottom: 40 }}>
              Plan
            </Text>
            <Input
              label="출발일"
              style={[styles.input]}
              onChangeText={text => {}}
            />
            <Input
              label="도착일"
              style={[styles.input]}
              onChangeText={text => {}}
            />

            <Button
              gradient
              onPress={() => {
                setStep(step + 1);
              }}
            >
              <Text bold white center>
                Next
              </Text>
            </Button>
            <Button shadow style={styles.shadow}>
              <Text center semibold onPress={() => setStep(step - 1)}>
                Back
              </Text>
            </Button>
          </Block>
        </Block>
      );
    } else {
      return (
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text bold style={{ fontSize: 40, paddingBottom: 40 }}>
              Hotel
            </Text>
            <Input
              label="Hotel"
              style={[styles.input]}
              onChangeText={text => {}}
            />
            <Button
              gradient
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text bold white center>
                Go to Login
              </Text>
            </Button>
            <Button shadow style={styles.shadow}>
              <Text center semibold onPress={() => setStep(step - 1)}>
                Back
              </Text>
            </Button>
          </Block>
        </Block>
      );
    }
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      {handleSignup()}
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = {
  header: null
};

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

export default SignupScreen;
