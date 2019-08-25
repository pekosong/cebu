import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

export default function ShopScreen(props) {
  const { navigation } = props;
  const [shop, setShop] = useState({});

  useEffect(() => {
    setShop(navigation.getParam("shop"));
  }, []);

  const renderStar = () => {
    console.log(shop.review);
    return [...Array(5).keys()].map(e => (
      <Ionicons key={e} size={30} color={theme.colors.accent} name="md-star" />
    ));
  };
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          <Ionicons
            color={theme.colors.gray}
            size={35}
            name="md-arrow-back"
            onPress={() => navigation.goBack()}
          />
        </Text>
        <Button>
          <Text h1 bold>
            {shop.name}
          </Text>
        </Button>
      </Block>
      <ScrollView flex={false} showsVerticalScrollIndicator={false}>
        <Block center flex={false}>
          <Text>{shop ? renderStar() : null}</Text>
          <Text h2>{shop.review}</Text>
          <Image
            style={{ width: width, height: 300 }}
            resizeMode="contain"
            resizeMethod="resize"
            source={shop.source}
          />
        </Block>
        <Block style={styles.categories}>
          <Text h3>{shop.name}</Text>
          <Text h4>{shop.engname}</Text>
        </Block>
      </ScrollView>
    </Block>
  );
}

ShopScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 2.5,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 1.5,
    marginBottom: theme.sizes.base * 3.5
  }
});
