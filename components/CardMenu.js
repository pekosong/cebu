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
        <Block style={{marginRight: 10}}>
          <Text h3>{item.name}</Text>
          <Text h3 bold style={{marginVertical: 5}}>
            {item.price}
          </Text>
          <Text>{item.desc}</Text>
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
