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

import { Card, Badge, Button, Block, Text, Divider } from "../components";
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
            name="md-arrow-back"
            onPress={() => navigation.goBack()}
          />
        </Text>
        <Button>
          <Text h1 bold>
            {shop.name} <Text h4>- {shop.engname}</Text>
          </Text>
        </Button>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block center>
          <Text>{shop ? renderStar() : null}</Text>
          <Text gray h3>
            {shop.review} reviews
          </Text>
          <Image
            style={{ width: width, height: 295 }}
            resizeMode="contain"
            resizeMethod="resize"
            source={shop.source}
          />
        </Block>
        <Block style={styles.categories}>
          <Text bold h3>
            {shop.name} <Text gray> ( {shop.engname} )</Text>
          </Text>
          <Text h4 bold style={styles.content}>
            <Ionicons size={16} name="md-home" />
            {"  "}업체정보
          </Text>
          <Block style={{ flexDirection: "row" }}>
            <Block gray2 flex={1}>
              <Text>영업시간</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>11:00 ~ 24:00</Text>
            </Block>
          </Block>
          <Block margin={[10, 0]} style={{ flexDirection: "row" }}>
            <Block gray2 flex={1}>
              <Text>전화번호</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>010-9141-9090</Text>
            </Block>
          </Block>
          <Block style={{ flexDirection: "row" }}>
            <Block gray2 flex={1}>
              <Text>주소</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>세부 막탄 000-000</Text>
            </Block>
          </Block>
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
          <Button gradient style={{ marginTop: 15 }} onPress={() => {}}>
            {false ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                예약 하기
              </Text>
            )}
          </Button>
          <Button shadow style={styles.shadow}>
            <Text center semibold onPress={() => navigation.navigate("Signup")}>
              카카오톡 문의 하기
            </Text>
            <Image
              style={{ position: "absolute", right: 5, width: 32, height: 32 }}
              source={require("../assets/icons/cacao.png")}
            ></Image>
          </Button>
        </Block>
      </ScrollView>
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
    marginTop: theme.sizes.base * 1.5,
    marginBottom: 8
  }
});
