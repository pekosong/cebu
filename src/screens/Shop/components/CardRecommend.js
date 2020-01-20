import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';

import {convertComma} from 'app/src/utils';
import {colors} from 'app/src/styles';
import {AntDesign} from '@expo/vector-icons';

const MAP = {
  Massage: '마사지',
  Place: '명소',
  Restaurant: '식당',
};
export default CardRecommend = ({item, navigation}) => {
  const {shop, distance} = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Shop', {shopId: shop.id})}>
      <Block row>
        <CachedImage
          style={styles.imageStyle}
          uri={
            typeof shop.preview === 'string' ? shop.preview : shop.preview[1]
          }></CachedImage>
        <Block middle>
          <Block row center space="between" style={{flex: 0, marginBottom: 6}}>
            <Text h4 bold style={{width: 200}}>
              {shop.name.length < 8
                ? shop.name + ' '
                : shop.name.substring(0, 8) + '..' + ' '}
              <Text size={12} gray>
                {shop.tags[0]}
              </Text>
            </Text>
            <Block
              style={{
                position: 'absolute',
                right: 0,
                flex: 0,
                borderWidth: 1,
                borderColor:
                  shop.category === 'Massage'
                    ? colors.primary
                    : shop.category === 'Place'
                    ? colors.accent
                    : colors.black,
                borderRadius: 18,
                paddingVertical: 3,
                paddingHorizontal: 6,
              }}>
              <Text
                size={10}
                bold
                style={{
                  color:
                    shop.category === 'Massage'
                      ? colors.primary
                      : shop.category === 'Place'
                      ? colors.accent
                      : colors.black,
                }}>
                {MAP[shop.category]}
              </Text>
            </Block>
          </Block>
          <Block row center space="between" style={{flex: 0}}>
            <Block row center>
              <AntDesign
                size={13}
                name="star"
                style={{color: colors.primary}}
              />
              <Text darkgray style={{marginLeft: 5}}>
                {`${shop.review} · 리뷰 ${convertComma(shop.reviewCnt)}`}
              </Text>
            </Block>
            <Block row bottom center>
              <AntDesign
                size={12}
                name="car"
                style={{color: colors.darkgray, marginRight: 3}}
              />
              <Text darkgray size={12}>{`${distance.toFixed(1)}km`}</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 5,
  },
});
