import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Block, Text} from 'app/src/components';

import {convertComma} from 'app/src/utils';
import {colors} from 'app/src/styles';
import {AntDesign} from '@expo/vector-icons';

export default CardRecommend = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Shop', {
          shopId: item.shopCode,
        });
      }}>
      <Block style={styles.container}>
        <Block
          style={{
            flex: 0,
            width: 80,
            height: 80,
            marginRight: 16,
          }}>
          <Image style={styles.imageStyle} source={item.src}></Image>
        </Block>
        <Block>
          <Block row center space="between" style={{flex: 0}}>
            <Text h3 bold style={{marginVertical: 2}}>
              {item.shop + '  '}
              <Text primary>{item.tag.join(', ')}</Text>
            </Text>
            <Block
              style={{
                flex: 0,
                backgroundColor:
                  item.category === 'Massage' ? colors.primary : colors.black,
                borderRadius: 18,
                paddingVertical: 3,
                paddingHorizontal: 6,
              }}>
              <Text size={10} white bold>
                {item.category === 'Massage' ? '마사지' : '식당'}
              </Text>
            </Block>
          </Block>
          <Text gray style={{marginVertical: 4}}>
            필리핀 인기 만점의 전신 아로마 마사지 제공하며, 필리핀 전통
          </Text>
          <Block row center style={{flex: 0}}>
            <AntDesign size={13} name="star" style={{color: colors.primary}} />
            <Text style={{marginLeft: 5}}>
              {`3 · 리뷰 ${convertComma(123)}`}
            </Text>
            <Text style={{marginLeft: 5}}>{'· 저장 ' + convertComma(423)}</Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 110,
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
