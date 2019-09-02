import React, { useState, useEffect } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Button, Block, Text, Divider } from "../components";
import { theme } from "../constants";

export default function TripScreen(props) {
  const { navigation } = props;
  const [trip, setTrip] = useState({});
  const [title, setTitle] = useState("");

  const [isPick, setIsPick] = useState(false);

  useEffect(() => {
    setTrip(navigation.getParam("trip"));
    setTitle(navigation.getParam("title"));
    setIsPick(true);
  }, []);

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
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
              color={theme.colors.gray}
              name="ios-arrow-back"
            />
            <Text gray bold h2 style={{ marginLeft: 10 }}>
              {title}
            </Text>
          </Block>
        </Button>
        <Block style={{ marginBottom: 20 }}>
          <Text bold white style={{ fontSize: 30 }}>
            {trip.name}
          </Text>
          <Text white h2>
            {trip.engname}
          </Text>
        </Block>

        <Text h1 bold>
          {trip.location}{" "}
        </Text>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 55 }}
      >
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            예약정보
          </Text>
          <Block row>
            <Block gray2 flex={1}>
              <Text>시간</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>{trip.time}</Text>
            </Block>
          </Block>
          <Block row margin={[5, 0]}>
            <Block gray2 flex={1}>
              <Text>장소</Text>
            </Block>
            <Block gray flex={2.5}>
              <Text>{trip.location}</Text>
            </Block>
          </Block>
          <Divider margin={[theme.sizes.base, 0]} />
          {trip.pickup != undefined ? (
            <React.Fragment>
              <Text h3 bold style={styles.content}>
                픽업정보
              </Text>
              <Block row>
                <Block gray2 flex={1}>
                  <Text>픽업시간</Text>
                </Block>
                <Block gray flex={2.5}>
                  <Text>{trip.pickup.time}</Text>
                </Block>
              </Block>
              <Block row margin={[5, 0]}>
                <Block gray2 flex={1}>
                  <Text>픽업장소</Text>
                </Block>
                <Block gray flex={2.5}>
                  <Text>{trip.pickup.location}</Text>
                </Block>
              </Block>
              <Divider margin={[theme.sizes.base, 0]} />
            </React.Fragment>
          ) : (
            <Block></Block>
          )}
          <Text h3 bold style={styles.content}>
            업체정보
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

          <Text h3 bold style={styles.content}>
            기타정보
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam, pariatur
            reprehenderit enim quia totam, quam repellat repudiandae nam eum
            dolores rerum dolorum rem suscipit nobis cum harum perferendis eos?
            Voluptates est iure dolorem dignissimos!
          </Text>
          <Divider margin={[theme.sizes.base, 0]} />
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
          <Button color={theme.colors.accent} onPress={() => {}}>
            <Text bold white center>
              예약 변경 하기
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

TripScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  categories: {
    paddingTop: theme.sizes.base * 1.5,
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
    marginBottom: 20
  }
});
