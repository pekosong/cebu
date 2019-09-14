import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Badge, Button, Block, Text } from "../../components";
import { theme } from "../../constants";
import firebase from "../../constants/store";

const { width } = Dimensions.get("window");

const cateMap = {
  Restaurant: "식당",
  Message: "마사지",
  Cafe: "카페",
  Bar: "술집",
  Nail: "네일",
  SeaSports: "수상스포츠",
  Activity: "액티비티",
  Shopping: "쇼핑"
};

const filerMap = {
  추천: "review",
  리뷰수: "reviewCnt",
  거리: "hello"
};

const CategoryScreen = props => {
  const { navigation } = props;
  const [title, setTitle] = useState("");
  const [active, setActive] = useState("추천");
  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const tabs = ["추천", "리뷰수", "거리"];

  useEffect(() => {
    setTitle(navigation.getParam("title"));
    let docRef = firebase
      .firestore()
      .collection("shops")
      .where("category", "==", navigation.getParam("category"));

    docRef
      .get()
      .then(querySnapshot => {
        let myList = [];
        querySnapshot.forEach(doc => {
          myList.push(doc.data());
        });
        myList = myList.sort(function(a, b) {
          return b["review"] - a["review"];
        });
        setSelectedLists(myList);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
    return () => {
      setSelectedLists([]);
      setIsLoaded(false);
      setSelectedLists("");
    };
  }, []);

  handleCatTab = tab => {
    let sortedLists = selectedLists.sort(function(a, b) {
      return b[filerMap[tab]] - a[filerMap[tab]];
    });
    setActive(tab);
    setSelectedLists(sortedLists);
  };

  renderCatTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleCatTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  renderStar = cnt => {
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

  renderShopList = () => {
    return selectedLists.map(list => (
      <TouchableOpacity
        key={list.name}
        onPress={() =>
          navigation.navigate("Shop", {
            title: cateMap[navigation.getParam("category")],
            shop: list
          })
        }
      >
        <Block middle shadow style={styles.category}>
          <Block flex={1}>
            <Image
              style={{ width: "100%", height: 70 }}
              source={{ uri: list.source }}
            />
          </Block>
          <Block middle flex={2.8} style={{ paddingLeft: 10 }}>
            <Text h4 bold height={25}>
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
        </Block>
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
              color={theme.colors.primary}
              name="ios-arrow-back"
            />
            <Text primary bold h2 style={{ marginLeft: 10 }}>
              {title}
            </Text>
          </Block>
        </Button>
        <Button>
          <Text h1 bold>
            {cateMap[navigation.getParam("category")]}
          </Text>
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderCatTab(tab))}
      </Block>
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex={false} row space="between" style={styles.categories}>
            {renderShopList()}
          </Block>
        </ScrollView>
      ) : (
        <Block style={styles.full}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
          ></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
};

CategoryScreen.navigationOptions = {
  header: null
};
CategoryScreen.defaultProps = {};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.padding
  },
  tab: {
    marginRight: theme.sizes.padding,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    marginHorizontal: theme.sizes.padding,
    marginBottom: theme.sizes.base * 1
  },
  category: {
    flexDirection: "row",
    paddingVertical: theme.sizes.base / 2,
    width: width - theme.sizes.base * 3
  }
});

export default CategoryScreen;
