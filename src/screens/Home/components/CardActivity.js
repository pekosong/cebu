import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import {Favorite, Block, Text} from 'app/src/components';
import {LinearGradient} from 'expo-linear-gradient';

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
      }
      style={[styles.container, isLast && {marginRight: sizes.padding * 1}]}>
      <Image style={styles.imageStyle} source={{uri: item.preview}}></Image>
      <Favorite
        shop={{
          id: item.id,
          name: item.name,
          preview: item.source,
        }}></Favorite>
      <LinearGradient
        locations={[0.2, 1.0]}
        colors={['transparent', '#111']}
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}></LinearGradient>
      <Block
        center
        style={{
          width: '100%',
          bottom: 10,
          position: 'absolute',
        }}>
        <Text white h4 bold style={{marginBottom: 10}}>
          {item.tags[0]}
        </Text>
        <Text white numberOfLines={1} size={14} style={{marginBottom: 5}}>
          {item.name + ' '}
        </Text>
        <Block row>
          <AntDesign size={13} name="star" style={{color: colors.primary}} />
          <Text size={13} white style={{marginLeft: 3}}>
            {`${item.review} · 리뷰 ${convertComma(item.reviewCnt)}`}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 3,
    marginRight: 6,
    height: width / 1.5 - sizes.padding,
    width: width / 2.3 - sizes.padding,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
    position: 'relative',
  },
  overlap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 3,
  },
});
