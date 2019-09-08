import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

const cateCat = {
  ALL: "전체",
  EAT: "오픈챗",
  ACTIVITY: "예약챗"
};

const ChatListScreen = props => {
  const { navigation, profiles, categories } = props;
  const [active, setActive] = useState("ALL");
  const [cates, setCates] = useState([]);
  const tabs = ["ALL", "EAT", "ACTIVITY", "AESTHETIC"];

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
          {cateCat[tab]}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          채팅
        </Text>
        <Button onPress={() => navigation.navigate("Settings", { profiles })}>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
    </Block>
  );
};

ChatListScreen.navigationOptions = {
  header: null
};
ChatListScreen.defaultProps = {
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

export default ChatListScreen;
