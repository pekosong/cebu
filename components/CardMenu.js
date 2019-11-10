import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {theme} from '../constants';

export default CardMenu = props => {
  const {style, item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block
        row
        space="between"
        style={{
          marginBottom: 15,
          paddingBottom: 15,
          borderBottomWidth: 0.2,
          borderBottomColor: theme.colors.gray2,
        }}>
        <Block style={{marginRight: 10}}>
          <Text h3>{item.name}</Text>
          <Text h3 bold style={{marginTop: 5, marginBottom: 10}}>
            {item.price}
          </Text>
          <Text gray caption>
            {item.desc}
          </Text>
        </Block>
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 3,
  },
});
