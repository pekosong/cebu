import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, YellowBox } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppNavigator from "./navigation/AppNavigator";
import { Ionicons } from "@expo/vector-icons";

import { Block } from "./components";

YellowBox.ignoreWarnings(["Warning: ..."]);
console.ignoredYellowBox = ["Setting a timer"];

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Block style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Block>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/cebu_food1.jpg"),
      require("./assets/images/cebu_food2.jpeg"),
      require("./assets/images/cebu_food3.jpeg"),
      require("./assets/images/cebu_food4.jpg"),
      require("./assets/images/cebu_massage1.jpg"),
      require("./assets/images/cebu_massage2.jpeg"),
      require("./assets/images/cebu_massage3.jpg"),
      require("./assets/images/cebu_massage4.jpg"),
      require("./assets/images/hello.jpg"),
      require("./assets/images/weather.png"),
      require("./assets/images/avatar.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
