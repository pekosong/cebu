import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

import {Block, Text} from 'app/src/components';

export default CardCategory = props => {
  const {item, navigation, last} = props;
  return (
    <TouchableWithoutFeedback
      key={item.name}
      onPress={() =>
        navigation.navigate('Category', {
          category: item.id,
        })
      }>
      <Block
        style={[
          styles.categoryContainer,
          styles.shadow,
          {marginRight: last ? 45 : 5},
        ]}>
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
            {item.name}
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
