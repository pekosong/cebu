import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import Block from './Block';
import Text from './Text';
import {theme} from '../constants';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite} from '../redux/action';

export default Card = props => {
  const {style, children, item, navigation} = props;
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
      const idx = newfavorites.indexOf(newShop);
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
      <Block style={styles.elementContainer}>
        <Block flex={2}>
          <Image style={styles.imageStyle} source={item.src}></Image>
          <TouchableOpacity
            onPress={() => handleHeart(item)}
            style={{position: 'absolute', top: 5, right: 10}}>
            {isLoaded ? (
              <Ionicons
                size={30}
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

          <Block
            style={{
              position: 'absolute',
              right: 5,
              bottom: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: 5,
            }}>
            <Text caption white>
              오늘
            </Text>
          </Block>
        </Block>
        <Block row flex={1}>
          <Block flex={3} middle>
            <Text style={{fontWeight: 'bold', color: theme.colors.accent}}>
              {item.tag}
            </Text>
            <Text h3 bold style={{marginVertical: 2}}>
              {item.shop}
            </Text>
            <Text caption>{item.desc}</Text>
          </Block>
          <Block flex={2} middle>
            {children}
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 3,
    width: 250,
    height: 250,
    marginRight: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
});
