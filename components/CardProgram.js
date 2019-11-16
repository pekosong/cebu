import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {theme} from '../styles';

export default CardProgram = props => {
  const {style, item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block
        style={{
          marginBottom: 15,
          paddingBottom: 15,
          borderBottomWidth: 0.2,
          borderBottomColor: theme.colors.gray2,
        }}>
        <Block row space="between">
          <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
          <Block style={{marginLeft: 10}}>
            <Text h2>{item.name}</Text>
            <Text h3 gray style={{marginTop: 5, lineHeight: 20}}>
              {item.desc}
            </Text>
          </Block>
        </Block>
        <Block style={{marginTop: 10}}>
          <Text h4 bold>
            가격 정보
          </Text>
          <Block row style={{marginTop: 5}}>
            <Block
              style={{
                borderRightWidth: 1,
                borderRightColor: theme.colors.gray2,
                marginRight: 10,
              }}>
              <Text accent h4>
                {'120분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'1,100페소'}
              </Text>
            </Block>
            <Block
              style={{
                borderRightWidth: 1,
                borderRightColor: theme.colors.gray2,
                marginRight: 10,
              }}>
              <Text accent h4>
                {'90분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'850페소'}
              </Text>
            </Block>
            <Block
              style={{
                borderRightWidth: 1,
                borderRightColor: theme.colors.gray2,
                marginRight: 10,
              }}>
              <Text accent h4>
                {'60분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'600페소'}
              </Text>
            </Block>
            <Block>
              <Text accent h4>
                {'40분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'400페소'}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 3,
    width: 160,
    height: 90,
    resizeMode: 'cover',
  },
});
