import React, { useState } from "react";
import { Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

const Settings = props => {
  const { navigation, profiles } = props;

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Settings
        </Text>
      </Block>
    </Block>
  );
};

Settings.navigationOptions = {};
Settings.defaultProps = {
  profiles: mocks.profiles
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  }
});

export default Settings;
