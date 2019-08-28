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

const cateMap = {
  식당: "restaurant",
  마사지: "massage"
};

const CategoryScreen = props => {
  const { navigation, lists } = props;
  const [active, setActive] = useState("추천");
  const [selectedLists, setSelectedLists] = useState([]);
  const tabs = ["추천", "리뷰수", "거리"];

  useEffect(() => {
    setSelectedLists(lists[cateMap[navigation.getParam("category")]]);
  }, []);
  const handleTab = tab => {
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );
    setActive(tab);
    setSelectedLists(filtered);
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
          <Ionicons
            color={theme.colors.gray}
            size={35}
            name="ios-arrow-back"
            onPress={() => navigation.goBack()}
          />
        </Text>
        <Button>
          <Text h1 bold>
            {navigation.getParam("category")}
          </Text>
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex={false} row space="between" style={styles.categories}>
          {selectedLists.map(list => (
            <TouchableOpacity
              key={list.name}
              onPress={() => navigation.navigate("Shop", { shop: list })}
            >
              <Card middle shadow style={styles.category}>
                <Block middle flex={1}>
                  <Badge margin={[0, 10]} size={50}>
                    <Image
                      style={{ width: 70, height: 70 }}
                      source={list.source}
                    />
                  </Badge>
                </Block>
                <Block middle margin={[0, 0, 0, 5]} flex={2.8}>
                  <Text h4 bold medium height={25}>
                    {list.name} <Text caption>{list.engname}</Text>
                  </Text>
                  <Text h4 medium height={25}>
                    <Ionicons
                      size={16}
                      color={theme.colors.accent}
                      name="md-star"
                    />
                    {list.review}
                    <Text caption> - 리뷰 {list.reviewcnt}</Text>
                  </Text>
                  <Text h4 medium height={20}>
                    {list.tags.map(tag => (
                      <Text key={tag} caption>
                        {" " + tag}
                      </Text>
                    ))}
                  </Text>
                </Block>
                <Block
                  middle
                  center
                  flex={0.4}
                  style={{ position: "relative" }}
                >
                  <Text>1.5</Text>
                  <Text>km</Text>
                  {list.pickup ? (
                    <Badge
                      margin={[0, 0, 15]}
                      size={50}
                      style={{
                        position: "absolute",
                        height: 30,
                        width: 30,
                        bottom: -28,
                        right: -12
                      }}
                      color={theme.colors.accent}
                    >
                      <Image
                        style={{
                          height: 22,
                          width: 22
                        }}
                        source={require("../assets/icons/car.png")}
                      ></Image>
                    </Badge>
                  ) : (
                    <Block></Block>
                  )}
                </Block>
              </Card>
            </TouchableOpacity>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
};

CategoryScreen.navigationOptions = {
  header: null
};
CategoryScreen.defaultProps = {
  lists: mocks.lists
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
    marginHorizontal: theme.sizes.base * 1.5,
    marginBottom: theme.sizes.base * 1
  },
  category: {
    flexDirection: "row",
    padding: theme.sizes.base / 2,
    width: width - theme.sizes.base * 3
  }
});

export default CategoryScreen;
