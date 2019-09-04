import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Picker,
  TextInput
} from "react-native";
import Modal from "react-native-modal";

import { Ionicons } from "@expo/vector-icons";

import { Input, Badge, Button, Block, Text, Divider } from "../components";
import DateTimePicker from "react-native-modal-datetime-picker";
import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default function ShopScreen(props) {
  const { navigation } = props;
  const [shop, setShop] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [text, setText] = useState("");
  const [showReservation, setShowReservation] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  useEffect(() => {
    setShop(navigation.getParam("shop"));
    setTitle(navigation.getParam("title"));
  }, []);

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
            size={30}
            color={theme.colors.accent}
            name="md-star"
          />
        ))}
        {halfStar == 5 ? (
          <Ionicons size={30} color={theme.colors.accent} name="md-star-half" />
        ) : null}
        {Array.from(Array(restStar).keys()).map(key => (
          <Ionicons
            key={key}
            size={30}
            color={theme.colors.accent}
            name="md-star-outline"
          />
        ))}
      </Text>
    );
  };

  const handleDatePicked = d => {
    setDate(d);
    setIsDatePickerVisible(false);
  };

  const handleTimePicked = t => {
    setTime(t);
    setIsTimePickerVisible(false);
  };

  const handleReservation = () => {
    return (
      <Modal
        animationType="slide"
        isVisible={showReservation}
        backdropOpacity={0.2}
        onRequestClose={() => setShowReservation(false)}
        style={{ backgroundColor: "white", marginTop: 300, borderRadius: 10 }}
      >
        <Block
          flex={1}
          padding={[theme.sizes.base, theme.sizes.base]}
          space="between"
        >
          <Text bold h2>
            예약 신청
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={{ marginTop: theme.sizes.base }}>
              <Button
                style={{ marginVertical: 0 }}
                color={theme.colors.accent}
                onPress={() => setIsDatePickerVisible(true)}
              >
                <Text white center>
                  예약일
                </Text>
              </Button>
              <DateTimePicker
                confirmTextIOS="선택"
                cancelTextIOS="취소"
                titleIOS="예약일 선택"
                isVisible={isDatePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={() => setIsDatePickerVisible(false)}
              />
              <Text bold h2 center>
                {date ? `${date.getMonth()}월 ${date.getDate()}일` : null}
              </Text>

              <Button
                style={{ marginVertical: 0 }}
                color={theme.colors.accent}
                onPress={() => setIsTimePickerVisible(true)}
              >
                <Text center white>
                  예약시간
                </Text>
              </Button>
              <DateTimePicker
                mode="time"
                isVisible={isTimePickerVisible}
                onConfirm={handleTimePicked}
                onCancel={() => setIsTimePickerVisible(false)}
              />

              <Text bold h2 center>
                {time ? `${time.getHours()}시 ${time.getMinutes()}분` : null}
              </Text>
              <Text caption gray>
                방문인원
              </Text>
              <Input
                style={styles.input}
                defaultValue={people}
                onChangeText={e => {
                  setPeople(e);
                }}
              />
              <Text caption gray>
                추가 요청 사항
              </Text>
              <Input
                style={styles.input}
                defaultValue={text}
                onChangeText={e => {
                  setText(e);
                }}
              />
            </Block>
            <Button gradient onPress={() => setShowReservation(false)}>
              <Text center white>
                예약하기
              </Text>
            </Button>
            <Button
              color={theme.colors.accent}
              onPress={() => setShowReservation(false)}
            >
              <Text center white>
                취소
              </Text>
            </Button>
          </ScrollView>
        </Block>
      </Modal>
    );
  };

  return (
    <Block>
      <Block>
        <ImageBackground
          source={shop.source}
          style={{ width: width, height: 205 }}
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
              <Block bottom style={{ marginBottom: 10 }}>
                <Text bold white style={{ fontSize: 30 }}>
                  {shop.name}
                </Text>
                <Text white h2>
                  {shop.engName}
                </Text>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 215, marginBottom: 55 }}
      >
        <Block center>
          <Text>{shop.review ? renderStar(shop.review) : null}</Text>
          <Text gray h3>
            {shop.reviewCnt} Reviews
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
          <Text h3 bold style={styles.content}>
            업체정보
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
          <Text h3 bold style={styles.content}>
            주요 메뉴 및 가격
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam, pariatur
            reprehenderit enim quia totam, quam repellat repudiandae nam eum
            dolores rerum dolorum rem suscipit nobis cum harum perferendis eos?
            Voluptates est iure dolorem dignissimos!
          </Text>
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
          <Button
            color={theme.colors.primary}
            onPress={() => setShowReservation(true)}
          >
            <Text bold white center>
              예약 신청
            </Text>
          </Button>
        </Block>
        <Block flex={1}>
          <Button shadow style={styles.shadow}>
            <Text center semibold>
              카카오톡 문의{"    "}
            </Text>
            <Image
              style={{ position: "absolute", right: 5, width: 25, height: 25 }}
              source={require("../assets/icons/cacao.png")}
            ></Image>
          </Button>
        </Block>
      </Block>
      {handleReservation()}
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
    marginBottom: 20
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
