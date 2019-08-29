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

const SignupScreen = props => {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hotel, setHotel] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);

  const signUp = async () => {
    setLoading(true);
    Keyboard.dismiss();

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setError("");
        setIsError(false);
        setStep(step + 1);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
        setIsError(true);
        setLoading(false);
      });
  };

  const hasErrors = () => (isError ? styles.hasErrors : null);

  const handleSignUp = async () => {
    setLoading(true);
    Keyboard.dismiss();

    const newCus = {
      uid: firebase.auth().currentUser.uid,
      email: email,
      startDate: startDate,
      endDate: endDate,
      hotel: hotel,
      date: new Date()
    };

    console.log(newCus);

    await firebase
      .firestore()
      .collection("users")
      .add(newCus)
      .then(() => {
        console.log("Document successfully written!");
        setLoading(false);
        navigation.navigate("Login");
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const renderSignUp = () => {
    if (step == 1) {
      return (
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text bold style={{ fontSize: 40, paddingBottom: 40 }}>
              Email
            </Text>
            <Input
              label="Email"
              style={[styles.input, hasErrors()]}
              defaultValue={email}
              onChangeText={text => {
                setEmail(text);
              }}
            />
            <Input
              secure
              label="Password"
              style={[styles.input, hasErrors()]}
              defaultValue={password}
              onChangeText={text => {
                setPassword(text);
              }}
            />
            {isError ? <Text color={theme.colors.accent}>{error}</Text> : null}

            <Button
              gradient
              onPress={() => {
                signUp();
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Next
                </Text>
              )}
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
              defaultValue={startDate}
              onChangeText={text => {
                setStartDate(text);
              }}
            />
            <Input
              label="도착일"
              style={[styles.input]}
              defaultValue={endDate}
              onChangeText={text => {
                setEndDate(text);
              }}
            />

            <Button
              gradient
              onPress={() => {
                setStep(step + 1);
                setLoading(false);
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
              defaultValue={hotel}
              onChangeText={text => {
                setHotel(text);
              }}
            />
            <Button
              gradient
              onPress={() => {
                handleSignUp();
              }}
            >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Go to Login
                </Text>
              )}
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
      {renderSignUp()}
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
