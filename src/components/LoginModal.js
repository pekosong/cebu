import React from 'react';
import {Dimensions} from 'react-native';
import Block from './Block';
import Text from './Text';

import {sizes, colors} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default LoginModal = ({text}) => {
  return (
    <Block
      center
      middle
      style={{
        flex: 1,
        bottom: 50,
        position: 'absolute',
        width: width - sizes.padding * 1.8,
      }}>
      <Block
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: colors.darkgray,
          borderRadius: 20,
        }}>
        <Text white h4 bold>
          {text}
        </Text>
      </Block>
    </Block>
  );
};
