import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {convertComma} from 'app/src/utils';

export default CardMenu = ({item, isKorean}) => {
  return (
    <Block row space="between">
      <Block style={{marginRight: 10}}>
        <Text h3 bold>
          {item.name ? item.name : '메뉴명'}
        </Text>
        {item.desc !== '' && (
          <Text gray style={{marginTop: 6, lineHeight: 16}} numberOfLines={3}>
            {item.desc ? item.desc : '메뉴설명'}
          </Text>
        )}
        <Block row center style={{marginTop: 5}}>
          <Text h2>{`${convertComma(item.price * (isKorean ? 22 : 1))} `}</Text>
          <Text darkgray style={{marginTop: 3}}>
            {isKorean ? '원' : '페소'}
          </Text>
        </Block>
      </Block>
      {item.src !== '' ? (
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
      ) : (
        <Image
          style={styles.imageStyle}
          source={require('app/src/assets/images/placeholder/food.png')}></Image>
      )}
    </Block>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 3,
    width: 85,
    height: 85,
    resizeMode: 'cover',
  },
});
