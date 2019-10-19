import React, {useState, useEffect, Fragment, useRef} from 'react';
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
import CachedImage from './CachedImage';

import {theme} from '../constants';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateShop, makeResevation} from '../redux/action';
import StarRating from 'react-native-star-rating';

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

  const [errMsg, setErrMsg] = useState('');
  const [isChange, setIsChange] = useState(false);
  const [edit, setEdit] = useState(true);

  const editPage = useRef(null);

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

  handleMakeReservation = () => {
    const {email, name, phone, sex, image} = user;
    let reservation = {};
    reservation['createdDate'] = new Date();
    reservation['status'] = 'wait';
    reservation['email'] = email;
    reservation['name'] = name;
    reservation['phone'] = phone;
    reservation['sex'] = sex;
    reservation['image'] = image;
    reservation['time'] = time;
    reservation['people'] = people;
    reservation['date'] = selectedDate;
    reservation['text'] = text;
    reservation['pickupLocation'] = pickupLocation;
    reservation['pickupTime'] = pickuptime;
    reservation['pickupCar'] = '';
    reservation['shop'] = {
      id: shop.id,
      name: shop.name,
      engName: shop.engName,
      src: shop.preview,
    };
    let allPlans = user.plans;
    let allReservations = shop.reservations;
    console.log(allReservations);
    allPlans[selectedDate][time] = reservation;
    allReservations.push(reservation);
    dispatch(makeResevation(allPlans, allReservations, user.email, shop.id));
    let newShop = {...shop, reservations: allReservations};
    dispatch(updateShop(newShop));
    setVisible(false);
  };

  handleChangeReservation = () => {
    const {email, name, phone, sex, image} = user;

    let reservation = {};
    reservation['createdDate'] = new Date();
    reservation['status'] = 'wait';
    reservation['email'] = email;
    reservation['name'] = name;
    reservation['phone'] = phone;
    reservation['sex'] = sex;
    reservation['image'] = image;
    reservation['time'] = time;
    reservation['people'] = people;
    reservation['date'] = selectedDate;
    reservation['text'] = text;
    reservation['pickupLocation'] = pickupLocation;
    reservation['pickupTime'] = pickuptime;
    reservation['pickupCar'] = '';
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
    let newShop = {...shop, reservations: allReservations};
    dispatch(updateShop(newShop));
    navigation.goBack();
  };

  handleDeleteReservation = () => {
    let allPlans = user.plans;
    let allReservations = shop.reservations;

    delete allPlans[todo.date][todo.time];
    allReservations = allReservations.filter(e => e.email != user.email);

    dispatch(makeResevation(allPlans, allReservations, user.email, shop.id));
    let newShop = {...shop, reservations: allReservations};
    dispatch(updateShop(newShop));
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
      ? theme.colors.accent
      : timeCan.indexOf(t) != -1
      ? theme.colors.primary
      : t == time
      ? theme.colors.white
      : theme.colors.black;
  };

  renderEditPage = () => (
    <ScrollView ref={editPage} showsVerticalScrollIndicator={false}>
      <Block>
        <Text style={{...styles.textStyle}}>예약일</Text>
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
            borderWidth: 1,
            borderColor: theme.colors.black,
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
            <Text h1 bold black>
              -
            </Text>
          </TouchableOpacity>
          <Text black h3>
            {people + '명'}
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
            }}
            onPress={() => setPeople(people + 1)}>
            <Text h1 black>
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

      {errMsg ? (
        <Text h4 primary style={{marginVertical: 20}}>
          {errMsg}
        </Text>
      ) : null}

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
        <Block>
          <Button
            gradient
            onPress={() => {
              if (selectedDate == '' || time == '' || people == '') {
                setErrMsg('예약 일시 / 시간 / 인원 입력을 필수 입니다');
              } else {
                editPage.current.scrollTo({x: 0, y: 0, animated: true});
                setErrMsg('');
                setEdit(false);
              }
            }}>
            <Text bold white center>
              다음
            </Text>
          </Button>
          <Button
            shadow
            onPress={() => {
              setVisible(false);
            }}>
            <Text center bold primary>
              뒤로
            </Text>
          </Button>
        </Block>
      )}
    </ScrollView>
  );

  renderConfirmPage = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block row space="between" style={{marginBottom: 30, marginTop: 20}}>
        <Block>
          <Text h3 bold>
            {shop.name}
          </Text>
          <Text h4 accent style={{marginVertical: 5}}>
            {shop.engName}
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={shop.review}
            starSize={16}
            fullStarColor={theme.colors.accent}
            containerStyle={{width: 20, marginTop: 3}}
          />
        </Block>
        <CachedImage
          uri={shop.preview}
          style={{height: 80, width: 120}}></CachedImage>
      </Block>

      <Block row space="between" style={styles.inputRow}>
        <Text h2>예약 일시</Text>
        <Text h2 bold accent>
          {selectedDate}
        </Text>
      </Block>

      <Block row space="between" style={styles.inputRow}>
        <Text h2>예약 시간</Text>
        <Text h2 bold accent>
          {time}
        </Text>
      </Block>

      <Block row space="between" style={styles.inputRow}>
        <Text h2>예약 인원</Text>
        <Text h2 bold accent>
          {people}명
        </Text>
      </Block>

      {shop.pickup ? (
        <Fragment>
          <Block row space="between" style={styles.inputRow}>
            <Text h2>픽업 시간</Text>
            <Text h2 bold accent>
              {pickuptime}
            </Text>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Text h2>픽업 장소</Text>
            <Text h2 bold accent>
              {pickupLocation}
            </Text>
          </Block>
        </Fragment>
      ) : null}

      <Block style={styles.inputRow}>
        <Text h2>추가 요청 사항</Text>
        <Text h3 style={{marginTop: 10}}>
          {text}
        </Text>
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
        <Block>
          <Button
            gradient
            onPress={() => {
              handleMakeReservation();
            }}>
            <Text bold white center>
              예약 신청
            </Text>
          </Button>
          <Button
            shadow
            onPress={() => {
              setEdit(true);
            }}>
            <Text center bold primary>
              뒤로
            </Text>
          </Button>
        </Block>
      )}
    </ScrollView>
  );

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
        {edit != true ? '예약 내역' : isChange ? '예약 변경' : '예약 신청'}
      </Text>
      {edit ? renderEditPage() : renderConfirmPage()}
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
    borderColor: theme.colors.black,
  },
  noTime: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
  },
  reserTime: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.accent,
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
