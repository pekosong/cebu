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
import { TouchableOpacity } from "react-native-gesture-handler";
import { Calendar, LocaleConfig } from "react-native-calendars";

import StarRating from "react-native-star-rating";

import { theme } from "../constants";

const { height, width } = Dimensions.get("window");
LocaleConfig.locales["kor"] = {
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"]
};
LocaleConfig.defaultLocale = "kor";
const TIMES = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00"
];

export default function TripScreen(props) {
  const { navigation } = props;
  const [shop, setShop] = useState({});
  const [trip, setTrip] = useState({});
  const [starCount, setStarCount] = useState(0);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState({});
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [text, setText] = useState("");
  const [imageNum, setImageNum] = useState(1);
  const [showReservation, setShowReservation] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    let trip = navigation.getParam("trip");
    let shop = navigation.getParam("shop");

    setTrip(trip);
    setShop(shop);
    setTitle(navigation.getParam("title"));
  }, []);

  handleScroll = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };

  renderStar = cnt => {
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

  handleReview = () => {
    return (
      <Modal
        animationType="slide"
        isVisible={showReview}
        backdropOpacity={0.2}
        onBackdropPress={() => setShowReview(false)}
        style={{
          backgroundColor: "white",
          marginTop: height - 270,
          borderRadius: 10
        }}
      >
        <Block padding={[theme.sizes.base]}>
          <Block style={{ marginVertical: 10, marginHorizontal: 50 }}>
            <StarRating
              disabled={false}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              fullStarColor={theme.colors.primary}
              rating={starCount}
              selectedStar={rating => setStarCount(rating)}
            ></StarRating>
          </Block>
          <Text bold h3>
            리뷰
          </Text>
          <Input
            style={styles.input}
            defaultValue={text}
            onChangeText={e => {
              setText(e);
            }}
          />
          <Button
            style={{
              borderColor: "#16a085",
              borderWidth: 0,
              backgroundColor: theme.colors.secondary
            }}
            textStyle={{
              color: theme.colors.white
            }}
            onPress={() => setShowReview(false)}
          >
            작성완료
          </Button>
        </Block>
      </Modal>
    );
  };

  handleReservation = () => {
    return (
      <Modal
        animationType="slide"
        isVisible={showReservation}
        backdropOpacity={0.2}
        onBackdropPress={() => setShowReservation(false)}
        style={{
          backgroundColor: "white",
          marginTop: height - 600,
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
              <Text bold h3 style={{ marginVertical: 10 }}>
                예약일
              </Text>
              <Calendar
                onDayPress={day => {
                  newDate = new Object();
                  newDate[day.dateString] = {
                    selected: true,
                    selectedColor: theme.colors.primary
                  };
                  setDate(newDate);
                }}
                monthFormat={"yyyy MM"}
                onMonthChange={month => {
                  console.log("month changed", month);
                }}
                hideExtraDays={true}
                disableMonthChange={true}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                markedDates={date}
                theme={{
                  arrowColor: theme.colors.primary,
                  todayTextColor: theme.colors.primary,
                  mondayTextColor: theme.colors.primary
                }}
              />
              <Text bold h3 style={{ marginTop: 15, marginBottom: 10 }}>
                예약시간
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Block row>
                  {TIMES.map(t => (
                    <Button
                      key={t}
                      style={t == time ? styles.onTime : styles.time}
                      textStyle={{
                        color:
                          t == time ? theme.colors.white : theme.colors.primary,
                        fontSize: 14
                      }}
                      onPress={() => setTime(t)}
                    >
                      {t}
                    </Button>
                  ))}
                </Block>
              </ScrollView>
              <Text bold h3 style={{ marginTop: 15, marginBottom: 10 }}>
                예약인원
              </Text>
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
                  onPress={() => {
                    setPeople(people == 1 ? people : people - 1);
                  }}
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

              <Text bold h3 style={{ marginVertical: 10 }}>
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
      <Block style={styles.header}>
        <Button
          h1
          bold
          onPress={() => {
            navigation.goBack();
          }}
          style={{
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
            <Text bold h2 style={{ color: theme.colors.white, marginLeft: 10 }}>
              {title}
            </Text>
          </Block>
        </Button>
      </Block>
      <Block
        center
        middle
        style={{
          position: "absolute",
          top: 50,
          right: 10,
          backgroundColor: "rgba(255, 0, 0, 0.3)",
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 8
        }}
      >
        <Text white bold size={11}>
          {imageNum + " / 3"}
        </Text>
      </Block>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScroll}
        style={{ position: "absolute", top: 0, zIndex: -1 }}
      >
        {[1, 2, 3].map(e => (
          <ImageBackground
            key={e}
            source={shop.source}
            style={{
              width: width,
              height: 250,
              resizeMode: "stretch"
            }}
          >
            <Block
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.24)"
              }}
            ></Block>
          </ImageBackground>
        ))}
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 200, paddingTop: 10, marginBottom: 10 }}
      >
        <Block
          center
          row
          style={{
            paddingHorizontal: 50 - theme.sizes.base * 3,
            marginHorizontal: theme.sizes.base * 3,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.gray2,
            paddingBottom: 5,
            marginBottom: 10,
            alignContent: "space-between"
          }}
        >
          <Block center middle style={{ height: 60 }}>
            <TouchableOpacity onPress={() => setShowReservation(true)}>
              <Ionicons
                size={26}
                color={theme.colors.primary}
                name="ios-time"
                style={{ textAlign: "center" }}
              />
              <Text gray>예약변경</Text>
            </TouchableOpacity>
          </Block>
          <Block center middle style={{ height: 60 }}>
            <TouchableOpacity onPress={() => setShowReview(true)}>
              <Ionicons
                size={26}
                color={theme.colors.primary}
                name="ios-star"
                style={{ textAlign: "center" }}
              />
              <Text gray>리뷰쓰기</Text>
            </TouchableOpacity>
          </Block>
          <Block center middle style={{ height: 60 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", {
                  title: shop.name,
                  engName: shop.engName
                })
              }
            >
              <Ionicons
                size={26}
                color={theme.colors.primary}
                name="ios-chatbubbles"
                style={{ textAlign: "center" }}
              />
              <Text gray>문의하기</Text>
            </TouchableOpacity>
          </Block>
        </Block>
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
      {handleReview()}
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
  },
  time: {
    backgroundColor: theme.colors.white,
    width: 60,
    height: 40,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary
  },
  onTime: {
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 40,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    borderColor: theme.colors.white
  }
});
