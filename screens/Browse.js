import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { categories } from "../constants/mocks";

const { width } = Dimensions.get("window");

const Browse = props => {
  const { navigation, profiles, categories } = props;
  const [active, setActive] = useState("Products");
  const [cates, setCates] = useState([]);
  const tabs = ["Products", "Inspirations", "Shop"];

  useEffect(() => {
    setCates(categories);
  }, []);
  const handleTab = tab => {
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );
    setActive(tab);
    setCates(filtered);
  };
  const renderTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Browse
        </Text>
        <Button onPress={() => navigation.navigate("Settings", { profiles })}>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base }}
      >
        <Block flex={false} row space="between" style={styles.categories}>
          {cates.map(category => (
            <TouchableOpacity
              key={category.name}
              onPress={() => navigation.navigate("Explore", { category })}
            >
              <Card center middle shadow style={styles.category}>
                <Badge
                  margin={[0, 0, 15]}
                  size={50}
                  color={theme.colors.primary}
                >
                  <Image source={category.image} />
                </Badge>
                <Text medium height={20}>
                  {category.name}
                </Text>
                <Text gray caption>
                  {category.count} products
                </Text>
              </Card>
            </TouchableOpacity>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
};

Browse.navigationOptions = {};
Browse.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  }
});

export default Browse;
