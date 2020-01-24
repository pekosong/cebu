import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {convertComma} from 'app/src/utils';

export default CardMenu = ({item, isKorean}) => {
  return (
    <Block row space="between">
      <Block style={{marginRight: 20}}>
        <Text h3 bold>
          {item.name ? item.name : '메뉴명'}
        </Text>
        <Text
          size={12}
          gray
          style={{marginTop: 6, lineHeight: 16}}
          numberOfLines={2}>
          {item.desc ? item.desc : '메뉴설명'}
        </Text>
        {isKorean ? (
          <Block row center>
            <Text h3>{`${convertComma(item.price * 22)} `}</Text>
            <Text darkgray style={{marginTop: 3}}>
              원
            </Text>
          </Block>
        ) : (
          <Block row center>
            <Text h3>{`${convertComma(item.price)} `}</Text>
            <Text darkgray style={{marginTop: 3}}>
              페소
            </Text>
          </Block>
        )}
      </Block>
      <CachedImage
        style={styles.imageStyle}
        uri={
          item.src
            ? item.src
            : 'https://t1.daumcdn.net/cfile/tistory/2142033952F13BAB0E'
        }></CachedImage>
    </Block>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 2,
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
});