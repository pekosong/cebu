import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

const ChatListScreen = props => {
  const { navigation, profiles, categories } = props;
  const [active, setActive] = useState("ALL");

  useEffect(() => {}, []);

  renderList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Chat", {
            title: item.key,
            engName: item.key
          })
        }
      >
        <Block
          row
          style={{
            marginVertical: 10,
            paddingBottom: 5,
            borderBottomWidth: 0.3,
            borderBottomColor: theme.colors.gray
          }}
        >
          <Block left flex={1}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          </Block>
          <Block flex={3.5} style={{ marginTop: 15, height: 40 }}>
            <Block middle row space="between">
              <Text h4 bold>
                {item.key}
              </Text>
              <Text caption>{item.lastDate}</Text>
            </Block>
            <Block bottom>
              <Text>{item.msg}</Text>
            </Block>
          </Block>
        </Block>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: theme.sizes.base * 1.5 }}
      >
        <FlatList
          data={[
            {
              key: "Sophia",
              msg: "Lorem ipsum dolor, sit amet con...",
              lastDate: "2019-10-01",
              avatar: "https://i.pravatar.cc/300"
            },
            {
              key: "Isabella",
              msg: "Lorem ipsum dolor, sit amet con...",
              lastDate: "2019-10-01",
              avatar: "https://i.pravatar.cc/300"
            },
            {
              key: "Emma",
              msg: "Lorem ipsum dolor, sit amet con...",
              lastDate: "2019-10-01",
              avatar: "https://i.pravatar.cc/300"
            },
            {
              key: "Madison",
              msg: "Lorem ipsum dolor, sit amet con...",
              lastDate: "2019-10-01",
              avatar: "https://i.pravatar.cc/300"
            },
            {
              key: "Mason",
              msg: "Lorem ipsum dolor, sit amet con...",
              lastDate: "2019-10-01",
              avatar: "https://i.pravatar.cc/300"
            },
            {
              key: "Matthew",
              msg: "Lorem ipsum dolor, sit amet con...",
              lastDate: "2019-10-01",
              avatar: "https://i.pravatar.cc/300"
            }
          ]}
          renderItem={item => renderList(item)}
        />
      </ScrollView>
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
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  avatar: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2
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
