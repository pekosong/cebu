import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from 'react';
import {Platform, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import Block from './Block';
import Text from './Text';
import Button from './Button';

import {colors, sizes} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from '../store/user';
import {updateUserReservation} from '../api/user';

const TIMES = [
  '08:00',
  '09:00',
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

const initialReservationState = {
  date: '',
  time: '',
  people: 1,
  text: '',
  pickupTime: '',
  pickupLocation: '',
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case 'reset': {
      return initialReservationState;
    }
    case 'set': {
      return {...state, ...action.value};
    }
    case 'update': {
      return {...state, [action.name]: action.value};
    }
    case 'decrementPeople': {
      const people = state.people;
      return {...state, people: people == 1 ? people : people - 1};
    }
    case 'incrementPeople': {
      return {...state, people: state.people + 1};
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`);
    }
  }
};

export default ReservationModal = observer(props => {
  const {shop, navigation, setVisible} = props;
  const [myReservations, setMyReservations] = useState([]);

  const [days, setDays] = useState({});

  const [reservation, dispatchReservation] = useReducer(
    reservationReducer,
    initialReservationState,
  );

  const {date, time, people, text} = reservation;

  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [timeCan, setTimeCan] = useState([]);

  const [reservationId, setReservationId] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    let reservation = navigation.getParam('todo');
    let myPlans = user.plans;
    let days = {};
    Object.keys(myPlans).forEach((key, idx) => {
      days[key] = `Day ${idx + 1}`;
    });

    setMyReservations(user.reservations);

    if (reservation) {
      const {date, time, reservationId} = reservation;
      setDays(days);
      setTimeCan(
        user.reservations.filter(e => e.date == date).map(e => e.time),
      );
      setReservationDate(date);
      setReservationId(reservationId);
      setReservationTime(time);
      dispatchReservation({type: 'set', value: reservation});
      setIsEdit(true);
    } else {
      const firstDay = Object.keys(days)[0];
      setDays(days);
      setTimeCan(
        user.reservations.filter(e => e.date == firstDay).map(e => e.time),
      );
      dispatchReservation({type: 'update', value: firstDay, name: 'date'});
      setIsEdit(false);
    }
  }, []);

  handleMakeReservation = () => {
    const {email, name, phone, sex, image} = user;
    let reservation = {
      email,
      name,
      phone,
      sex,
      date,
      time,
      people,
      text,
    };
    reservation['reservationId'] = new Date().getUTCMilliseconds();
    reservation['createdDate'] = new Date();
    reservation['shop'] = {
      id: shop.id,
      name: shop.name,
      engName: shop.engName,
      tags: shop.tags,
      location: shop.location,
      src: shop.preview,
    };
    const userReservations = user.reservations.filter(
      e => e.reservationId != reservationId,
    );
    userReservations.push(reservation);
    updateUserReservation(user.email, userReservations);
    setVisible(false);
  };

  handleDeleteReservation = () => {
    const userReservations = user.reservations.filter(
      e => e.reservationId != reservationId,
    );
    updateUserReservation(user.email, userReservations);
    setVisible(false);
  };

  selectedDateColor = t => (t == date ? colors.white : colors.black);

  seletedTimeStyle = t => {
    return reservationDate == date && reservationTime == t
      ? styles.reserTime
      : timeCan.indexOf(t) != -1
      ? styles.noTime
      : t == time
      ? styles.onTime
      : styles.time;
  };

  seletedTimeColor = t => {
    return reservationDate == date && t == reservationTime
      ? colors.accent
      : timeCan.indexOf(t) != -1
      ? colors.primary
      : t == time
      ? colors.white
      : colors.black;
  };

  renderName = t =>
    myReservations.filter(e => e.date == date && e.time == t)[0]['shop'][
      'name'
    ];

  return (
    <Block
      padding={[
        Platform.OS === 'ios' ? sizes.padding * 2 : sizes.padding,
        sizes.padding,
      ]}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Ionicons size={50} color={colors.black} name="ios-close" />
      </TouchableOpacity>
      <Block center row space="between" style={{flex: 0, marginBottom: 30}}>
        <Text h1 bold>
          {isEdit ? '일정 변경' : '일정 등록'}
        </Text>
        <Text h3>{`${reservationDate}, ${reservationTime.substr(
          0,
          2,
        )}시`}</Text>
      </Block>
      <Block>
        <Block center row space="between">
          <Text style={{...styles.textStyle}}>Day</Text>
          <Text h3 darkgray>
            날짜를 선택하세요
          </Text>
        </Block>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Block row>
            {Object.keys(days).map(t => (
              <Button
                key={t}
                style={[
                  styles.dateStyle,
                  t == date ? styles.onDate : styles.date,
                ]}
                onPress={() => {
                  setTimeCan(
                    myReservations.filter(e => e.date == t).map(e => e.time),
                  );
                  dispatchReservation({
                    type: 'update',
                    value: t,
                    name: 'date',
                  });
                }}>
                <Block middle center>
                  <Text
                    bold
                    style={{
                      color: selectedDateColor(t),
                      marginBottom: 2,
                    }}>
                    {days[t]}
                  </Text>
                  <Text
                    style={{
                      color: selectedDateColor(t),
                      fontSize: 13,
                    }}>
                    {t}
                  </Text>
                </Block>
              </Button>
            ))}
          </Block>
        </ScrollView>
        <Block center row space="between">
          <Text style={{...styles.textStyle}}>Time</Text>
          <Text h3 darkgray>
            시간을 선택하세요
          </Text>
        </Block>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Block row>
            {TIMES.map(t => (
              <Button
                key={t}
                style={[styles.timeStyle, seletedTimeStyle(t)]}
                onPress={() =>
                  dispatchReservation({
                    type: 'update',
                    value: t,
                    name: 'time',
                  })
                }>
                <Block middle>
                  <Text
                    center
                    style={{
                      color: seletedTimeColor(t),
                    }}>
                    {reservationDate == date && reservationTime == t
                      ? '현일정'
                      : timeCan.indexOf(t) != -1
                      ? renderName(t)
                      : t}
                  </Text>
                </Block>
              </Button>
            ))}
          </Block>
        </ScrollView>
      </Block>
      <Block bottom>
        {errMsg != '' && (
          <Text h4 primary>
            {errMsg}
          </Text>
        )}
        <Button
          style={{marginBottom: 0}}
          normal
          onPress={() => {
            if (date == '' || time == '' || people == '') {
              setErrMsg('날짜와 시간을 입력하세요');
            } else {
              setErrMsg('');
              handleMakeReservation();
            }
          }}>
          <Text white bold accent center>
            {isEdit ? '일정 변경' : '일정 등록'}
          </Text>
        </Button>
        <Button
          style={{marginBottom: 0}}
          border
          onPress={() => {
            setVisible(false);
            handleDeleteReservation();
          }}>
          <Text center bold accent>
            일정 취소
          </Text>
        </Button>
        <Button onPress={() => setVisible(false)}>
          <Text center bold accent>
            닫기
          </Text>
        </Button>
      </Block>
    </Block>
  );
});

export const styles = StyleSheet.create({
  dateStyle: {
    width: 100,
    height: 56,
    padding: 0,
    marginRight: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
  timeStyle: {
    width: 90,
    height: 56,
    padding: 5,
    marginRight: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
  date: {
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
  onDate: {
    backgroundColor: colors.black,
    borderColor: colors.white,
  },
  time: {
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
  onTime: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  noTime: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  reserTime: {
    backgroundColor: colors.white,
    borderColor: colors.accent,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
