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
            left: 0
          }}
          source={require("../assets/images/hello.jpg")}
        ></Image>
        <Text
          white
          bold
          style={{ fontSize: 50, position: "absolute", bottom: 10, left: 10 }}
        >
          CEBU!
        </Text>
      </Block>
      <Block
        flex={1}
        padding={10}
        margin={[0, 10]}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 10
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card shadow>
            <Block style={styles.nal}>
              <Block flex={1}>
                <Text h2 bold>
                  세부 날씨
                </Text>
              </Block>
              <Block row right center>
                <Text color={theme.colors.gray} right h4 bold>
                  더 보기{" "}
                </Text>
                <Ionicons
                  color={theme.colors.gray}
                  size={20}
                  name="ios-arrow-forward"
                />
              </Block>
            </Block>
            <Block style={styles.nal}>
              <Block center flex={0.9}>
                <Image
                  style={{ width: 60, height: 60 }}
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
            </Block>
          </Card>

          <Card shadow>
            <Block style={styles.nal}>
              <Block flex={1}>
                <Text h2 bold>
                  오늘의 환율
                </Text>
              </Block>
              <Block row right center>
                <Text color={theme.colors.gray} right h4 bold>
                  더 보기{" "}
                </Text>
                <Ionicons
                  color={theme.colors.gray}
                  size={20}
                  name="ios-arrow-forward"
                />
              </Block>
            </Block>
            <Block flex={1}>
              <Text color={theme.colors.primary} style={styles.cc}>
                23.12<Text h1> 페소</Text>
              </Text>
              <Text
                color={theme.colors.gray}
                caption
                style={{ textAlign: "center" }}
              >
                10,000원 = 432.54페소
              </Text>
            </Block>
          </Card>

          <Card shadow>
            <Block style={styles.nal}>
              <Block flex={1}>
                <Text h2 bold>
                  세부 할인 정보
                </Text>
              </Block>
              <Block row right center>
                <Text color={theme.colors.gray} right h4 bold>
                  더 보기{" "}
                </Text>
                <Ionicons
                  color={theme.colors.gray}
                  size={20}
                  name="ios-arrow-forward"
                />
              </Block>
            </Block>
            <Block flex={1}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                magnam. Officia architecto fuga inventore sequi adip
              </Text>
            </Block>
          </Card>

          <Card shadow>
            <Block style={styles.nal}>
              <Block flex={1}>
                <Text h2 bold>
                  세부 뉴스
                </Text>
              </Block>
              <Block row right center>
                <Text color={theme.colors.gray} right h4 bold>
                  더 보기{" "}
                </Text>
                <Ionicons
                  color={theme.colors.gray}
                  size={20}
                  name="ios-arrow-forward"
                />
              </Block>
            </Block>
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
  nal: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between"
  },
  cc: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HomeScreen;
