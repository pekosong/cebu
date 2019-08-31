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
  마사지: "massage",
  카페: "cafe",
  술집: "bar",
  네일: "nail",
  수상스포츠: "seaSports",
  스포츠: "sports",
  쇼핑: "shopping"
};

const filerMap = {
  추천: "review",
  리뷰수: "reviewCnt",
  거리: "hello"
};

const CategoryScreen = props => {
  const { navigation, lists } = props;
  const [title, setTitle] = useState("");
  const [active, setActive] = useState("추천");
  const [selectedLists, setSelectedLists] = useState([]);
  const tabs = ["추천", "리뷰수", "거리"];

  useEffect(() => {
    let myList = lists[cateMap[navigation.getParam("category")]];
    myList = myList.sort(function(a, b) {
      return b[filerMap["추천"]] - a[filerMap["추천"]];
    });
    setSelectedLists(myList);
    setTitle(navigation.getParam("title"));
  }, []);

  const handleTab = tab => {
    let sortedLists = selectedLists.sort(function(a, b) {
      // 내림차순
      return b[filerMap[tab]] - a[filerMap[tab]];
      // 44, 25, 21, 13
    });

    setActive(tab);
    setSelectedLists(sortedLists);
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

  const renderStar = cnt => {
    let string = String(cnt);
    let fullStar = parseInt(string.split(".")[0]);
    let halfStar = parseInt(string.split(".")[1]);
    let restStar = parseInt(String(5 - cnt));
    return (
      <Text>
        {Array.from(Array(fullStar).keys()).map(key => (
          <Ionicons
            key={key}
            size={18}
            color={theme.colors.accent}
            name="md-star"
          />
        ))}
        {halfStar == 5 ? (
          <Ionicons size={18} color={theme.colors.accent} name="md-star-half" />
        ) : null}
        {Array.from(Array(restStar).keys()).map(key => (
          <Ionicons
            key={key}
            size={18}
            color={theme.colors.accent}
            name="md-star-outline"
          />
        ))}
      </Text>
    );
  };

  const renderShopList = () => {
    return selectedLists.map(list => (
      <TouchableOpacity
        key={list.name}
        onPress={() =>
          navigation.navigate("Shop", {
            title: navigation.getParam("category"),
            shop: list
          })
        }
      >
        <Card middle shadow style={styles.category}>
          <Block flex={1.3}>
            <Image
              style={{ width: "100%", height: 70, borderRadius: 5 }}
              source={list.source}
            />
          </Block>
          <Block flex={2.8} style={{ paddingLeft: 10 }}>
            <Text h4 bold medium height={25}>
              {list.name}
            </Text>
            <Text caption h4>
              {list.tags.join(", ")}
            </Text>
            <Text h4>
              {renderStar(list.review)}
              {"  " + list.review}
              <Text caption> - 리뷰 {list.reviewCnt}</Text>
            </Text>
          </Block>
          <Block middle center flex={0.4} style={{ position: "relative" }}>
            <Text>1.5</Text>
            <Text>km</Text>
            {list.pickup ? (
              <Badge
                size={18}
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5
                }}
                color={theme.colors.primary}
              >
                <Ionicons color={theme.colors.white} size={12} name="md-car" />
              </Badge>
            ) : null}
          </Block>
        </Card>
      </TouchableOpacity>
    ));
  };
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Block center row>
            <Ionicons
              name={title}
              size={35}
              color={theme.colors.gray}
              name="ios-arrow-back"
            />
            <Text gray bold h2 style={{ marginLeft: 10 }}>
              {title}
            </Text>
          </Block>
        </Button>
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
          {renderShopList()}
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
