import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import Block from "./Block";
import Text from "./Text";
import { theme } from "../constants";

const { height, width } = Dimensions.get("window");

export default CardMenu = props => {
  const { style, children, item } = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.elementContainer}>
        <Block flex={2}>
          <Image style={styles.imageStyle} source={{ uri: item.src }}></Image>
        </Block>
        <Block row flex={1}>
          <Block flex={3} middle>
            <Text h3 bold style={{ marginVertical: 2 }}>
              {item.name}
            </Text>
            <Text caption>{item.desc}</Text>
          </Block>
          <Block flex={2} middle>
            {children}
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 3,
    width: width / 2 - theme.sizes.padding,
    height: 150,
    marginRight: 20
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 3
  }
});
