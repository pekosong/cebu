import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {convertComma} from 'app/src/utils';
import {colors} from 'app/src/styles';
import {AntDesign} from '@expo/vector-icons';

const MAP = {
  Massage: '마사지',
  Place: '명소',
  Restaurant: '식당',
  Food: '배달',
  Adult: '성인',
  Activity: '놀이',
};
export default CardRecommend = ({item, navigation, isDistance}) => {
  const {shop, distance} = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Shop', {shopId: shop.id})}>
      <Block row>
        <CachedImage
          style={styles.imageStyle}
          uri={
            typeof shop.preview === 'string' ? shop.preview : shop.preview[0]
          }></CachedImage>
        <Block middle>
          <Block row center space="between" style={{flex: 0, marginBottom: 5}}>
            <Text numberOfLines={1} h4 bold style={{width: 190}}>
              {shop.name + '  '}
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
                borderColor: ['Massage', 'Activity', 'Place'].includes(
                  shop.category,
                )
                  ? colors.primary
                  : ['Food', 'Restaurant'].includes(shop.category)
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
                  color: ['Massage', 'Activity', 'Place'].includes(
                    shop.category,
                  )
                    ? colors.primary
                    : ['Food', 'Restaurant'].includes(shop.category)
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
            {isDistance && distance !== '' && (
              <Block row bottom center>
                <AntDesign
                  size={12}
                  name="car"
                  style={{color: colors.darkgray, marginRight: 3}}
                />
                <Text darkgray size={12}>{`${distance.toFixed(1)}km`}</Text>
              </Block>
            )}
          </Block>
          {shop.location !== '' && (
            <Text size={12} darkgray numberOfLines={1} style={{marginTop: 5}}>
              {shop.location} {shop.branch && '/ ' + shop.branch}
            </Text>
          )}
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
