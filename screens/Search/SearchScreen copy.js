import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { Button, Block, Text } from "../../components";
import { theme, mocks } from "../../constants";
import { SearchBar } from "react-native-elements";
import axios from "axios";
const { width } = Dimensions.get("window");

const cateCat = {
  ALL: "전체",
  EAT: "먹거리",
  ACTIVITY: "놀거리",
  AESTHETIC: "힐링"
};

const SearchScreen = props => {
  const { navigation, profiles, categories } = props;
  const [active, setActive] = useState("ALL");
  const [cates, setCates] = useState([]);
  const [search, setSearch] = useState("");

  const tabs = ["ALL", "EAT", "ACTIVITY", "AESTHETIC"];

  useEffect(() => {
    setCates(categories);
  }, []);

  handleSearchTab = tab => {
    let filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );
    setActive(tab);
    setCates(filtered);
  };

  renderSearchTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleSearchTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {cateCat[tab]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          찾기
        </Text>
        <Button onPress={() => navigation.navigate("Settings", { profiles })}>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderSearchTab(tab))}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base }}
      >
        <Block flex={false} row space="between" style={styles.categories}>
          {cates.map(category => (
            <TouchableOpacity
              key={category.name}
              onPress={() =>
                navigation.navigate("Category", {
                  title: "찾기",
                  category: category.id
                })
              }
            >
              <Block center middle shadow style={styles.category}>
                <ImageBackground
                  source={category.src}
                  style={{ width: "100%", height: 100 }}
                >
                  <Block
                    center
                    middle
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <Text h3 white>
                      {category.id}
                    </Text>
                  </Block>
                </ImageBackground>
              </Block>
            </TouchableOpacity>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
};

SearchScreen.navigationOptions = {
  header: null
};
SearchScreen.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories
};
const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 1.5
  },
  tab: {
    marginRight: theme.sizes.base * 1.5,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 1.5,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    paddingVertical: theme.sizes.base / 4,
    minWidth: width - theme.sizes.padding * 1.5 - theme.sizes.base / 3,
    maxWidth: width - theme.sizes.padding * 1.5 - theme.sizes.base / 3,
    maxHeight: width - theme.sizes.padding * 1.5 - theme.sizes.base
  }
});

export default SearchScreen;
