import React, {useState, useEffect, Fragment} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import Block from './Block';
import Text from './Text';
import Button from './Button';

import {theme} from '../constants';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {makeResevation} from '../redux/action';

const TIMES = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

export default ReservationModal = props => {
  const {shop, navigation, setVisible} = props;
  const [todo, setTodo] = useState({});

  const [date, setDate] = useState({});
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [timeCan, setTimeCan] = useState([]);

  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [text, setText] = useState('');
  const [pickuptime, setPickupTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupCar, setPickpCar] = useState('');

  const [isChange, setIsChange] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    let reservation = navigation.getParam('todo');
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
          e => e != 'hotel' && e != 'nDay',
        ),
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
          e => e != 'hotel' && e != 'nDay',
        ),
      );
      setSelectedDate(Object.keys(days)[0]);
      setIsChange(false);
    }
  }, [user]);

  handleMakeResercation = () => {
    let reservation = {};
    reservation['createdDate'] = new Date();
    reservation['email'] = user.email;
    reservation['name'] = user.name;
    reservation['phone'] = user.phone;
    reservation['sex'] = user.sex;
    reservation['time'] = time;
    reservation['people'] = people;
    reservation['date'] = selectedDate;
    reservation['text'] = text;
    reservation['pickupLocation'] = pickupLocation;
    reservation['pickTime'] = pickuptime;
    reservation['shop'] = {
      id: shop.id,
      name: shop.name,
      engName: shop.engName,
      src: shop.source[0],
    };

    let allPlans = user.plans;
    let allReservations = shop.reservations;
    console.log(shop);
    allPlans[selectedDate][time] = reservation;
    allReservations.push(reservation);

    dispatch(makeResevation(allPlans, allReservations, user.email, shop.id));
    setVisible(false);
  };

  handleChangeReservation = () => {
    let reservation = {};
    reservation['createdDate'] = new Date();
    reservation['email'] = user.email;
    reservation['name'] = user.name;
    reservation['phone'] = user.phone;
    reservation['sex'] = user.sex;
    reservation['time'] = time;
    reservation['people'] = people;
    reservation['date'] = selectedDate;
    reservation['text'] = text;
    reservation['pickupLocation'] = pickupLocation;
    reservation['pickTime'] = pickuptime;
    reservation['shop'] = {
      id: shop.id,
      name: shop.name,
      engName: shop.engName,
      src: shop.source[0],
    };

    let allPlans = user.plans;
    let allReservations = shop.reservations;

    delete allPlans[todo.date][todo.time];
    allReservations = allReservations.filter(e => e.email != user.email);

    allPlans[selectedDate][time] = reservation;
    allReservations.push(reservation);

    dispatch(makeResevation(allPlans, allReservations, user.email, shop.id));
    navigation.goBack();
  };

  handleDeleteReservation = () => {
    let allPlans = user.plans;
    let allReservations = shop.reservations;

    delete allPlans[todo.date][todo.time];
    allReservations = allReservations.filter(e => e.email != user.email);

    dispatch(makeResevation(allPlans, allReservations, user.email, shop.id));
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
    <Block
      padding={[
        Platform.OS === 'ios' ? theme.sizes.padding * 2 : theme.sizes.padding,
        theme.sizes.padding,
      ]}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Ionicons size={50} color={theme.colors.black} name="ios-close" />
      </TouchableOpacity>
      <Text h1 bold style={{marginBottom: 20}}>
        {isChange ? '예약 변경' : '예약 신청'}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block>
          <Text style={{...styles.textStyle, marginTop: 20}}>예약일</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Block row>
              {Object.keys(date).map(t => (
                <Button
                  key={t}
                  style={t == selectedDate ? styles.onDate : styles.date}
                  onPress={() => {
                    setTimeCan(
                      Object.keys(user.plans[t]).filter(
                        e => e != 'hotel' && e != 'nDay',
                      ),
                    );
                    setSelectedDate(t);
                  }}>
                  <Block middle center>
                    <Text
                      caption
                      style={{
                        color: selectedDateColor(t),
                        marginBottom: 2,
                      }}>
                      {date[t]}
                    </Text>
                    <Text
                      style={{
                        color: selectedDateColor(t),
                        fontSize: 12,
                      }}>
                      {t}
                    </Text>
                  </Block>
                </Button>
              ))}
            </Block>
          </ScrollView>
          <Text style={{...styles.textStyle, marginTop: 20}}>예약시간</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Block row>
              {TIMES.map(t => (
                <Button
                  key={t}
                  style={[styles.timeStyle, seletedTimeStyle(t)]}
                  onPress={() => setTime(t)}>
                  <Block center middle>
                    <Text
                      caption
                      style={{
                        color: seletedTimeColor(t),
                      }}>
                      {reservationDate == selectedDate && reservationTime == t
                        ? '현예약'
                        : timeCan.indexOf(t) != -1
                        ? `예약중`
                        : t}
                    </Text>
                    {reservationDate == selectedDate &&
                    reservationTime == t ? null : timeCan.indexOf(t) != -1 ? (
                      <Text
                        style={{
                          color: seletedTimeColor(t),
                          fontSize: 12,
                        }}>
                        {user.plans[selectedDate][t]['shop']['name']}
                      </Text>
                    ) : null}
                  </Block>
                </Button>
              ))}
            </Block>
          </ScrollView>

          <Text style={{...styles.textStyle, marginTop: 20, marginBottom: 15}}>
            예약인원
          </Text>
          <Block
            style={{
              backgroundColor: theme.colors.black,
              borderRadius: 5,
              marginBottom: 15,
              height: 45,
            }}
            row
            middle
            center>
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: 20,
              }}
              onPress={() => {
                setPeople(people == 1 ? people : people - 1);
              }}>
              <Text h1 bold white>
                -
              </Text>
            </TouchableOpacity>
            <Text white h3>
              {people + '명'}
            </Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 20,
              }}
              onPress={() => setPeople(people + 1)}>
              <Text h1 bold white>
                +
              </Text>
            </TouchableOpacity>
          </Block>
          {shop.pickup ? (
            <Fragment>
              <Block style={styles.inputRow}>
                <Text style={styles.textStyle}>픽업 시간</Text>
                <TextInput
                  defaultValue={pickuptime}
                  placeholder="10시 30분"
                  onChangeText={e => setPickupTime(e)}
                  style={{fontSize: 20}}
                />
              </Block>
              <Block style={styles.inputRow}>
                <Text style={styles.textStyle}>픽업 장소</Text>
                <TextInput
                  defaultValue={pickupLocation}
                  placeholder="호텔 정문"
                  onChangeText={e => setPickupLocation(e)}
                  style={{fontSize: 20}}
                />
              </Block>
              <Block style={styles.inputRow}>
                <Text style={styles.textStyle}>픽업 차량</Text>
                <TextInput
                  defaultValue={pickupCar}
                  placeholder="예약 확정 시 "
                  onChangeText={e => setPickpCar(e)}
                  style={{fontSize: 20}}
                />
              </Block>
            </Fragment>
          ) : null}

          <Block style={styles.inputRow}>
            <Text style={styles.textStyle}>추가 요청 사항</Text>
            <TextInput
              defaultValue={text}
              placeholder=""
              onChangeText={e => setText(e)}
              style={{fontSize: 20}}
            />
          </Block>
        </Block>

        <Block row space="between" style={{marginVertical: 20}}>
          <Block flex={2}>
            <Text style={{marginBottom: 5}}>예약일</Text>
            <Text h2 bold primary>
              {selectedDate}
            </Text>
          </Block>
          <Block center flex={2}>
            <Text style={{marginBottom: 5}}>예약시간</Text>
            <Text h2 bold primary>
              {time}
            </Text>
          </Block>
          <Block flex={1}>
            <Text right style={{marginBottom: 5}}>
              예약인원
            </Text>
            <Text right h2 bold primary>
              {people + '명'}
            </Text>
          </Block>
        </Block>
        {isChange ? (
          <Block>
            <Button
              gradient
              onPress={() => {
                handleChangeReservation();
              }}>
              <Text bold white center>
                예약 변경 요청
              </Text>
            </Button>
            <Button
              shadow
              onPress={() => {
                handleDeleteReservation();
              }}>
              <Text center bold primary>
                취소 요청
              </Text>
            </Button>
          </Block>
        ) : (
          <Button
            gradient
            onPress={() => {
              handleMakeResercation();
            }}>
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
    borderWidth: 1,
  },
  time: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.black,
  },
  onTime: {
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white,
  },
  noTime: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.white,
  },
  reserTime: {
    backgroundColor: theme.colors.accent,
    borderColor: theme.colors.white,
  },
  date: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.black,
  },
  onDate: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputRow: {
    marginVertical: 15,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray,
  },
});
