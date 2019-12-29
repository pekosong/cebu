import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import {Favorite, Block, Text} from 'app/src/components';

import {sizes, colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';
import {AntDesign} from '@expo/vector-icons';
const {width} = Dimensions.get('window');

export default CardRect = props => {
  const {item, navigation, isLast} = props;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('Shop', {
          shopId: item.id,
        })
      }>
      <Block
        style={[styles.container, isLast && {marginRight: sizes.padding * 1}]}>
        <Block flex={2} style={{position: 'relative'}}>
          <Image style={styles.imageStyle} source={{uri: item.preview}}></Image>
          <Favorite
            shop={{
              id: item.id,
              name: item.name,
              preview: item.source,
            }}></Favorite>
          <Block style={styles.overlap}></Block>
        </Block>
        <Block flex={1} style={{marginTop: 6}}>
          <Text bold numberOfLines={1} size={14}>
            {item.name + '  '}
            <Text primary caption style={{marginBottom: 5}}>
              {item.tags[0]}
            </Text>
          </Text>
          <Block row center>
            <AntDesign size={13} name="star" style={{color: colors.primary}} />
            <Text size={13} darkgray style={{marginLeft: 5}}>
              {`${item.review} · 리뷰 ${convertComma(item.reviewCnt)}`}
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    paddingRight: 10,
    height: width / 2.4 - sizes.padding,
    width: width / 2 - sizes.padding,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  overlap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 3,
  },
});
