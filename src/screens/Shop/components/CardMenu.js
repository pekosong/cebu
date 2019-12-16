import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {colors} from 'app/src/styles';

export default CardMenu = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.container}>
        <Block style={{marginRight: 10}}>
          <Text h3 bold>
            {item.name}
          </Text>
          <Text gray style={{marginVertical: 10, lineHeight: 20}}>
            {item.desc}
          </Text>
          <Text h3>{item.price}</Text>
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
    height: 90,
    resizeMode: 'cover',
  },
});