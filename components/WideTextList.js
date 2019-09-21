import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Block from "./Block";
import Text from "./Text";
import { theme } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export default WideText = props => {
  const { style, lists, profile, navigation } = props;

  return lists.map((e, idx) => {
    return (
      <TouchableOpacity
        key={idx}
        onPress={() => navigation.navigate(e.navigation, { profile: profile })}
      >
        <Block row space="between" style={styles.inputRow}>
          <Text h3>{e.title}</Text>
          <Ionicons
            size={25}
            name={e.icon}
            style={{ color: theme.colors.primary }}
          ></Ionicons>
        </Block>
      </TouchableOpacity>
    );
  });
};

export const styles = StyleSheet.create({
  inputRow: {
    paddingBottom: 6,
    marginVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.gray
  }
});
