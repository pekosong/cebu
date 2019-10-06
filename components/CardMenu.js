import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';

export default CardMenu = props => {
  const {style, item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block row space="between" style={{marginBottom: 10}}>
        <Block>
          <Text h3>{item.name}</Text>
          <Text h3 bold style={{marginVertical: 10}}>
            {item.price}
          </Text>
          <Text caption>{item.desc}</Text>
        </Block>
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 3,
  },
});
