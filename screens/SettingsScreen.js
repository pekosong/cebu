import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { Divider, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

export default function SettingsScreen(props) {
  const { profiles } = props;

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          예약 관리
        </Text>
        <Button>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
    </Block>
  );
}

SettingsScreen.defaultProps = {
  profiles: mocks.profiles
};

SettingsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  }
});
