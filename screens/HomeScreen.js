import React from "react";
import { Image, Dimensions, ScrollView, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Card, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

function HomeScreen(props) {
  return (
    <Block>
      <Block flex={0.25}>
        <Image
          style={{
            width: width,
            height: 247,
            position: "absolute",
            top: -5,
            left: 0
          }}
          source={require("../assets/images/hello.jpg")}
        ></Image>
        <Text
          bold
          style={{ fontSize: 30, position: "absolute", bottom: 10, left: 10 }}
        >
          <Text white bold style={{ fontSize: 50 }}>
            CEBU
          </Text>
        </Text>
      </Block>
      <Block flex={1} padding={[15, 0, 0, 0]}>
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
