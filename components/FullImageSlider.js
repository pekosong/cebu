import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ActivityIndicator
} from "react-native";

import Block from "./Block";
import Text from "./Text";
import { theme } from "../constants";

export default FullImageSlider = props => {
  const { source } = props;
  const [imageNum, setImageNum] = useState(1);
  const [maxImageNum, setMaxImageNum] = useState(1);

  const { height, width } = Dimensions.get("window");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (source) {
      setIsLoaded(true);
      setMaxImageNum(source.length);
    }
  }, [source]);
  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };
  return isLoaded ? (
    <Block>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScrollByX}
      >
        {source.map(e => (
          <ImageBackground
            key={e}
            source={{ uri: e }}
            style={{
              width: width,
              height: 250,
              resizeMode: "stretch"
            }}
          >
            <Block
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.24)"
              }}
            ></Block>
          </ImageBackground>
        ))}
      </ScrollView>
      <Block
        center
        middle
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 8
        }}
      >
        <Text white bold size={11}>
          {imageNum + " / " + maxImageNum}
        </Text>
      </Block>
    </Block>
  ) : (
    <Block style={styles.full}>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
      ></ActivityIndicator>
    </Block>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    height: 250,
    justifyContent: "center"
  }
});
