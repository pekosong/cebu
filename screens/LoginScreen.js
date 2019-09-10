import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import firebase from "../constants/store";

const EMAIL = "peko22@naver.com";
const PASSWORD = "thdckdrms1";
const LoginScreen = props => {
  const { navigation } = props;

  const [email, setEmail] = useState(EMAIL);
  const [password, setPassword] = useState(PASSWORD);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  _storeData = async () => {
    try {
      await firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.map(doc => {
            AsyncStorage.setItem("profile", JSON.stringify(doc.data()));
          });
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const hasErrors = () => (isError ? styles.hasErrors : null);
  const handleLogin = async () => {
    setLoading(true);

    Keyboard.dismiss();

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsError(false);
        setLoading(false);
        _storeData();
        navigation.navigate("Home");
      })
      .catch(err => {
        console.log(err);
        setIsError(true);
        setLoading(false);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Block middle>
          <Text bold style={{ fontSize: 40, paddingBottom: 40 }}>
            Login
          </Text>
          <Input
            label="Email"
            error={hasErrors()}
            style={[styles.input, hasErrors()]}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Input
            secure
            label="Password"
            error={hasErrors()}
            style={[styles.input, hasErrors()]}
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
          <Button shadow style={styles.shadow}>
            <Text center semibold onPress={() => navigation.navigate("Auth")}>
              Back
            </Text>
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

LoginScreen.navigationOptions = {
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

export default LoginScreen;