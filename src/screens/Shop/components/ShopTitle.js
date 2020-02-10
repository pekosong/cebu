import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {Text} from 'app/src/components';
import {sizes, colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

import {AntDesign} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default HeaderSection = ({shop, HEIGHT}) => {
  const {name, tags, review, reviewCnt, likes, branch} = shop;
  return (
    <View style={[styles.shopTitle, {top: HEIGHT - 80}]}>
      <Text numberOfLines={1} h1 bold>
        {name}
        {branch && <Text h4>{'  ' + branch}</Text>}
      </Text>
      <Text primary bold style={{marginTop: 5}}>
        {tags.join(', ')}
      </Text>
      <View style={styles.descContainer}>
        <AntDesign size={20} color={colors.primary} name="star" />
        <Text h3 bold style={{marginLeft: 5}}>
          {review}
        </Text>
      </View>
      <Text>{'리뷰 ' + convertComma(reviewCnt) + ' · ' + '저장 ' + likes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shopTitle: {
    position: 'absolute',
    width: width - 60,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: sizes.padding * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 11000,
  },
  descContainer: {marginVertical: 5, flexDirection: 'row'},
});
