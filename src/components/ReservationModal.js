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

import uuidv1 from 'uuid/v1';

import {colors, sizes} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateShop, makeResevation} from 'app/src/redux/action';
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
  const [myReservations, setMyReservations] = useState([]);

  const [date, setDate] = useState({});
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [timeCan, setTimeCan] = useState([]);

  const [selectedDate, setSelectedDate] = useState('');
  const [reservationId, setReservationId] = useState('');
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
    let days = {};
    Object.keys(myPlans).forEach((key, idx) => {
      days[key] = `Day ${idx + 1}`;
    });

    setMyReservations(user.reservations);

    if (reservation) {
      const {date, time, people, text, reservationId} = reservation;

      setDate(days);
      setSelectedDate(date);
      setReservationDate(date);
      setReservationId(reservationId);
      setTime(time);
      setReservationTime(time);
      setPeople(people);
      setText(text);
      setTimeCan(
        user.reservations.filter(e => e.date == date).map(e => e.time),
      );
      setIsChange(true);
    } else {
      const firstDay = Object.keys(days)[0];

      setDate(days);
      setTimeCan(
        user.reservations.filter(e => e.date == firstDay).map(e => e.time),
      );
      setSelectedDate(firstDay);
      setIsChange(false);
    }
  }, [user]);

  handleMakeReservation = () => {
    const {email, name, phone, sex, image} = user;
    let reservation = {};
    reservation['reservationId'] = new Date().getUTCMilliseconds();
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

    let userReservations = user.reservations;
    let shopReservations = shop.reservations;
    userReservations.push(reservation);
    shopReservations.push(reservation);
    dispatch(
      makeResevation(userReservations, shopReservations, user.email, shop.id),
    );
    dispatch(updateShop({...shop, reservations: shopReservations})).then(() =>
      setVisible(false),
    );
  };

  handleChangeReservation = () => {
    const {email, name, phone, sex, image} = user;

    let reservation = {};
    reservation['reservationId'] = reservationId;
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

    let userReservations = user.reservations;
    let shopReservations = shop.reservations;

    userReservations = userReservations.filter(
      e => e.reservationId != reservationId,
    );
    shopReservations = shopReservations.filter(
      e => e.reservationId != reservationId,
    );

    userReservations.push(reservation);
    shopReservations.push(reservation);
    dispatch(
      makeResevation(userReservations, shopReservations, user.email, shop.id),
    );
    dispatch(updateShop({...shop, reservations: shopReservations})).then(() =>
      navigation.goBack(),
    );
  };

  handleDeleteReservation = () => {
    let userReservations = user.reservations;
    let shopReservations = shop.reservations;

    userReservations = userReservations.filter(
      e => e.reservationId != reservationId,
    );
    shopReservations = shopReservations.filter(
      e => e.reservationId != reservationId,
    );

    dispatch(
      makeResevation(userReservations, shopReservations, user.email, shop.id),
    );
    dispatch(updateShop({...shop, reservations: shopReservations})).then(() =>
      navigation.goBack(),
    );
  };

  selectedDateColor = t => {
    return t == selectedDate ? colors.white : colors.black;
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
      ? colors.accent
      : timeCan.indexOf(t) != -1
      ? colors.primary
      : t == time
      ? colors.white
      : colors.black;
  };

  renderName = t => {
    return myReservations.filter(e => e.date == selectedDate && e.time == t)[0][
      'shop'
    ]['name'];
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
                    myReservations.filter(e => e.date == t).map(e => e.time),
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
                      {renderName(t)}
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
            borderColor: colors.black,
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
            border
            onPress={() => {
              handleChangeReservation();
            }}>
            <Text bold accent center>
              예약 변경 요청
            </Text>
          </Button>
          <Button
            shadow
            onPress={() => {
              handleDeleteReservation();
            }}>
            <Text center bold accent>
              취소 요청
            </Text>
          </Button>
        </Block>
      ) : (
        <Block>
          <Button
            border
            onPress={() => {
              if (selectedDate == '' || time == '' || people == '') {
                setErrMsg('예약 일시 / 시간 / 인원 입력을 필수 입니다');
              } else {
                editPage.current.scrollTo({x: 0, y: 0, animated: true});
                setErrMsg('');
                setEdit(false);
              }
            }}>
            <Text bold accent center>
              다음
            </Text>
          </Button>
          <Button
            onPress={() => {
              setVisible(false);
            }}>
            <Text center bold accent>
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
            fullStarColor={colors.accent}
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
      <Block>
        <Button
          border
          onPress={() => {
            handleMakeReservation();
          }}>
          <Text bold accent center>
            예약 신청
          </Text>
        </Button>
        <Button
          onPress={() => {
            setEdit(true);
          }}>
          <Text center bold accent>
            뒤로
          </Text>
        </Button>
      </Block>
    </ScrollView>
  );

  return (
    <Block
      padding={[
        Platform.OS === 'ios' ? sizes.padding * 2 : sizes.padding,
        sizes.padding,
      ]}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Ionicons size={50} color={colors.black} name="ios-close" />
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
  date: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
  onDate: {
    width: 100,
    height: 50,
    padding: 0,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: colors.black,
    borderColor: colors.white,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: colors.gray2,
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
    borderBottomColor: colors.gray,
  },
});
