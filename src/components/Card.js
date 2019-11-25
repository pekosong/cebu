import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import Block from './Block';
import Text from './Text';
import Favorite from './Favorite';

import {colors} from '../styles';

export default Card = props => {
  const {style, children, item, navigation, last} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Shop', {
          shopId: item.shopCode,
        });
      }}>
      <Block style={[styles.elementContainer, {marginRight: last ? 40 : 20}]}>
        <Block flex={2}>
          <Image
            style={[styles.imageStyle, styles.shodow]}
            source={item.src}></Image>

          <Favorite
            shop={{
              id: item.shopCode,
              name: item.shop,
              preview: item.url,
            }}></Favorite>

          <Block
            style={{
              position: 'absolute',
              right: 5,
              bottom: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: 5,
            }}>
            <Text caption white>
              오늘
            </Text>
          </Block>
          <Block
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 5,
            }}></Block>
        </Block>
        <Block row flex={1}>
          <Block flex={3} middle>
            <Text style={{fontWeight: 'bold', color: colors.accent}}>
              {item.tag}
            </Text>
            <Text h3 bold style={{marginVertical: 2}}>
              {item.shop}
            </Text>
            <Text caption>{item.desc}</Text>
          </Block>
          <Block flex={2} middle>
            {children}
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 3,
    width: 250,
    height: 250,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
