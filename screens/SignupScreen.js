import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  Dimensions
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import firebase from "../constants/store";
import { CalendarList, LocaleConfig } from "react-native-calendars";

const { height, width } = Dimensions.get("window");

LocaleConfig.locales["kor"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc."
  ],

  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"]
};
LocaleConfig.defaultLocale = "kor";

const SignupScreen = props => {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState({
    "2019-09-20": {
      startingDay: true,
      color: theme.colors.primary,
      textColor: "white"
    },
    "2019-09-21": {
      selected: true,
      color: theme.colors.primary,
      textColor: "white"
    },
    "2019-09-22": {
      selected: true,
      color: theme.colors.primary,
      textColor: "white"
    },
    "2019-09-23": {
      selected: true,
      endingDay: true,
      color: theme.colors.primary,
      textColor: "white"
    }
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hotel, setHotel] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(2);

  signUp = async () => {
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

  hasErrors = () => (isError ? styles.hasErrors : null);

  handleDate = day => {
    newDate = new Object();
    newDate[day.dateString] = {
      selected: true,
      selectedColor: "red",
      marked: true,
      dotColor: "red",
      selectedDotColor: "blue"
    };
    setDate(newDate);
  };

  handleSignUp = async () => {
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
      .doc(email)
      .set(newCus)
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

  renderSignUp = () => {
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
        <Block>
          <Block bottom padding={[0, theme.sizes.base * 2]}>
            <Text bold style={{ fontSize: 40, paddingBottom: 40 }}>
              Plan
            </Text>
          </Block>
          <CalendarList
            style={{
              width,
              overflow: "hidden"
            }}
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={width}
            onVisibleMonthsChange={months => {
              console.log("now these months are visible", months);
            }}
            onDayPress={day => handleDate(day)}
            monthFormat={"yyyy MM"}
            hideExtraDays={true}
            disableMonthChange={true}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            markedDates={date}
            markingType={"period"}
            theme={{
              arrowColor: theme.colors.primary,
              todayTextColor: theme.colors.primary,
              mondayTextColor: theme.colors.primary
            }}
          />

          <Block top padding={[0, theme.sizes.base * 2]}>
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
