import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Badge, Button, Block, Text, Divider } from "../components";
import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default function ShopScreen(props) {
  const { navigation } = props;
  const [shop, setShop] = useState({});

  useEffect(() => {
    setShop(navigation.getParam("shop"));
  }, []);

  const renderStar = () => {
    return [...Array(5).keys()].map(e => (
      <Ionicons key={e} size={30} color={theme.colors.accent} name="md-star" />
    ));
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
            {shop.name} <Text h4>- {shop.engname}</Text>
          </Text>
        </Button>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 55 }}
      >
        <Block center>
          <Text>{shop ? renderStar() : null}</Text>
          <Text gray h3>
            {shop.review} reviews
          </Text>
          <Image
            style={{ width: width, height: 315 }}
            resizeMode="contain"
            resizeMethod="resize"
            source={shop.source}
          />
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
          <Text bold h3>
            {shop.name} <Text gray> ( {shop.engname} )</Text>
          </Text>
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
              <Text>11:00 ~ 24:00</Text>
            </Block>
          </Block>
          <Block row margin={[5, 0]}>
            <Block gray2 flex={1}>
              <Text>전화번호</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>010-9141-9090</Text>
            </Block>
          </Block>
          <Block row>
            <Block gray2 flex={1}>
              <Text>주소</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>세부 막탄 000-000</Text>
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
        <Block flex={1} style={{ marginRight: 5 }}>
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
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
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
