import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {colors} from 'app/styles';

export default CardMenu = props => {
  const {item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.container}>
        <Block style={{marginRight: 10}}>
          <Text h3>{item.name}</Text>
          <Text h3 style={{marginVertical: 10}}>
            {item.price}
          </Text>
          <Text gray caption style={{lineHeight: 20}}>
            {item.desc}
          </Text>
        </Block>
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray2,
  },
  imageStyle: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
});
