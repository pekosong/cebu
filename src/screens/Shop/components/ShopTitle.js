import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Block, Text} from 'app/src/components';
import {AntDesign} from '@expo/vector-icons';
import {sizes, colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

const {width} = Dimensions.get('window');

export default HeaderSection = props => {
  const {shop} = props;

  return (
    <Block style={styles.shopTitle}>
      <Block middle center>
        <Text h1 bold>
          {shop.name}
        </Text>
        <Text>{shop.tags.join(', ')}</Text>
        <Block left row center>
          <AntDesign size={20} color={colors.primary} name="heart"></AntDesign>
          <Text h3 bold style={{marginLeft: 5}}>
            {shop.review}
          </Text>
        </Block>
        <Text>
          {'리뷰 ' +
            convertComma(shop.reviewCnt) +
            ' | ' +
            '저장 ' +
            shop.likes}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  shopTitle: {
    top: -110,
    position: 'absolute',
    height: 140,
    width: width - 60,
    backgroundColor: 'white',
    marginHorizontal: 30,
    paddingVertical: sizes.padding * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 110,
  },
});
