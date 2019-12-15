import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {colors} from 'app/src/styles';

export default CardMenu = props => {
  const {item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.container}>
        <Block style={{marginRight: 10}}>
          <Text h4 style={{fontWeight: 800}}>
            {item.name}
          </Text>
          <Text h3 style={{marginVertical: 6}}>
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
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray2,
  },
  imageStyle: {
    borderRadius: 5,
    width: 110,
    height: 110,
    resizeMode: 'cover',
  },
});
