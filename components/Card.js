import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Block from "./Block";
import Text from "./Text";
import { theme } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export default Card = props => {
  const { style, children, item } = props;

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.elementContainer}>
        <Block flex={2}>
          <Image style={styles.imageStyle} source={item.src}></Image>
          <Ionicons
            style={{ position: "absolute", top: 5, right: 10 }}
            size={25}
            color={theme.colors.primary}
            name="md-heart"
          />
          <Block
            style={{
              position: "absolute",
              right: 5,
              bottom: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: 10
            }}
          >
            <Text white>오늘</Text>
          </Block>
        </Block>
        <Block row flex={1}>
          <Block flex={3} middle>
            <Text style={{ fontWeight: "bold", color: theme.colors.primary }}>
              {item.tag}
            </Text>
            <Text h3 bold style={{ marginVertical: 5 }}>
              {item.shop}
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
    width: 250,
    height: 250,
    marginRight: 20
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});
