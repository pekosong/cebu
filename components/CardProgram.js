import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {colors} from 'app/styles';

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
          <Text h4 bold>
            가격 정보
          </Text>
          <Block row style={{marginTop: 5}}>
            <Block style={styles.rightBorder}>
              <Text accent h4>
                {'120분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'1,100P'}
              </Text>
            </Block>
            <Block style={styles.rightBorder}>
              <Text accent h4>
                {'90분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'850P'}
              </Text>
            </Block>
            <Block style={styles.rightBorder}>
              <Text accent h4>
                {'60분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'600P'}
              </Text>
            </Block>
            <Block>
              <Text accent h4>
                {'40분'}
              </Text>
              <Text h3 style={{marginTop: 3}}>
                {'400P'}
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
    marginBottom: 15,
    paddingBottom: 15,
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
