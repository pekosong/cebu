import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import Block from './Block';
import Text from './Text';
import {theme} from '../constants';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite} from '../redux/action';
import StarRating from 'react-native-star-rating';

const {height, width} = Dimensions.get('window');

export default Card = props => {
  const {style, item, navigation, idx} = props;
  const [myfavorites, setMyfavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.myfavorites) {
      setMyfavorites(user.myfavorites);
      setIsLoaded(true);
    }
  }, [user]);

  handleHeart = async shop => {
    oldfavorites = user.myfavorites.map(e => e.id);
    newShop = {
      id: shop.shopCode,
      name: shop.shop,
      src: shop.url,
    };
    let newfavorites = user.myfavorites;
    if (oldfavorites.includes(shop.shopCode)) {
      const idx = user.myfavorites.map(e => e.id).indexOf(shop.shopCode);
      newfavorites.splice(idx, 1);
    } else {
      newfavorites.push(newShop);
    }
    dispatch(updateFavorite(newfavorites));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Shop', {
          shopCode: item.shopCode,
        });
      }}>
      <Block
        style={[
          styles.elementContainer,
          {paddingRight: idx % 2 == 0 ? 16 : 0},
          {marginBottom: idx == 1 || idx == 0 ? 30 : 0},
          {
            width:
              idx % 2 == 0
                ? width / 2 - theme.sizes.padding + 8
                : width / 2 - theme.sizes.padding - 8,
          },
        ]}>
        <Block flex={2}>
          <Image style={styles.imageStyle} source={item.src}></Image>
          <TouchableOpacity
            onPress={() => handleHeart(item)}
            style={{position: 'absolute', top: 5, right: 10}}>
            {isLoaded ? (
              <Ionicons
                size={25}
                color={
                  myfavorites.map(e => e.id).includes(item.shopCode)
                    ? 'red'
                    : theme.colors.white
                }
                name={
                  myfavorites.map(e => e.id).includes(item.shopCode)
                    ? 'ios-heart'
                    : 'ios-heart-empty'
                }
                style={{
                  textShadowColor: theme.colors.red,
                  textShadowOffset: {width: 0.5, height: 1},
                  textShadowRadius: 1,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </Block>
        <Block style={{marginTop: 6}}>
          <Block flex={3} middle>
            <Text caption style={{color: theme.colors.primary}}>
              {item.tag}
            </Text>
            <Text bold style={{marginBottom: 5}}>
              {item.shop}
            </Text>
            <Block center row>
              <Text accent style={{paddingBottom: 3, marginRight: 5}}>
                {item.star}
              </Text>

              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.star}
                starSize={12}
                fullStarColor={theme.colors.accent}
                containerStyle={{width: 12, marginTop: 3}}
              />
              <Text accent style={{marginLeft: 50}}>
                123
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 5,
    height: width / 2 - theme.sizes.padding,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
});
