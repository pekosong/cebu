import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import {Favorite, Block, Text, CachedImage} from 'app/src/components';

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
      style={[styles.container, isLast && {marginRight: sizes.padding * 2}]}>
      <Block
        style={{
          flex: 0,
          height: '65%',
          position: 'relative',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}>
        <CachedImage
          uri={
            typeof item.preview === 'string' ? item.preview : item.preview[1]
          }
          style={styles.imageStyle}></CachedImage>
        <Favorite
          shop={{
            id: item.id,
            name: item.name,
            preview: item.source,
          }}></Favorite>
        <Block style={styles.overlap}></Block>
      </Block>
      <Block
        middle
        style={{
          padding: 8,
          backgroundColor: colors.white,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        }}>
        <Text bold numberOfLines={1} size={14}>
          {item.name + ' '}
          <Text gray caption>
            {item.tags[0]}
          </Text>
        </Text>
        <Block row center style={{flex: 0, marginTop: 2}}>
          <AntDesign size={13} name="star" style={{color: colors.primary}} />
          <Text size={13} darkgray style={{marginLeft: 3}}>
            {`${item.review} · 리뷰 ${convertComma(item.reviewCnt)}`}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    marginRight: 6,
    marginVertical: 3,
    height: width / 2.1 - sizes.padding,
    width: width / 1.8 - sizes.padding,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 6,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  overlap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 3,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});
