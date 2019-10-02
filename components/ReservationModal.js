import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";

import Divider from "./Divider";
import Block from "./Block";
import Text from "./Text";
import Input from "./Input";
import Button from "./Button";

import { theme } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { makeResevation } from "../redux/action";

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
      setText(reservation.text);
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
    reservation["text"] = text;

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
    reservation["text"] = text;

    let allPlans = user.plans;

    delete allPlans[todo.date][todo.time];

    allPlans[selectedDate][time] = reservation;

    dispatch(makeResevation(allPlans));
    navigation.goBack();
  };

  handleDeleteReservation = () => {
    let reservation = {};
    reservation["time"] = time;
    reservation["people"] = people;
    reservation["date"] = selectedDate;
    reservation["shop"] = shop;
    reservation["text"] = text;

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
    <Block padding={[theme.sizes.padding]}>
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
                  <Block middle center>
                    <Text
                      caption
                      style={{
                        color: selectedDateColor(t),
                        marginBottom: 2
                      }}
                    >
                      {date[t]}
                    </Text>
                    <Text
                      style={{
                        color: selectedDateColor(t),
                        fontSize: 12
                      }}
                    >
                      {t}
                    </Text>
                  </Block>
                </Button>
              ))}
            </Block>
          </ScrollView>
          <Text bold h3 style={{ marginTop: 10, marginBottom: 5 }}>
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
                  <Block center middle>
                    <Text
                      caption
                      style={{
                        color: seletedTimeColor(t)
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
                          fontSize: 12
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

          <Text bold h3 style={{ marginTop: 10, marginBottom: 5 }}>
            예약인원
          </Text>
          <Block
            style={{
              backgroundColor: theme.colors.black,
              borderRadius: 5,
              marginBottom: 15,
              height: 45
            }}
            row
            middle
            center
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                left: 20
              }}
              onPress={() => {
                setPeople(people == 1 ? people : people - 1);
              }}
            >
              <Text h1 bold white>
                -
              </Text>
            </TouchableOpacity>
            <Text white h3>
              {people + "명"}
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 20
              }}
              onPress={() => setPeople(people + 1)}
            >
              <Text h1 bold white>
                +
              </Text>
            </TouchableOpacity>
          </Block>

          <Text bold h3 style={{ marginVertical: 5 }}>
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
            <Text h2 bold primary>
              {selectedDate}
            </Text>
          </Block>
          <Block center flex={2}>
            <Text style={{ marginBottom: 5 }}>예약시간</Text>
            <Text h2 bold primary>
              {time}
            </Text>
          </Block>
          <Block flex={1}>
            <Text right style={{ marginBottom: 5 }}>
              예약인원
            </Text>
            <Text right h2 bold primary>
              {people + "명"}
            </Text>
          </Block>
        </Block>
        {isChange ? (
          <Block>
            <Button
              gradient
              onPress={() => {
                handleChangeReservation();
              }}
            >
              <Text bold white center>
                예약 변경 요청
              </Text>
            </Button>
            <Button
              shadow
              onPress={() => {
                handleDeleteReservation();
              }}
            >
              <Text center bold primary>
                취소 요청
              </Text>
            </Button>
          </Block>
        ) : (
          <Button
            gradient
            onPress={() => {
              handleReservation();
            }}
          >
            <Text bold white center>
              예약 요청
            </Text>
          </Button>
        )}
      </ScrollView>
    </Block>
  );
};

export const styles = StyleSheet.create({
  timeStyle: {
    width: 100,
    height: 45,
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
