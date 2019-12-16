import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import Block from './Block';
import Text from './Text';

import {colors, sizes} from 'app/src/styles';

export default CategoryTap = ({isActive, handleTab, image, tabName, tab}) => {
  return (
    <TouchableOpacity onPress={() => handleTab(tab)} style={styles.tab}>
      <Block style={{flex: 0, width: 60, height: 60}}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 30,
          }}
          source={image}></Image>
      </Block>
      <Text
        center
        size={16}
        style={{
          marginTop: 6,
          color: isActive ? colors.black : colors.gray,
        }}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  tab: {
    marginRight: sizes.base * 1.2,
    paddingBottom: sizes.base * 0.8,
  },
  active: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 3,
  },
});
