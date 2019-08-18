import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading, Asset } from "expo";

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

  const handleResourcesAsync = async () => {
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  return !isLoadingComplete && props.skipLoadingScreen ? (
    <AppLoading
      startAsync={handleResourcesAsync}
      onError={error => console.warn(error)}
      onFinish={() => setIsLoadingComplete(true)}
    />
  ) : (
    <Block style={styles.container}>
      <Navigation />
    </Block>
  );
}

const styles = StyleSheet.create({});
