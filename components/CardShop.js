import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import Block from './Block';
import Text from './Text';
import Favorite from './Favorite';
import {colors, sizes} from 'app/styles';
import {convertComma} from 'app/utils';
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
  } = shop;

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
            height: 55,
          }}>
          <Block style={styles.top}>
            <Text h3 bold>
              {name}
            </Text>
            <Text h4>{tags.join(', ')}</Text>
          </Block>
          <Block style={styles.bottom}>
            <AntDesign size={18} name="star" style={{color: colors.accent}} />
            <Text h4 style={{marginLeft: 5}}>
              {review}
            </Text>
            <AntDesign
              size={18}
              name="heart"
              style={{color: colors.accent, marginLeft: 10}}
            />
            <Text h4 style={{marginLeft: 5}}>
              {convertComma(likes)}
            </Text>
            <AntDesign
              size={18}
              name="like1"
              style={{color: colors.accent, marginLeft: 10}}
            />
            <Text h4 style={{marginLeft: 5}}>
              {reviews.length}
            </Text>
          </Block>
          <Block style={styles.corner}>
            {korean ? (
              <Block style={styles.icon}>
                <AntDesign
                  size={18}
                  name="customerservice"
                  style={{color: 'white'}}
                />
              </Block>
            ) : null}
            {pickup ? (
              <Block style={styles.icon}>
                <AntDesign size={18} name="car" style={{color: 'white'}} />
              </Block>
            ) : null}
            {baby ? (
              <Block style={{...styles.icon, marginRight: 0}}>
                <AntDesign size={18} name="smileo" style={{color: 'white'}} />
              </Block>
            ) : null}
          </Block>
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
    height: 170,
    width: width - sizes.padding * 2,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  overlap: {
    width: '100%',
    height: 170,
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 5,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
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
