import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import Modal from "react-native-modal";
import MapView from "react-native-maps";

import { Ionicons } from "@expo/vector-icons";

import { Input, Badge, Block, Text } from "../components";
import Button from "apsl-react-native-button";

import DateTimePicker from "react-native-modal-datetime-picker";
import { theme } from "../constants";

const { height, width } = Dimensions.get("window");

export default function TripScreen(props) {
  const { navigation } = props;
  const [shop, setShop] = useState({});
  const [trip, setTrip] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [text, setText] = useState("");
  const [showReservation, setShowReservation] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  useEffect(() => {
    let trip = navigation.getParam("trip");
    let shop = navigation.getParam("shop");

    setTrip(trip);
    setShop(shop);
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
        onBackdropPress={() => setShowReservation(false)}
        style={{
          backgroundColor: "white",
          marginTop: height - 420,
          borderRadius: 10
        }}
      >
        <Block padding={[theme.sizes.base]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block space="between" row style={{ marginBottom: 20 }}>
              <Block flex={false}>
                <Text bold h2>
                  예약 신청
                </Text>
              </Block>
              <Button
                style={{
                  position: "absolute",
                  right: 0,
                  top: -10,
                  borderWidth: 0,
                  borderRadius: 10
                }}
                onPress={() => setShowReservation(false)}
              >
                <Ionicons
                  name={title}
                  size={30}
                  color={theme.colors.primary}
                  name="ios-arrow-down"
                />
              </Button>
            </Block>

            <Block>
              <Button
                style={{
                  backgroundColor: theme.colors.primary,
                  borderWidth: 0,
                  borderRadius: 10
                }}
                textStyle={{ color: theme.colors.white, fontSize: 16 }}
                onPress={() => setIsDatePickerVisible(true)}
              >
                {date
                  ? `${date.getMonth()}월 ${date.getDate()}일`
                  : "예약일 선택"}
              </Button>
              <Button
                style={{
                  backgroundColor: theme.colors.primary,
                  borderWidth: 0,
                  borderRadius: 10
                }}
                textStyle={{ color: theme.colors.white, fontSize: 16 }}
                onPress={() => setIsTimePickerVisible(true)}
              >
                {time
                  ? `${time.getHours()}시 ${time.getMinutes()}분`
                  : "예약시간 선택"}
              </Button>
              <Block
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 10,
                  marginBottom: 15,
                  height: 45
                }}
                row
              >
                <Button
                  style={{
                    borderWidth: 0,
                    flex: 0.3
                  }}
                  textStyle={{ color: theme.colors.white, fontSize: 30 }}
                  onPress={() => setPeople(people - 1)}
                >
                  -
                </Button>
                <Button
                  style={{
                    borderWidth: 0,
                    flex: 1
                  }}
                  textStyle={{ color: theme.colors.white, fontSize: 16 }}
                >
                  {people + "명"}
                </Button>
                <Button
                  style={{
                    borderWidth: 0,
                    flex: 0.3
                  }}
                  textStyle={{ color: theme.colors.white, fontSize: 30 }}
                  onPress={() => setPeople(people + 1)}
                >
                  +
                </Button>
              </Block>
              <DateTimePicker
                confirmTextIOS="선택"
                cancelTextIOS="취소"
                titleIOS="예약일 선택"
                isVisible={isDatePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={() => setIsDatePickerVisible(false)}
              />

              <DateTimePicker
                confirmTextIOS="선택"
                cancelTextIOS="취소"
                mode="time"
                isVisible={isTimePickerVisible}
                onConfirm={handleTimePicked}
                onCancel={() => setIsTimePickerVisible(false)}
              />

              <Text h4>추가 요청 사항</Text>
              <Input
                style={styles.input}
                defaultValue={text}
                onChangeText={e => {
                  setText(e);
                }}
              />
            </Block>
            <Button
              style={{
                borderColor: "#16a085",
                borderWidth: 0,
                backgroundColor: theme.colors.secondary
              }}
              textStyle={{
                color: theme.colors.white
              }}
              onPress={() => setShowReservation(false)}
            >
              예약하기
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
          style={{ width: width, height: 250 }}
        >
          <Block row space="between" style={styles.header}>
            <Block>
              <Button
                h1
                bold
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  borderWidth: 0,
                  width: 100
                }}
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
            </Block>

            <Block row right>
              <Block flex={false}>
                <Button
                  style={{
                    width: 35,
                    borderWidth: 0,
                    marginRight: 10
                  }}
                  onPress={() => setShowReservation(true)}
                >
                  <Block center>
                    <Badge size={35} color={"rgba(255, 255, 255, 0.5)"}>
                      <Ionicons
                        size={25}
                        color={theme.colors.primary}
                        name="md-time"
                      />
                    </Badge>
                  </Block>
                </Button>
              </Block>
              <Block flex={false}>
                <Button
                  style={{
                    borderWidth: 0,
                    marginRight: 10,
                    width: 35
                  }}
                  onPress={() => setShowReservation(true)}
                >
                  <Block center>
                    <Badge size={35} color={"rgba(255, 255, 255, 0.5)"}>
                      <Ionicons
                        size={25}
                        color={theme.colors.primary}
                        name="md-star-outline"
                      />
                    </Badge>
                  </Block>
                </Button>
              </Block>
              <Block flex={false}>
                <Button
                  style={{
                    borderWidth: 0,
                    marginRight: 0,
                    width: 35
                  }}
                  onPress={() =>
                    navigation.navigate("Chat", {
                      title: shop.name,
                      engName: shop.engName
                    })
                  }
                >
                  <Block center>
                    <Badge size={35} color={"rgba(255, 255, 255, 0.5)"}>
                      <Ionicons
                        size={25}
                        color={theme.colors.primary}
                        name="ios-chatbubbles"
                      />
                    </Badge>
                  </Block>
                </Button>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 260, marginBottom: 10 }}
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

        <Block style={[styles.categories, { marginTop: 20 }]}>
          <Text bold style={{ fontSize: 25 }}>
            {shop.name}
          </Text>
          <Text h3 gray style={styles.content}>
            {shop.engName}
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam
          </Text>
        </Block>

        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            예약정보
          </Text>
          <Block style={{ marginLeft: 10 }}>
            <Block row>
              <Block flex={1}>
                <Text>예약시간</Text>
              </Block>
              <Block flex={1}>
                <Text gray>{trip.time}</Text>
              </Block>
            </Block>
            <Block row margin={[5, 0]}>
              <Block flex={1}>
                <Text>예약인원</Text>
              </Block>
              <Block flex={1}>
                <Text gray>{trip.people}명</Text>
              </Block>
            </Block>
          </Block>
        </Block>

        {trip.pickup ? (
          <Block style={styles.categories}>
            <Text h3 bold style={styles.content}>
              픽업정보
            </Text>
            <Block style={{ marginLeft: 10 }}>
              <Block row>
                <Block flex={1}>
                  <Text>픽업시간</Text>
                </Block>
                <Block flex={1}>
                  <Text gray>{trip.pickup.time}</Text>
                </Block>
              </Block>
              <Block row margin={[5, 0]}>
                <Block flex={1}>
                  <Text>픽업시간</Text>
                </Block>
                <Block flex={1}>
                  <Text gray>{trip.pickup.location}</Text>
                </Block>
              </Block>
            </Block>
          </Block>
        ) : null}

        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            업체정보
          </Text>
          <Block style={{ marginLeft: 10 }}>
            <Block row>
              <Block flex={1}>
                <Text>영업시간</Text>
              </Block>
              <Block flex={1}>
                <Text gray>
                  {shop.openTime} ~ {shop.closeTime}
                </Text>
              </Block>
            </Block>
            <Block row margin={[5, 0]}>
              <Block flex={1}>
                <Text>전화번호</Text>
              </Block>
              <Block flex={1}>
                <Text gray>{shop.phone}</Text>
              </Block>
            </Block>
            <Block row>
              <Block flex={1}>
                <Text>주소</Text>
              </Block>
              <Block flex={1}>
                <Text gray>{shop.address}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block style={styles.categories}>
          <Text h3 bold>
            위치
          </Text>
        </Block>
        <MapView
          style={{ flex: 1, height: 200 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          />
        </MapView>
      </ScrollView>

      {handleReservation()}
    </Block>
  );
}

TripScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.sizes.base * 3.5,
    paddingHorizontal: theme.sizes.base * 1.5,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  categories: {
    paddingHorizontal: theme.sizes.base * 1.5,
    marginVertical: 15
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
    marginBottom: 15
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
