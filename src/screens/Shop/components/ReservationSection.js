import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, Divider} from 'app/src/components';
import {style} from 'app/src/styles';

export default ReservationSection = ({todo, shop}) => {
  return (
    <>
      <Block style={style.shop.categories}>
        <Text h2 bold style={{marginBottom: 30}}>
          예약정보
        </Text>
        <Block>
          <Block style={style.inputRow}>
            <Text h3>예약인원</Text>
            <Text darkgray h3>
              {todo.people}명
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>예약시간</Text>
            <Text darkgray h3>
              {todo.time}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>예약정보</Text>
            <Text darkgray h3>
              {shop.category == 'Massage' ? '전신마사지' : '스테이크'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>요청사항</Text>
            <Text darkgray h3>
              {todo.text}
            </Text>
          </Block>
        </Block>
      </Block>
      <Divider />
      {todo.pickupTime != '' && (
        <Block style={style.shop.categories}>
          <Text h3 bold style={{marginBottom: 30}}>
            픽업정보
          </Text>
          <Block>
            <Block style={style.inputRow}>
              <Text h3>픽업장소</Text>
              <Text darkgray h3>
                {todo.pickupLocation}
              </Text>
            </Block>
            <Block style={style.inputRow}>
              <Text h3>픽업시간</Text>
              <Text darkgray h3>
                {todo.pickupTime}
              </Text>
            </Block>
            <Block style={style.inputRow}>
              <Text h3>픽업차량</Text>
              <Text darkgray h3>
                {todo.pickupCar ? todo.pickupCar : '확인중'}
              </Text>
            </Block>
          </Block>
        </Block>
      )}
    </>
  );
};

ReservationSection.defaultProps = {};

ReservationSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
