import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal
} from "react-native";

import MapView from "react-native-maps";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";

import { Input, Block, Text, Divider } from "../../components";
import { theme } from "../../constants";
import Button from "apsl-react-native-button";

import firebase from "../../constants/store";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateFavorite } from "../../redux/action";

const { height, width } = Dimensions.get("window");

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
  const { navigation } = props;
  const [starCount, setStarCount] = useState(0);
  const [shop, setShop] = useState({});
  const [trip, setTrip] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [text, setText] = useState("");
  const [imageNum, setImageNum] = useState(1);
  const [showReservation, setShowReservation] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    let myPlans = user.plans;
    let days = {};

    Object.keys(myPlans).forEach((key, idx) => {
      days[`Day ${idx + 1}`] = key;
    });

    setDate(days);
    setTrip(navigation.getParam("todo"));
    setShop(navigation.getParam("shop"));
    setTitle(navigation.getParam("title"));
  }, [user]);

  handleScroll = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };

  handleReservation = async () => {
    let reservation = {
      time: time,
      people: people,
      date: date[selectedDate],
      shop: shop
    };

    let allPlans = user.plans;
    let newPlans = user.plans[date[selectedDate]];
    newPlans[time] = reservation;
    allPlans[date[selectedDate]] = newPlans;

    // await firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(user.email)
    //   .update({ plans: allPlans })
    //   .then(() => {
    //     console.log("done");
    //   });

    setShowReservation(false);
  };

  handleAddHeart = shop => {
    let newfavorites = user.myfavorites;
    if (newfavorites.includes(shop)) {
      const idx = newfavorites.indexOf(shop);
      newfavorites.splice(idx, 1);
    } else {
      newfavorites.push(shop);
    }
    dispatch(updateFavorite(newfavorites));
  };

  renderReview = () => {
    return (
      <Modal
        animationType="slide"
        visible={showReview}
        onRequestClose={() => setShowReview(false)}
      >
        <Block padding={[theme.sizes.padding * 1.5, theme.sizes.padding]}>
          <TouchableOpacity onPress={() => setShowReview(false)}>
            <Ionicons size={50} color={theme.colors.black} name="ios-close" />
          </TouchableOpacity>
          <Text h1 bold style={{ marginBottom: 50 }}>
            리뷰 작성
          </Text>

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
        </Block>
      </Modal>
    );
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
          <Text h1 bold style={{ marginBottom: 50 }}>
            예약 신청
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
                      onPress={() => setSelectedDate(t)}
                    >
                      <Block center>
                        <Text
                          bold
                          h4
                          style={{
                            color:
                              t == selectedDate
                                ? theme.colors.white
                                : theme.colors.black,
                            fontSize: 14,
                            marginBottom: 5
                          }}
                        >
                          {t}
                        </Text>
                        <Text
                          style={{
                            color:
                              t == selectedDate
                                ? theme.colors.white
                                : theme.colors.black,
                            fontSize: 14
                          }}
                        >
                          {date[t]}
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
                      style={t == time ? styles.onTime : styles.time}
                      textStyle={{
                        color:
                          t == time ? theme.colors.white : theme.colors.black,
                        fontSize: 14
                      }}
                      onPress={() => setTime(t)}
                    >
                      {t}
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
                  {date[selectedDate]}
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
                handleReservation();
              }}
            >
              예약 변경
            </Button>
          </ScrollView>
        </Block>
      </Modal>
    );
  };

  return (
    <Block>
      <Block style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 100,
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
        </TouchableOpacity>
      </Block>

      <Block
        center
        middle
        style={{
          position: "absolute",
          top: 220,
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

      <TouchableOpacity
        onPress={() => setShowReview(true)}
        style={{
          position: "absolute",
          top: 58,
          right: 113
        }}
      >
        <AntDesign
          size={30}
          color={theme.colors.secondary}
          name={"form"}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Chat", {
            title: shop.name,
            engName: shop.engName
          })
        }
        style={{
          position: "absolute",
          top: 58,
          right: 65
        }}
      >
        <AntDesign
          size={30}
          color={theme.colors.secondary}
          name="message1"
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleAddHeart(shop.id)}
        style={{
          position: "absolute",
          top: 55,
          right: 20
        }}
      >
        <Ionicons
          size={35}
          color={theme.colors.secondary}
          name={
            user.myfavorites.indexOf(shop.id) == -1
              ? "ios-heart-empty"
              : "ios-heart"
          }
          style={styles.icon}
        />
      </TouchableOpacity>

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 220, paddingTop: 10, marginBottom: 65 }}
      >
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
          <Text h3 bold style={styles.content}>
            주요 메뉴 및 가격
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam, pariatur
            reprehenderit enim quia totam,
          </Text>
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
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            기타정보
          </Text>
          <Text gray>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam, pariatur
            reprehenderit enim quia
          </Text>
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
      {renderReview()}
    </Block>
  );
}

ShopScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.sizes.base * 2,
    paddingHorizontal: theme.sizes.padding
  },
  categories: {
    paddingHorizontal: theme.sizes.padding,
    marginVertical: 15
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
    width: 60,
    height: 40,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.black
  },
  onTime: {
    width: 60,
    height: 40,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: theme.colors.black,
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
  }
});
