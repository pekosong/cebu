import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LoginModal from './LoginModal';

import {colors} from 'app/src/styles';
import {AntDesign} from '@expo/vector-icons';

import {updateShop, getShop} from 'app/src/api/shop';
import {useSelector, useDispatch} from 'react-redux';
import allActions from 'app/src/redux/actions';

import Modal from 'react-native-modal';

export default Favorite = props => {
  const {shop, style, navigation} = props;
  const [showModal, setShowModal] = useState(false);

  const {loggedIn, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  handleShopFavorite = async shop => {
    const oldfavorites = user.myfavorites.map(e => e.id);
    const newShop = {
      id: shop.id,
      name: shop.name,
      src: shop.preview,
    };
    const currentShop = await getShop(shop.id);
    const likes = currentShop.data().likes;
    let newfavorites = user.myfavorites;
    if (oldfavorites.includes(shop.id)) {
      const idx = user.myfavorites.map(e => e.id).indexOf(shop.id);
      newfavorites.splice(idx, 1);
      const shopLikes = {id: shop.id, likes: likes > 0 ? likes - 1 : 0};
      updateShop(shopLikes);
    } else {
      newfavorites.push(newShop);
      const shopLikes = {id: shop.id, likes: likes + 1};
      updateShop(shopLikes);
    }
    const newUser = {...user, myfavorites: newfavorites};
    dispatch(allActions.userActions.updateUser(newUser));
  };

  return (
    <TouchableOpacity
      onPress={() => (loggedIn ? handleShopFavorite(shop) : setShowModal(true))}
      style={{position: 'absolute', top: 10, right: 10, zIndex: 10, ...style}}>
      <AntDesign
        size={25}
        color={
          user.myfavorites.map(e => e.id).includes(shop.id)
            ? 'red'
            : colors.white
        }
        name={
          user.myfavorites.map(e => e.id).includes(shop.id) ? 'heart' : 'hearto'
        }
        style={{
          margin: 2,
          textShadowColor: colors.red,
          textShadowOffset: {width: 0.5, height: 1},
          textShadowRadius: 1,
        }}
      />
      <Modal
        backdropOpacity={0.2}
        animationInTiming={200}
        useNativeDriver={true}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}>
        <LoginModal
          text="로그인이 필요합니다"
          subText="로그인 후 나의 저장소에 저장하세요"
          setShowModal={setShowModal}
          navigation={navigation}></LoginModal>
      </Modal>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({});
