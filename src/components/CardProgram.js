import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {colors} from 'app/src/styles';

export default CardProgram = props => {
  const {item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.container}>
        <Block row space="between">
          <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
          <Block style={{marginLeft: 10}}>
            <Text h2>{item.name}</Text>
            <Text h4 gray style={{marginTop: 5, lineHeight: 20}}>
              {item.desc}
            </Text>
          </Block>
        </Block>
        <Block style={{marginTop: 10}}>
          <Text h3 bold style={{marginVertical: 10}}>
            가격 정보
          </Text>
          <Block style={{marginTop: 5}}>
            <Block
              row
              space="between"
              style={{
                marginBottom: 6,
                paddingBottom: 6,
              }}>
              <Text h3>{'120분'}</Text>
              <Text h3 bold>
                {'1,100P'}
              </Text>
            </Block>
            <Block
              row
              space="between"
              style={{
                marginBottom: 6,
                paddingBottom: 6,
              }}>
              <Text h3>{'90분'}</Text>
              <Text h3 bold>
                {'850P'}
              </Text>
            </Block>
            <Block
              row
              space="between"
              style={{
                marginBottom: 6,
                paddingBottom: 6,
              }}>
              <Text h3>{'60분'}</Text>
              <Text h3 bold>
                {'600P'}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingBottom: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray2,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.gray2,
    marginRight: 10,
  },
  imageStyle: {
    borderRadius: 3,
    width: 160,
    height: 90,
    resizeMode: 'cover',
  },
});
