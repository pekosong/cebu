import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

// import Navigation from "./navigation";
import AppNavigator from "./navigation/AppNavigator";

import { Block } from "./components";
import * as constants from "./constants";

const images = [
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
];

export default function App(props) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isFontComplete, setIsFontComplete] = useState(false);

  const handleResourcesAsync = async () => {
    const cacheImages = images.map(img => {
      return Asset.fromModule(img).downloadAsync();
    });
    await Font.loadAsync({
      BMHANNAPro: require("./assets/fonts/BMHANNAPro.ttf")
    });
    return Promise.all(cacheImages);
  };

  return isLoadingComplete && isFontComplete ? (
    <Block style={styles.container}>
      <AppNavigator />
    </Block>
  ) : (
    <AppLoading
      startAsync={handleResourcesAsync}
      onError={error => console.warn(error)}
      onFinish={() => {
        setIsFontComplete(true);
        setIsLoadingComplete(true);
      }}
    />
  );
}

const styles = StyleSheet.create({});
