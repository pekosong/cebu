import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import Block from './Block';
import Text from './Text';
import Favorite from './Favorite';
import {theme} from '../constants';
import StarRating from 'react-native-star-rating';
import {Ionicons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default CardShop = props => {
  const {style, shop, navigation} = props;
  const {
    name,
    preview,
    review,
    reviews,
    category,
    likes,
    korean,
    pickup,
    baby,
    tags,
  } = shop;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Shop', {
          shopId: shop.id,
        })
      }>
      <Block style={styles.categories}>
        <CachedImage
          uri={preview}
          style={{
            height: 200,
            width: width - theme.sizes.padding * 2,
            borderRadius: 5,
            resizeMode: 'cover',
          }}
        />
        <Block
          style={{
            width: '100%',
            height: 200,
            position: 'absolute',
            borderRadius: 5,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}></Block>
        <Favorite shop={shop}></Favorite>
        <Block row space="between" style={{marginTop: 10}}>
          <Text>{category}</Text>
          <Text h4>{tags.join(', ')}</Text>
        </Block>
        <Text h2 bold style={{marginVertical: 5}}>
          {name}
        </Text>
        <Block row center>
          <Ionicons
            size={20}
            name="ios-star"
            style={{color: theme.colors.accent}}
          />
          <Text h4 style={{marginLeft: 5}}>
            {review}
          </Text>
          <Ionicons
            size={20}
            name="ios-heart"
            style={{color: theme.colors.accent, marginLeft: 10}}
          />
          <Text h4 style={{marginLeft: 5}}>
            {likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
          <Ionicons
            size={20}
            name="ios-today"
            style={{color: theme.colors.accent, marginLeft: 10}}
          />
          <Text h4 style={{marginLeft: 5}}>
            {reviews.length}
          </Text>
        </Block>
        <Block row style={{position: 'absolute', bottom: 0, right: 0}}>
          {korean ? (
            <Block
              center
              middle
              style={{
                flex: 0,
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: theme.colors.accent,
                marginRight: 7,
              }}>
              <Text white bold>
                한
              </Text>
            </Block>
          ) : null}
          {pickup ? (
            <Block
              center
              middle
              style={{
                flex: 0,
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: theme.colors.accent,
                marginRight: 7,
              }}>
              <Ionicons size={20} name="ios-car" style={{color: 'white'}} />
            </Block>
          ) : null}
          {baby ? (
            <Block
              center
              middle
              style={{
                flex: 0,
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: theme.colors.accent,
              }}>
              <Ionicons size={20} name="ios-hand" style={{color: 'white'}} />
            </Block>
          ) : null}
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  categories: {
    marginHorizontal: theme.sizes.padding,
    marginBottom: theme.sizes.base * 2,
  },
});
