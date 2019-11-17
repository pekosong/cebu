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
import Divider from './Divider';

import {colors, sizes} from 'app/styles';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {makeResevation} from 'app/redux/action';
import firebase from 'app/constants/store';

const MAP = {
  wait: '예약요청',
  confirm: '예약확정',
  end: '종료',
  not: '예약불가',
};

export default ReservationConfirmModal = props => {
  const {setVisible, reservation} = props;

  const [userReservations, setUserReservations] = useState([]);
  const [shopReservations, setShopReservations] = useState([]);
  const [pickupCar, setPickupCar] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const {email, shop} = reservation;
    firebase
      .firestore()
      .collection('users')
      .doc(email)
      .get()
      .then(doc => setUserReservations(doc.data().reservations));
    firebase
      .firestore()
      .collection('shops')
      .doc(shop.id)
      .get()
      .then(doc => setShopReservations(doc.data().reservations));
  }, []);

  handleConfirmReservation = status => {
    let NewReservation = {...reservation, status: status, pickupCar: pickupCar};
    const {email, shop, reservationId} = reservation;

    let userReservation = userReservations;
    let shopReservation = shopReservations;

    userReservation = userReservation.filter(
      e => e.reservationId != reservationId,
    );
    shopReservation = shopReservation.filter(
      e => e.reservationId != reservationId,
    );

    userReservation.push(NewReservation);
    shopReservation.push(NewReservation);

    dispatch(makeResevation(userReservation, shopReservation, email, shop.id));
    setVisible(false);
  };

  renderConfirmPage = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginTop: 5, paddingTop: 20}}>
      <Block style={{paddingHorizontal: sizes.padding}}>
        <Block style={{marginTop: 20, marginBottom: 10}}>
          <Text h3>고객 정보</Text>
        </Block>
        <Block row space="between" style={styles.inputRow}>
          <Text h2>고객 이름</Text>
          <Text h2 bold accent>
            {reservation.name}
          </Text>
        </Block>
        <Block row space="between" style={styles.inputRow}>
          <Text h2>고객 메일</Text>
          <Text h2 bold accent>
            {reservation.email}
          </Text>
        </Block>
        <Block row space="between" style={styles.inputRow}>
          <Text h2>고객 전화번호</Text>
          <Text h2 bold accent>
            {reservation.phone}
          </Text>
        </Block>
      </Block>

      <Divider></Divider>
      <Block style={{paddingHorizontal: sizes.padding}}>
        <Block style={{marginTop: 20, marginBottom: 10}}>
          <Text h3>예약 정보</Text>
        </Block>
        <Block row space="between" style={styles.inputRow}>
          <Text h2>예약 일시</Text>
          <Text h2 bold accent>
            {reservation.date}
          </Text>
        </Block>
        <Block row space="between" style={styles.inputRow}>
          <Text h2>예약 시간</Text>
          <Text h2 bold accent>
            {reservation.time}
          </Text>
        </Block>
        <Block row space="between" style={styles.inputRow}>
          <Text h2>예약 인원</Text>
          <Text h2 bold accent>
            {reservation.people}명
          </Text>
        </Block>
        {reservation.pickupTime ? (
          <Fragment>
            <Block row space="between" style={styles.inputRow}>
              <Text h2>픽업 시간</Text>
              <Text h2 bold accent>
                {reservation.pickupTime}
              </Text>
            </Block>
            <Block row space="between" style={styles.inputRow}>
              <Text h2>픽업 장소</Text>
              <Text h2 bold accent>
                {reservation.pickupLocation}
              </Text>
            </Block>
            <Block style={styles.inputRow}>
              <Text h2>픽업 차량</Text>
              <TextInput
                defaultValue={reservation.pickupCar}
                placeholder="픽업 차량 정보를 입력하세요."
                onChangeText={e => setPickupCar(e)}
                style={{fontSize: 20, marginTop: 15}}
              />
            </Block>
          </Fragment>
        ) : null}
        <Block style={styles.inputRow}>
          <Text h2>추가 요청 사항</Text>
          <Text h3 style={{marginTop: 20}}>
            {reservation.text}
          </Text>
        </Block>
      </Block>
      <Divider></Divider>
      <Block style={{marginBottom: 30, paddingHorizontal: sizes.padding}}>
        <Button
          gradient
          onPress={() => {
            handleConfirmReservation('confirm');
          }}>
          <Text bold white center>
            예약 확정
          </Text>
        </Button>
        <Button
          shadow
          onPress={() => {
            handleConfirmReservation('not');
          }}>
          <Text center bold primary>
            예약 불가
          </Text>
        </Button>
      </Block>
    </ScrollView>
  );

  return (
    <Block
      style={{
        paddingVertical:
          Platform.OS === 'ios' ? sizes.padding * 2 : sizes.padding,
      }}>
      <Block
        middle
        center
        row
        space="between"
        style={{
          flex: 0,
          height: 50,
          width: '100%',
          marginTop: 20,
          paddingHorizontal: sizes.padding,
        }}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Ionicons size={50} color={colors.black} name="ios-close" />
        </TouchableOpacity>
        <Text h1 bold>
          {MAP[reservation.status]}
        </Text>
      </Block>
      {renderConfirmPage()}
    </Block>
  );
};

export const styles = StyleSheet.create({
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
