import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";

import Divider from "./Divider";
import Block from "./Block";
import Text from "./Text";
import Input from "./Input";

import { theme } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { makeResevation } from "../redux/action";
import Button from "apsl-react-native-button";

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

export default ReservationModal = props => {
  const { shop, navigation, setVisible } = props;
  const [todo, setTodo] = useState({});

  const [date, setDate] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [timeCan, setTimeCan] = useState([]);
  const [people, setPeople] = useState(1);
  const [text, setText] = useState("");

  const [isChange, setIsChange] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    let reservation = navigation.getParam("todo");
    let myPlans = user.plans;

    if (reservation) {
      let days = {};
      Object.keys(myPlans).forEach((key, idx) => {
        days[key] = `Day ${idx + 1}`;
      });
      setDate(days);
      setTodo(reservation);
      setSelectedDate(reservation.date);
      setReservationDate(reservation.date);
      setTime(reservation.time);
      setReservationTime(reservation.time);
      setPeople(reservation.people);
      setTimeCan(
        Object.keys(user.plans[reservation.date]).filter(
          e => e != "hotel" && e != "nDay"
        )
      );
      setIsChange(true);
    } else {
      let days = {};
      Object.keys(myPlans).forEach((key, idx) => {
        days[key] = `Day ${idx + 1}`;
      });
      setDate(days);
      setTimeCan(
        Object.keys(user.plans[Object.keys(days)[0]]).filter(
          e => e != "hotel" && e != "nDay"
        )
      );
      setSelectedDate(Object.keys(days)[0]);
      setIsChange(false);
    }
  }, [user]);

  handleReservation = () => {
    let reservation = {};
    reservation["time"] = time;
    reservation["people"] = people;
    reservation["date"] = selectedDate;
    reservation["shop"] = shop;

    let allPlans = user.plans;
    allPlans[selectedDate][time] = reservation;

    dispatch(makeResevation(allPlans));
    setVisible(false);
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
    setVisible(false);
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
    navigation.goBack();
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

  return (
    <Block padding={[theme.sizes.padding * 1.5, theme.sizes.padding]}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Ionicons size={50} color={theme.colors.black} name="ios-close" />
      </TouchableOpacity>
      <Text h1 bold style={{ marginBottom: 20 }}>
        {isChange ? "예약 변경" : "예약 신청"}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block>
          <Text bold h3 style={{ marginVertical: 10 }}>
            예약일
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                      {reservationDate == selectedDate && reservationTime == t
                        ? "현예약"
                        : timeCan.indexOf(t) != -1
                        ? `예약중`
                        : t}
                    </Text>
                    {reservationDate == selectedDate &&
                    reservationTime == t ? null : timeCan.indexOf(t) != -1 ? (
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
        {isChange ? (
          <Block>
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
              취소 요청
            </Button>
          </Block>
        ) : (
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
            예약 요청
          </Button>
        )}
      </ScrollView>
    </Block>
  );
};

export const styles = StyleSheet.create({
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
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
