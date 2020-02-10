import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import {Favorite, Text, CachedImage} from 'app/src/components';

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
      <View style={styles.imageContainer}>
        <CachedImage
          uri={
            typeof item.preview === 'string' ? item.preview : item.preview[0]
          }
          style={styles.imageStyle}></CachedImage>
        <Favorite shop={item} navigation={navigation}></Favorite>
        <View style={styles.overlap}></View>
      </View>
      <View style={styles.textContainer}>
        <Text bold numberOfLines={1} size={14}>
          {item.name + ' '}
          <Text gray caption>
            {item.tags[0]}
          </Text>
        </Text>
        <View style={styles.descContainer}>
          <AntDesign size={13} name="star" style={{color: colors.primary}} />
          <Text size={13} darkgray style={{marginLeft: 3}}>
            {`${item.review} · 리뷰 ${item.reviewCnt &&
              convertComma(item.reviewCnt)}`}
          </Text>
        </View>
      </View>
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
  imageContainer: {
    flex: 0,
    height: '65%',
    position: 'relative',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
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
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  descContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
});
