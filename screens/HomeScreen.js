import React, { useState, useEffect } from "react";
import {
  Image,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Card, Badge, Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");
const tabs = ["ALL", "first", "second"];
const dayMap = {
  ALL: "전체",
  first: "1일차",
  second: "2일차",
  third: "3일차"
};

function HomeScreen(props) {
  const { profiles } = props;

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h3>
          헬로우,{" "}
          <Text h1 bold color={theme.colors.primary}>
            CEBU
          </Text>
        </Text>
        <Button onPress={() => navigation.navigate("Settings", { profiles })}>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Image
        style={{ width: width, height: 200 }}
        resizeMode="contain"
        resizeMethod="resize"
        source={require("../assets/images/hello.jpg")}
      ></Image>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.categories}
      >
        <Text h4 bold>
          <Ionicons color={theme.colors.primary} size={30} name="md-sunny" />
          {"  "}오늘의 날씨
        </Text>
        <Card shadow style={styles.nal}>
          <Block flex={0.9}>
            <Image
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
              resizeMethod="resize"
              source={require("../assets/images/weather.png")}
            ></Image>
          </Block>
          <Block flex={1}>
            <Text color={theme.colors.primary} style={styles.cc}>
              34<Text h1>℃</Text>
            </Text>
            <Text style={{ textAlign: "center" }}>온도</Text>
          </Block>
          <Block flex={1}>
            <Text color={theme.colors.primary} style={styles.cc}>
              76<Text h1>%</Text>
            </Text>
            <Text style={{ textAlign: "center" }}>습도</Text>
          </Block>
        </Card>
        <Text h4 bold>
          <Ionicons color={theme.colors.primary} size={30} name="md-card" />
          {"  "}
          오늘의 환율
        </Text>
        <Card shadow style={styles.nal}>
          <Block flex={1}>
            <Text color={theme.colors.primary} style={styles.cc}>
              23.12<Text h1> 페소</Text>
            </Text>
            <Text caption style={{ textAlign: "center" }}>
              10,000원 = 432.54페소
            </Text>
          </Block>
        </Card>
        <Text h4 bold>
          <Ionicons color={theme.colors.primary} size={30} name="md-heart" />
          {"  "}
          세부 할인 정보
        </Text>
        <Card shadow style={styles.nal}>
          <Block flex={1}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              magnam. Officia architecto fuga inventore sequi adip
            </Text>
          </Block>
        </Card>
        <Text h4 bold>
          <Ionicons
            color={theme.colors.primary}
            size={30}
            name="md-pricetags"
          />
          {"  "}
          세부 뉴스
        </Text>
        <Card shadow style={styles.nal}>
          <Block flex={1}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              magnam. Officia architecto fuga inventore sequi adip
            </Text>
          </Block>
        </Card>
      </ScrollView>
    </Block>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

HomeScreen.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories,
  plans: mocks.plans
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
  categories: {
    paddingHorizontal: theme.sizes.base * 1.5
  },
  nal: {
    flexDirection: "row",
    marginVertical: 5
  },
  cc: {
    fontSize: 60,
    textAlign: "center"
  }
});

export default HomeScreen;
