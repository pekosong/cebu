import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";

import Block from "./Block";
import Text from "./Text";

export default FullImageSlider = props => {
  const { source } = props;
  const [imageNum, setImageNum] = useState(1);
  const { height, width } = Dimensions.get("window");

  useEffect(() => {}, []);
  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };
  return (
    <Block>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScrollByX}
      >
        {[1, 2, 3].map(e => (
          <ImageBackground
            key={e}
            source={{ uri: source }}
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
          {imageNum + " / 3"}
        </Text>
      </Block>
    </Block>
  );
};

export const styles = StyleSheet.create({});
