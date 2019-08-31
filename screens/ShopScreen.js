import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  ImageBackground
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Badge, Button, Block, Text, Divider } from "../components";
import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default function ShopScreen(props) {
  const { navigation } = props;
  const [shop, setShop] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    setShop(navigation.getParam("shop"));
    setTitle(navigation.getParam("title"));
  }, []);

  const renderStar = () => {
    return [...Array(5).keys()].map(e => (
      <Ionicons key={e} size={30} color={theme.colors.accent} name="md-star" />
    ));
  };
  return (
    <Block>
      <Block>
        <ImageBackground
          source={shop.source}
          style={{ width: width, height: 190 }}
        >
          <Block style={styles.header}>
            <Block space="between">
              <Button
                h1
                bold
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
              >
                <Block center row>
                  <Ionicons
                    name={title}
                    size={35}
                    color={theme.colors.white}
                    name="ios-arrow-back"
                  />
                  <Text white bold h2 style={{ marginLeft: 10 }}>
                    {title}
                  </Text>
                </Block>
              </Button>
              <Block style={{ marginBottom: 20 }}>
                <Text bold white style={{ fontSize: 30 }}>
                  {shop.name}
                </Text>
                <Text white h2>
                  {shop.engname}
                </Text>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 200, marginBottom: 55 }}
      >
        <Block center>
          <Text>{shop ? renderStar() : null}</Text>
          <Text gray h3>
            {shop.review} reviews
          </Text>
          {shop.pickup ? (
            <Block
              center
              middle
              row
              style={{
                position: "absolute",
                top: 10,
                right: 10
              }}
            >
              <Badge size={40} color={theme.colors.accent}>
                <Image
                  style={{
                    height: 30,
                    width: 30
                  }}
                  source={require("../assets/icons/car.png")}
                ></Image>
              </Badge>
              <Text h4 bold>
                {" "}
                픽업
              </Text>
            </Block>
          ) : (
            <Block></Block>
          )}
        </Block>
        <Block style={styles.categories}>
          <Divider margin={[theme.sizes.base, 0]} />
          <Text h4 bold style={styles.content}>
            <Ionicons size={16} name="md-home" />
            {"  "}업체정보
          </Text>
          <Block row>
            <Block gray2 flex={1}>
              <Text>영업시간</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>
                {shop.openTime} ~ {shop.closeTime}
              </Text>
            </Block>
          </Block>
          <Block row margin={[5, 0]}>
            <Block gray2 flex={1}>
              <Text>전화번호</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>{shop.phone}</Text>
            </Block>
          </Block>
          <Block row>
            <Block gray2 flex={1}>
              <Text>주소</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>{shop.address}</Text>
            </Block>
          </Block>
          <Divider margin={[theme.sizes.base, 0]} />
          <Text h4 bold style={styles.content}>
            <Ionicons size={16} name="md-book" />
            {"  "}주요 메뉴 및 가격
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam, pariatur
            reprehenderit enim quia totam, quam repellat repudiandae nam eum
            dolores rerum dolorum rem suscipit nobis cum harum perferendis eos?
            Voluptates est iure dolorem dignissimos!
          </Text>
          <Divider margin={[theme.sizes.base, 0]} />
          <Text h4 bold style={styles.content}>
            <Ionicons size={16} name="md-pie" />
            {"  "}기타정보
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam, pariatur
            reprehenderit enim quia totam, quam repellat repudiandae nam eum
            dolores rerum dolorum rem suscipit nobis cum harum perferendis eos?
            Voluptates est iure dolorem dignissimos!
          </Text>
        </Block>
      </ScrollView>
      <Block
        row
        style={{
          position: "absolute",
          bottom: 0,
          paddingHorizontal: theme.sizes.base * 1.5
        }}
      >
        <Block flex={1} style={{ marginRight: 10 }}>
          <Button color={theme.colors.primary} onPress={() => {}}>
            <Text bold white center>
              예약 하기
            </Text>
          </Button>
        </Block>
        <Block flex={1}>
          <Button shadow style={styles.shadow}>
            <Text center semibold onPress={() => navigation.navigate("Signup")}>
              카카오톡 문의{"    "}
            </Text>
            <Image
              style={{ position: "absolute", right: 5, width: 25, height: 25 }}
              source={require("../assets/icons/cacao.png")}
            ></Image>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

ShopScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  categories: {
    paddingHorizontal: theme.sizes.base * 1.5
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "#fff",
    position: "relative"
  },
  content: {
    marginBottom: 10
  }
});
