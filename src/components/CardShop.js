import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, View} from 'react-native';

import Block from './Block';
import Text from './Text';
import Favorite from './Favorite';
import {colors, sizes} from 'app/src/styles';
import {convertComma} from 'app/src/utils';
import {AntDesign} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default CardShop = props => {
  const {shop, navigation, isActivity} = props;
  const {
    name,
    preview,
    review,
    reviews,
    likes,
    korean,
    pickup,
    baby,
    tags,
    reviewCnt,
  } = shop;

  renderTag = text => {
    return (
      <View
        style={{
          height: 20,
          width: 43,
          backgroundColor: colors.black,
          borderRadius: 10,
          marginTop: 2,
          marginRight: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text center white style={{fontSize: 9}}>
          {text}
        </Text>
      </View>
    );
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Shop', {
          shopId: isActivity ? null : shop.id,
        });
      }}>
      <Block style={styles.categories}>
        <CachedImage uri={preview} style={styles.image} />
        <Block style={styles.overlap}></Block>
        <Favorite shop={shop}></Favorite>
        <Block
          style={{
            height: 80,
          }}>
          <Block style={styles.top}>
            <Text h3 bold>
              {name}
            </Text>
            <Text h5 style={{marginLeft: 10}}>
              {tags.join(', ')}
            </Text>
          </Block>
          <Block style={styles.bottom}>
            <AntDesign size={13} name="star" style={{color: colors.primary}} />
            <Text style={{marginLeft: 5}}>
              {`${review} · 리뷰 ${convertComma(reviewCnt)}`}
            </Text>
            <Text style={{marginLeft: 5}}>
              {'· 저장 ' + convertComma(likes)}
            </Text>
          </Block>
          <Block row>
            {korean && renderTag('한국어')}
            {pickup && renderTag('픽업')}
            {baby && renderTag('애기')}
          </Block>
          <Block style={styles.corner}></Block>
        </Block>
        <Block
          style={{
            position: 'absolute',
            right: 10,
            bottom: 20,
          }}>
          <Text h4 bold>
            0km ~ 5km
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  categories: {
    marginHorizontal: sizes.padding,
    marginBottom: sizes.base * 1.6,
  },
  image: {
    height: 165,
    width: width - sizes.padding * 2,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  overlap: {
    width: '100%',
    height: 165,
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 6,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  corner: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.accent,
    marginRight: 7,
  },
});
