import React from "react";
import { Image, Dimensions, ScrollView, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Card, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

function AuthScreen(props) {
  const { profiles, plans, navigation } = props;

  return (
    <Block middle style={styles.header}>
      <Block flex={false}>
        <Button
          color={theme.colors.primary}
          onPress={() => navigation.navigate("Main")}
        >
          <Text h2 center white>
            Go Home
          </Text>
        </Button>
      </Block>
      <Block flex={false}>
        <Button
          color={theme.colors.accent}
          onPress={() => navigation.navigate("Main")}
        >
          <Text h2 center white>
            Go Home
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

AuthScreen.navigationOptions = {
  header: null
};

AuthScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 1.5
  }
});

export default AuthScreen;
