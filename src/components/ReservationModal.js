import React, {
  useState,
  useEffect,
  Fragment,
  useRef,
  useContext,
  useReducer,
} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Block from './Block';
import Text from './Text';
import Button from './Button';
import CachedImage from './CachedImage';

import {colors, sizes} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from '../store/user';
import {updateUserReservation} from '../api/user';
import {updateShopReservation} from '../api/shop';

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

  const {date, time, people, text, pickupTime, pickupLocation} = reservation;

  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [timeCan, setTimeCan] = useState([]);

  const [reservationId, setReservationId] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(true);

  const [loading, setLoading] = useState(false);

  const editPage = useRef(null);

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
      const {
        date,
        time,
        people,
        text,
        reservationId,
        pickupTime,
        pickupLocation,
      } = reservation;

      setDays(days);
      setTimeCan(
        user.reservations.filter(e => e.date == date).map(e => e.time),
      );

      setReservationDate(date);
      setReservationId(reservationId);
      setReservationTime(time);

      dispatchReservation({type: 'update', value: date, name: 'date'});
      dispatchReservation({type: 'update', value: time, name: 'time'});
      dispatchReservation({
        type: 'update',
        value: people,
        name: 'people',
      });
      dispatchReservation({type: 'update', value: text, name: 'text'});
      dispatchReservation({
        type: 'update',
        value: pickupTime,
        name: 'pickupTime',
      });
      dispatchReservation({
        type: 'update',
        value: pickupLocation,
        name: 'pickupLocation',
      });
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
    setLoading(true);
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

    reservation['date'] = date;
    reservation['time'] = time;
    reservation['people'] = people;
    reservation['text'] = text;
    reservation['pickupLocation'] = pickupLocation;
    reservation['pickupTime'] = pickupTime;
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

    updateUserReservation(user.email, userReservations);
    updateShopReservation(shop.id, shopReservations).then(() => {
      setVisible(false);
    });
  };

  handleUpdateReservation = () => {
    setLoading(true);
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

    reservation['date'] = date;
    reservation['time'] = time;
    reservation['people'] = people;
    reservation['text'] = text;
    reservation['pickupLocation'] = pickupLocation;
    reservation['pickupTime'] = pickupTime;
    reservation['shop'] = {
      id: shop.id,
      name: shop.name,
      engName: shop.engName,
      src: shop.preview,
    };

    const userReservations = user.reservations.filter(
      e => e.reservationId != reservationId,
    );
    const shopReservations = shop.reservations.filter(
      e => e.reservationId != reservationId,
    );

    userReservations.push(reservation);
    shopReservations.push(reservation);
    updateUserReservation(user.email, userReservations);
    updateShopReservation(shop.id, shopReservations).then(() => {
      navigation.goBack();
    });
  };

  handleDeleteReservation = () => {
    setLoading(true);

    const userReservations = user.reservations.filter(
      e => e.reservationId != reservationId,
    );
    const shopReservations = shop.reservations.filter(
      e => e.reservationId != reservationId,
    );
    updateUserReservation(user.email, userReservations);
    updateShopReservation(shop.id, shopReservations).then(() => {
      navigation.goBack();
    });
  };

  selectedDateColor = t => {
    return t == date ? colors.white : colors.black;
  };

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

  renderName = t => {
    return myReservations.filter(e => e.date == date && e.time == t)[0]['shop'][
      'name'
    ];
  };

  renderEditPage = () => (
    <ScrollView ref={editPage} showsVerticalScrollIndicator={false}>
      <Block>
        <Text style={{...styles.textStyle}}>예약일</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Block row>
            {Object.keys(days).map(t => (
              <Button
                key={t}
                style={t == date ? styles.onDate : styles.date}
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
                    style={{
                      color: selectedDateColor(t),
                      marginBottom: 2,
                    }}>
                    {days[t]}
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
                onPress={() =>
                  dispatchReservation({
                    type: 'update',
                    value: t,
                    name: 'time',
                  })
                }>
                <Block center middle>
                  <Text
                    style={{
                      color: seletedTimeColor(t),
                    }}>
                    {reservationDate == date && reservationTime == t
                      ? '현예약'
                      : timeCan.indexOf(t) != -1
                      ? `예약중`
                      : t}
                  </Text>
                  {reservationDate == date &&
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
            onPress={() => dispatchReservation({type: 'decrementPeople'})}>
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
            onPress={() => dispatchReservation({type: 'incrementPeople'})}>
            <Text h1 black>
              +
            </Text>
          </TouchableOpacity>
        </Block>
        {shop.pickup && (
          <Fragment>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>픽업 시간</Text>
              <TextInput
                defaultValue={pickupTime}
                placeholder="10시 30분"
                onChangeText={e =>
                  dispatchReservation({
                    type: 'update',
                    value: e,
                    name: 'pickupTime',
                  })
                }
                style={{fontSize: 20}}
              />
            </Block>
            <Block style={styles.inputRow}>
              <Text style={styles.textStyle}>픽업 장소</Text>
              <TextInput
                defaultValue={pickupLocation}
                placeholder="호텔 정문"
                onChangeText={e =>
                  dispatchReservation({
                    type: 'update',
                    value: e,
                    name: 'pickupLocation',
                  })
                }
                style={{fontSize: 20}}
              />
            </Block>
          </Fragment>
        )}

        <Block style={styles.inputRow}>
          <Text style={styles.textStyle}>추가 요청 사항</Text>
          <TextInput
            defaultValue={text}
            placeholder=""
            onChangeText={e =>
              dispatchReservation({type: 'update', value: e, name: 'text'})
            }
            style={{fontSize: 20}}
          />
        </Block>
      </Block>
      {errMsg != '' && (
        <Text h4 primary style={{marginVertical: 20}}>
          {errMsg}
        </Text>
      )}
      {isEdit ? (
        <Block>
          <Button
            border
            onPress={() => {
              handleUpdateReservation();
            }}>
            {loading ? (
              <ActivityIndicator></ActivityIndicator>
            ) : (
              <Text bold accent center>
                예약 요청
              </Text>
            )}
          </Button>
          <Button
            shadow
            onPress={() => {
              handleDeleteReservation();
            }}>
            {loading ? (
              <ActivityIndicator></ActivityIndicator>
            ) : (
              <Text bold accent center>
                취소 요청
              </Text>
            )}
          </Button>
        </Block>
      ) : (
        <Block>
          <Button
            border
            onPress={() => {
              if (date == '' || time == '' || people == '') {
                setErrMsg('예약 일시 / 시간 / 인원 입력은 필수 입니다');
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
          {date}
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
      {shop.pickup && (
        <Fragment>
          <Block row space="between" style={styles.inputRow}>
            <Text h2>픽업 시간</Text>
            <Text h2 bold accent>
              {pickupTime}
            </Text>
          </Block>
          <Block row space="between" style={styles.inputRow}>
            <Text h2>픽업 장소</Text>
            <Text h2 bold accent>
              {pickupLocation}
            </Text>
          </Block>
        </Fragment>
      )}
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
          {loading ? (
            <ActivityIndicator></ActivityIndicator>
          ) : (
            <Text bold accent center>
              예약 신청
            </Text>
          )}
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
        {edit != true ? '예약 내역' : isEdit ? '예약 변경' : '예약 신청'}
      </Text>
      {edit ? renderEditPage() : renderConfirmPage()}
    </Block>
  );
});

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
