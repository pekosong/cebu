import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

export default WideText = props => {
  const { style, onPress, children } = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Block row space="between" style={styles.inputRow}>
        {children}
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  inputRow: {
    paddingBottom: 6,
    marginVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.gray
  }
});
