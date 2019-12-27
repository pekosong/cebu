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
      <Block style={styles.container}>
        <Block
          style={{
            flex: 0,
            width: 80,
            height: 80,
            marginRight: 10,
          }}>
          <CachedImage
            style={styles.imageStyle}
            uri={shop.preview}></CachedImage>
        </Block>
        <Block middle style={{height: 80}}>
          <Block row center space="between" style={{flex: 0}}>
            <Text h3 bold style={{marginVertical: 2}}>
              {shop.name + ' '}
              <Text primary>{shop.tags[0]}</Text>
            </Text>
            <Block
              style={{
                flex: 0,
                backgroundColor:
                  shop.category === 'Massage' ? colors.primary : colors.black,
                borderRadius: 18,
                paddingVertical: 3,
                paddingHorizontal: 6,
              }}>
              <Text size={10} white bold>
                {shop.category === 'Massage' ? '마사지' : '식당'}
              </Text>
            </Block>
          </Block>
          {/* <Text gray style={{marginVertical: 4}}>
            필리핀 인기 만점의 전신 아로마 마사지 제공
          </Text> */}
          <Block center row space="between" style={{flex: 0}}>
            <Block row center style={{flex: 0}}>
              <AntDesign
                size={13}
                name="star"
                style={{color: colors.primary}}
              />
              <Text style={{marginLeft: 5}}>
                {`3 · 리뷰 ${convertComma(123)}`}
              </Text>
              <Text style={{marginLeft: 5}}>
                {'· 저장 ' + convertComma(423)}
              </Text>
            </Block>
            <Block row bottom center>
              <AntDesign size={12} name="car" style={{marginRight: 3}} />
              <Text size={12}>{`${distance.toFixed(1)}km`}</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
