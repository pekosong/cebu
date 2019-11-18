import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

import Block from './Block';
import Text from './Text';

const MAP = {
  Restaurant: '식당',
  Massage: '마사지',
  Nail: '네일',
  Activity: '액티비티',
};

export default CardCategory = props => {
  const {item, navigation} = props;

  return (
    <TouchableWithoutFeedback
      key={item.name}
      onPress={() =>
        navigation.navigate('Category', {
          category: item.id,
        })
      }>
      <Block style={[styles.categoryContainer, styles.shadow]}>
        <Block
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            style={{
              width: '100%',
              resizeMode: 'cover',
              height: 85,
            }}
            source={item.src}></Image>

          <Text black style={{padding: 12}}>
            {MAP[item.id]}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 0,
    borderRadius: 10,
    width: 130,
    height: 130,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
