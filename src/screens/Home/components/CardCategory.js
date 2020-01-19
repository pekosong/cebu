import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';

import {Block, Text} from 'app/src/components';
import {sizes} from 'app/src/styles';

const {width} = Dimensions.get('window');

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
      <Block style={styles.categoryContainer}>
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
              height: 70,
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
    width: (width - sizes.padding - 20) / 3,
    height: 110,
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 6,
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
