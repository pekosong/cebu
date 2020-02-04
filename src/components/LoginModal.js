import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Block from './Block';
import Text from './Text';

import {sizes, colors} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default LoginModal = ({
  text,
  subText,
  setShowModal,
  navigation,
  isTrip,
}) => {
  return (
    <Block
      style={{
        flex: 1,
        position: 'absolute',
        width: width - sizes.padding * 2,
      }}>
      <Block
        style={{
          flex: 0,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#fff',
          borderRadius: 6,
        }}>
        <Block style={{marginVertical: 5}}>
          <Text center h2 bold style={{marginBottom: 10}}>
            {text}
          </Text>
          <Text center darkgray>
            {subText}
          </Text>
        </Block>
        <Block
          style={{
            borderWidth: 0.5,
            borderColor: colors.gray2,
            marginVertical: 8,
          }}></Block>
        <Block row>
          <TouchableOpacity
            style={{flex: 1, paddingVertical: 8}}
            onPress={() => setShowModal(false)}>
            <Text center h4 bold>
              취소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, paddingVertical: 8}}
            onPress={() => {
              setShowModal(false);
              isTrip
                ? navigation.navigate('TripInfos')
                : navigation.navigate('Login');
            }}>
            <Text center h4 bold>
              {isTrip ? '여행정보 등록' : '로그인'}
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};
