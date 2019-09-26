import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Animated
} from "react-native";

import MapView from "react-native-maps";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import Button from "apsl-react-native-button";

import { Input, Block, Text, Divider } from "../../components";
import { theme, mocks } from "../../constants";

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateFavorite, makeResevation } from "../../redux/action";

const { height, width } = Dimensions.get("window");

const items = [
  {
    name: "전신마사지",
    desc: "전신을 마사지",
    src: "http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666"
  },
  {
    name: "전신마사지",
    desc: "전신을 마사지",
    src: "http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666"
  },
  {
    name: "전신마사지",
    desc: "전신을 마사지",
    src: "http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666"
  },
  {
    name: "전신마사지",
    desc: "전신을 마사지",
    src: "http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666"
  }
];

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

export default function ShopScreen(props) {
  const { navigation, recommendList } = props;
  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [timeCan, setTimeCan] = useState([]);

  const [people, setPeople] = useState(1);
  const [text, setText] = useState("");
  const [imageNum, setImageNum] = useState(1);
  const [showReservation, setShowReservation] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);
  const shops = useSelector(state => state.shops, shallowEqual);

  const dispatch = useDispatch();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    let reservation = navigation.getParam("todo");
    let myPlans = user.plans;
    let days = {};

    Object.keys(myPlans).forEach((key, idx) => {
      days[key] = `Day ${idx + 1}`;
    });

    let shopCode = navigation.getParam("shopCode");
    if (shopCode) {
      let myShop = shops.filter(e => e.id == shopCode);
      setShop(myShop[0]);
    } else {
      setShop(navigation.getParam("shop"));
    }
    setTodo(reservation);
    setSelectedDate(reservation.date);
    setReservationDate(reservation.date);
    setTime(reservation.time);
    setReservationTime(reservation.time);
    setPeople(reservation.people);
    setDate(days);
    setTitle(navigation.getParam("title"));
    setTimeCan(
      Object.keys(user.plans[reservation.date]).filter(
        e => e != "hotel" && e != "nDay"
      )
    );
  }, [user]);

  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };

  handleScrollByY = e => {
    if (e.nativeEvent.contentOffset.y > 120) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 120) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 50
      }).start();
    }
  };

  handleChangeReservation = () => {
    let reservation = {};
    reservation["time"] = time;
    reservation["people"] = people;
    reservation["date"] = selectedDate;
    reservation["shop"] = shop;

    let allPlans = user.plans;

    delete allPlans[todo.date][todo.time];

    allPlans[selectedDate][time] = reservation;

    dispatch(makeResevation(allPlans));
    setShowReservation(false);
  };

  handleDeleteReservation = () => {
    let reservation = {};
    reservation["time"] = time;
    reservation["people"] = people;
    reservation["date"] = selectedDate;
    reservation["shop"] = shop;

    let allPlans = user.plans;

    delete allPlans[todo.date][todo.time];

    dispatch(makeResevation(allPlans));
    setShowReservation(false);
  };

  handleAddHeart = async shop => {
    let newfavorites = user.myfavorites;
    if (newfavorites.includes(shop)) {
      const idx = newfavorites.indexOf(shop);
      newfavorites.splice(idx, 1);
    } else {
      newfavorites.push(shop);
    }
    dispatch(updateFavorite(newfavorites));
  };

  selectedDateColor = t => {
    return t == selectedDate ? theme.colors.white : theme.colors.black;
  };

  seletedTimeStyle = t => {
    return reservationDate == selectedDate && reservationTime == t
      ? styles.reserTime
      : timeCan.indexOf(t) != -1
      ? styles.noTime
      : t == time
      ? styles.onTime
      : styles.time;
  };

  seletedTimeColor = t => {
    return reservationDate == selectedDate && t == reservationTime
      ? theme.colors.white
      : timeCan.indexOf(t) != -1
      ? theme.colors.white
      : t == time
      ? theme.colors.white
      : theme.colors.black;
  };

  renderReservation = () => {
    return (
      <Modal
        animationType="slide"
        visible={showReservation}
        onRequestClose={() => setShowReservation(false)}
      >
        <Block padding={[theme.sizes.padding * 1.5, theme.sizes.padding]}>
          <TouchableOpacity onPress={() => setShowReservation(false)}>
            <Ionicons size={50} color={theme.colors.black} name="ios-close" />
          </TouchableOpacity>
          <Text h1 bold style={{ marginBottom: 20 }}>
            예약 변경
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block>
              <Text bold h3 style={{ marginVertical: 10 }}>
                예약일
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Block row>
                  {Object.keys(date).map(t => (
                    <Button
                      key={t}
                      style={t == selectedDate ? styles.onDate : styles.date}
                      onPress={() => {
                        setTimeCan(
                          Object.keys(user.plans[t]).filter(
                            e => e != "hotel" && e != "nDay"
                          )
                        );
                        setSelectedDate(t);
                      }}
                    >
                      <Block center>
                        <Text
                          bold
                          h4
                          style={{
                            color: selectedDateColor(t),
                            fontSize: 14,
                            marginBottom: 5
                          }}
                        >
                          {date[t]}
                        </Text>
                        <Text
                          style={{
                            color: selectedDateColor(t),
                            fontSize: 14
                          }}
                        >
                          {t}
                        </Text>
                      </Block>
                    </Button>
                  ))}
                </Block>
              </ScrollView>
              <Divider></Divider>
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
                      style={[styles.timeStyle, seletedTimeStyle(t)]}
                      onPress={() => setTime(t)}
                    >
                      <Block center>
                        <Text
                          h4
                          bold
                          style={{
                            color: seletedTimeColor(t),
                            fontSize: 16
                          }}
                        >
                          {reservationDate == selectedDate &&
                          reservationTime == t
                            ? "현예약"
                            : timeCan.indexOf(t) != -1
                            ? `예약중`
                            : t}
                        </Text>
                        {reservationDate == selectedDate &&
                        reservationTime == t ? null : timeCan.indexOf(t) !=
                          -1 ? (
                          <Text
                            style={{
                              color: seletedTimeColor(t),
                              fontSize: 14
                            }}
                          >
                            {user.plans[selectedDate][t]["shop"]["name"]}
                          </Text>
                        ) : null}
                      </Block>
                    </Button>
                  ))}
                </Block>
              </ScrollView>
              <Divider></Divider>

              <Text bold h3 style={{ marginTop: 15, marginBottom: 10 }}>
                예약인원
              </Text>
              <Block
                style={{
                  backgroundColor: theme.colors.black,
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
              <Divider></Divider>

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

            <Block row space="between" style={{ marginVertical: 20 }}>
              <Block flex={2}>
                <Text style={{ marginBottom: 5 }}>예약일</Text>
                <Text h2 bold color={theme.colors.primary}>
                  {selectedDate}
                </Text>
              </Block>
              <Block center flex={2}>
                <Text style={{ marginBottom: 5 }}>예약시간</Text>
                <Text h2 bold color={theme.colors.primary}>
                  {time}
                </Text>
              </Block>
              <Block flex={1}>
                <Text right style={{ marginBottom: 5 }}>
                  예약인원
                </Text>
                <Text right h2 bold color={theme.colors.primary}>
                  {people + "명"}
                </Text>
              </Block>
            </Block>
            <Divider></Divider>

            <Button
              style={{
                borderWidth: 0,
                backgroundColor: theme.colors.primary
              }}
              textStyle={{
                color: theme.colors.white
              }}
              onPress={() => {
                handleChangeReservation();
              }}
            >
              예약 변경 요청
            </Button>
            <Button
              style={{
                borderWidth: 0,
                backgroundColor: theme.colors.white
              }}
              textStyle={{
                color: theme.colors.primary
              }}
              onPress={() => {
                handleDeleteReservation();
              }}
            >
              예약 취소 요청
            </Button>
          </ScrollView>
        </Block>
      </Modal>
    );
  };

  return (
    <Block>
      <Animated.View
        style={{
          ...styles.header,
          backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
          }),
          borderWidth: fadeAnim,
          borderColor: theme.colors.gray2
        }}
      >
        <Block middle center row space="between">
          <Block>
            <TouchableOpacity
              onPressIn={() => {
                navigation.goBack();
              }}
              style={{
                height: 100,
                width: 100
              }}
            >
              <Block center row>
                <Animated.Text
                  style={{
                    color: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
                    })
                  }}
                >
                  <Ionicons name={title} size={35} name="ios-arrow-back" />
                </Animated.Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Animated.Text
            style={{
              color: theme.colors.black,
              fontWeight: "bold",
              fontSize: 18,
              opacity: fadeAnim,
              marginRight: 30
            }}
          >
            {shop.name}
          </Animated.Text>
          <Block middle row right style={{ paddingRight: 2 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", {
                  title: shop.name,
                  engName: shop.engName
                })
              }
              style={{ marginHorizontal: 12, marginTop: 2 }}
            >
              <Animated.Text
                style={{
                  color: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
                  })
                }}
              >
                <AntDesign size={28} name="message1" style={styles.icon} />
              </Animated.Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleAddHeart(shop.id)}>
              <Animated.Text
                style={{
                  color: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
                  })
                }}
              >
                <Ionicons
                  size={32}
                  name={
                    user.myfavorites.indexOf(shop.id) == -1
                      ? "ios-heart-empty"
                      : "ios-heart"
                  }
                  style={styles.icon}
                />
              </Animated.Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Animated.View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 65, zIndex: -1 }}
        scrollEventThrottle={360}
        onScroll={handleScrollByY}
      >
        <Block>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={360}
            pagingEnabled
            onScroll={handleScrollByX}
          >
            {[1, 2, 3].map(e => (
              <ImageBackground
                key={e}
                source={{ uri: shop.source }}
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
          <Block
            center
            middle
            style={{
              position: "absolute",
              bottom: 10,
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
        </Block>

        <Block style={[styles.categories, { marginTop: 20 }]}>
          <Block row space="between">
            <Block>
              <Text bold style={{ fontSize: 25, marginBottom: 5 }}>
                {shop.name}
              </Text>
              <Text h3 gray style={styles.content}>
                {shop.engName}
              </Text>
            </Block>
            <Text bold style={{ color: theme.colors.accent }}>
              {shop.tags}
            </Text>
          </Block>
        </Block>
        <Divider
          style={{
            marginHorizontal: theme.sizes.padding
          }}
        ></Divider>
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            예약정보
          </Text>
          <Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>예약인원</Text>
              <Text h3>{todo.people}명</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>예약시간</Text>
              <Text h3>{todo.time}</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>예약정보</Text>
              <Text h3>
                {shop.category == "Massage" ? "전신마사지" : "스테이크"}
              </Text>
            </Block>
          </Block>
        </Block>
        <Divider
          style={{
            marginHorizontal: theme.sizes.padding
          }}
        ></Divider>
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            픽업정보
          </Text>
          <Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>픽업장소</Text>
              <Text h3>호텔 정문</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>픽업시간</Text>
              <Text h3>{todo.time}</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>픽업차량</Text>
              <Text h3>도요타 캠리 - 가가가</Text>
            </Block>
          </Block>
        </Block>
        <Divider
          style={{
            marginHorizontal: theme.sizes.padding
          }}
        ></Divider>
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            업체정보
          </Text>
          <Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>언어</Text>
              <Text h3>한국어, 영어</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>픽업여부</Text>
              <Text h3>가능</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>베이비시터</Text>
              <Text h3>가능</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>영업시간</Text>
              <Text h3>
                {shop.openTime} ~ {shop.closeTime}
              </Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>주소</Text>
              <Text h3>{shop.address}</Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h3>전화번호</Text>
              <Text h3>{shop.phone}</Text>
            </Block>
          </Block>
        </Block>

        <Divider
          style={{
            marginHorizontal: theme.sizes.padding
          }}
        ></Divider>
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            주요 메뉴 및 가격
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {items.map((item, idx) => (
              <CardMenu key={idx} item={item}>
                <Text
                  gray
                  caption
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid"
                  }}
                >
                  20,000원
                </Text>
                <Text h4 bold style={{ marginTop: 5 }}>
                  30,000원
                </Text>
              </CardMenu>
            ))}
          </ScrollView>
        </Block>
        <Divider
          style={{
            marginHorizontal: theme.sizes.padding
          }}
        ></Divider>
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
        <Divider
          style={{
            marginHorizontal: theme.sizes.padding,
            marginTop: 20
          }}
        ></Divider>
        <Block style={{ ...styles.categories, marginTop: 10 }}>
          <Text h3 bold style={styles.content}>
            이 근처의 추천 장소
          </Text>
          <Text h4 style={{ marginBottom: 10 }}>
            {shop.name} 근처의 이런 곳은 어때요?
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {recommendList.map((item, idx) => (
              <Card key={idx} item={item} navigation={navigation}>
                <Text
                  gray
                  caption
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid"
                  }}
                >
                  {item.beforePrice}원
                </Text>
                <Text h4 bold style={{ marginTop: 5 }}>
                  {item.afterPrice}원
                </Text>
              </Card>
            ))}
          </ScrollView>
        </Block>
      </ScrollView>

      <Block
        row
        style={{
          position: "absolute",
          borderTopWidth: 1,
          borderTopColor: theme.colors.gray2,
          bottom: 0,
          paddingTop: 10
        }}
      >
        <Block
          flex={2}
          left
          style={{ marginLeft: theme.sizes.padding, marginTop: 5 }}
        >
          <StarRating
            disabled={false}
            maxStars={5}
            rating={shop.review}
            starSize={15}
            fullStarColor={theme.colors.accent}
            containerStyle={{ width: 20 }}
          />
          <Text style={{ marginTop: 5 }}>
            {shop.reviewCnt
              ? shop.reviewCnt
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
              : null}
            Reviews
          </Text>
        </Block>
        <Block flex={1} style={{ marginRight: theme.sizes.padding }}>
          <Button
            style={{
              borderColor: "#16a085",
              borderWidth: 0,
              backgroundColor: theme.colors.primary
            }}
            textStyle={{
              color: theme.colors.white
            }}
            onPress={() => setShowReservation(true)}
          >
            예약 변경
          </Button>
        </Block>
      </Block>
      {renderReservation()}
    </Block>
  );
}

ShopScreen.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories,
  recommendList: mocks.recommendList,
  eventList: mocks.eventList
};

ShopScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    top: theme.sizes.padding * 1.7,
    height: 50,
    width: width,
    paddingHorizontal: theme.sizes.padding,
    position: "absolute",
    zIndex: 100
  },
  categories: {
    paddingHorizontal: theme.sizes.padding,
    marginVertical: 10
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
  timeStyle: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1
  },
  time: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.black
  },
  onTime: {
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white
  },
  noTime: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.white
  },
  reserTime: {
    backgroundColor: theme.colors.accent,
    borderColor: theme.colors.white
  },
  date: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.black
  },
  onDate: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white
  },
  icon: {
    textShadowColor: theme.colors.black,
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 1
  },
  inputRow: {
    paddingBottom: 5,
    marginVertical: 5
  }
});
