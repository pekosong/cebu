import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";
import * as constants from "./constants";

const images = [
  require("./assets/icons/back.png"),
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
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
      <Navigation />
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
