import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {colors} from 'app/src/styles';

import {AntDesign} from '@expo/vector-icons';

export default CardMenu = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.container}>
        <Block style={{marginRight: 10}}>
          <Text h3 bold>
            {item.name}
          </Text>
          <Text h3 style={{marginVertical: 6, lineHeight: 20}}>
            {item.price}
          </Text>
          <Text gray>{item.desc}</Text>
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
    borderRadius: 2,
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
});
