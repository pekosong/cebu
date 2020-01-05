import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';

import {convertComma} from 'app/src/utils';
import {colors} from 'app/src/styles';
import {AntDesign} from '@expo/vector-icons';

export default CardRecommend = ({item, navigation}) => {
  const {shop, distance} = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Shop', {shopId: shop.id})}>
      <Block row>
        <CachedImage style={styles.imageStyle} uri={shop.preview}></CachedImage>
        <Block middle>
          <Block row center space="between" style={{flex: 0, marginBottom: 6}}>
            <Text h3 bold>
              {shop.name + '  '}
              <Text primary>{shop.tags[0]}</Text>
            </Text>
            <Block
              style={{
                flex: 0,
                borderWidth: 1,
                borderColor:
                  shop.category === 'Massage' ? colors.primary : colors.black,
                borderRadius: 18,
                paddingVertical: 3,
                paddingHorizontal: 6,
              }}>
              <Text
                size={10}
                bold
                style={{
                  color:
                    shop.category === 'Massage' ? colors.primary : colors.black,
                }}>
                {shop.category === 'Massage' ? '마사지' : '식당'}
              </Text>
            </Block>
          </Block>
          <Block row center space="between" style={{flex: 0}}>
            <Block row>
              <AntDesign
                size={13}
                name="star"
                style={{color: colors.primary}}
              />
              <Text darkgray style={{marginLeft: 5}}>
                {`${shop.review} · 리뷰 ${convertComma(shop.reviewCnt)}`}
              </Text>
              <Text darkgray style={{marginLeft: 5}}>
                {'· 저장 ' + convertComma(shop.likes)}
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
