import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {theme} from '../constants';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite} from '../redux/action';

export default Favorite = props => {
  const {shop} = props;
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

  handleFavorite = async shop => {
    oldfavorites = user.myfavorites.map(e => e.id);
    newShop = {
      id: shop.id,
      name: shop.name,
      src: shop.preview,
    };
    let newfavorites = user.myfavorites;
    if (oldfavorites.includes(shop.id)) {
      const idx = user.myfavorites.map(e => e.id).indexOf(shop.id);
      newfavorites.splice(idx, 1);
    } else {
      newfavorites.push(newShop);
    }
    dispatch(updateFavorite(newfavorites));
  };

  return (
    <TouchableOpacity
      onPress={() => handleFavorite(shop)}
      style={{position: 'absolute', top: 10, right: 10, zIndex: 10}}>
      {isLoaded ? (
        <Ionicons
          size={25}
          color={
            myfavorites.map(e => e.id).includes(shop.id)
              ? 'red'
              : theme.colors.white
          }
          name={
            myfavorites.map(e => e.id).includes(shop.id)
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
  );
};

export const styles = StyleSheet.create({});
