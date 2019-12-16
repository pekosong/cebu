import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';

import {Block, Text} from 'app/src/components';
import {colors, sizes} from 'app/src/styles';

const cateSrc = {
  전체: require('app/src/assets/images/search/activity.jpg'),
  호핑: require('app/src/assets/images/search/hoping.jpg'),
  고래투어: require('app/src/assets/images/search/gorae.jpg'),
  시티투어: require('app/src/assets/images/search/city.jpg'),
  다이빙: require('app/src/assets/images/search/diving.jpg'),
  경비행기: require('app/src/assets/images/search/plane.jpg'),
  샌딩: require('app/src/assets/images/search/sanding.jpg'),
};

export default CardShop = ({isActive, handleSongTab, tab}) => {
  return (
    <TouchableOpacity
      key={`tab-${tab}`}
      onPress={() => handleSongTab(tab)}
      style={styles.tab}>
      <Block style={{flex: 0, width: 60, height: 60}}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 30,
          }}
          source={cateSrc[tab]}></Image>
      </Block>
      <Text
        center
        size={16}
        style={{
          marginTop: 6,
          color: isActive ? colors.black : colors.gray,
        }}>
        {tab}
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
