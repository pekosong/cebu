import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

export default CardMenu = ({item, isKorean}) => {
  return (
    <Block style={styles.container}>
      <Block style={{marginRight: 20}}>
        <Text h3 bold>
          {item.name}
        </Text>
        {item.desc != '' && (
          <Text
            size={12}
            darkgray
            style={{marginTop: 6, lineHeight: 16}}
            numberOfLines={2}>
            {item.desc}
          </Text>
        )}
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
      <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
    </Block>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray2,
  },
  imageStyle: {
    borderRadius: 2,
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});
