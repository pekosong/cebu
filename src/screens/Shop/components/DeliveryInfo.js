import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, Divider} from 'app/src/components';
import {convertComma} from 'app/src/utils';

export default DeliveryInfo = ({shop, isKorean}) => {
  return (
    <>
      <Text h1 bold style={{marginBottom: 30}}>
        배달 안내
      </Text>
      <Block row space="between" style={{marginBottom: 10}}>
        <Text h2>최소 주문 금액</Text>
        <Text h2>
          {isKorean
            ? convertComma(shop.minPrice * 22) + '원'
            : convertComma(shop.minPrice) + '페소'}
        </Text>
      </Block>
      <Divider></Divider>
    </>
  );
};

export const styles = StyleSheet.create({});
