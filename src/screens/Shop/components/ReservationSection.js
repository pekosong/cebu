import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, Divider} from 'app/src/components';
import {colors, style} from 'app/src/styles';

export default function ReservationSection(props) {
  const {todo, shop} = props;

  return todo && Object.entries(todo).length !== 0 ? (
    <Fragment>
      <Block style={style.shop.categories}>
        <Text h3 bold style={style.shop.content}>
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
      {todo.pickupTime ? (
        <Fragment>
          <Block style={style.shop.categories}>
            <Text h3 bold style={style.shop.content}>
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
          <Divider />
        </Fragment>
      ) : null}
    </Fragment>
  ) : null;
}

ReservationSection.defaultProps = {};

ReservationSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});