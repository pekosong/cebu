import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  View,
} from 'react-native';
import {StatusBar} from 'react-native';
import {LoginModal} from 'app/src/components';
import {fonts, style, sizes} from 'app/src/styles';

import {updateShop} from 'app/src/api/shop';

import {useSelector, useDispatch} from 'react-redux';
import allActions from 'app/src/redux/actions';

import Modal from 'react-native-modal';
import {Ionicons, AntDesign} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

const ChatIcon = ({handlePress, fadeAnim}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{marginHorizontal: 14, marginTop: 2}}>
      <Animated.Text
        style={{
          color: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
            extrapolate: 'clamp',
            useNativeDriver: true,
          }),
        }}>
        <AntDesign size={26} name="message1" />
      </Animated.Text>
    </TouchableOpacity>
  );
};

const statusHeight = StatusBar.currentHeight;

const FavoriteIcon = ({handlePress, fadeAnim, onOff}) => {
  const color = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: onOff
      ? ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
      : ['rgb(255, 0, 0)', 'rgb(255, 0, 0)'],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.Text style={{color}}>
        <Ionicons size={30} name={onOff ? 'ios-heart-empty' : 'ios-heart'} />
      </Animated.Text>
    </TouchableOpacity>
  );
};

const AppBar = props => {
  const {navigation, shop, fadeAnim} = props;
  const [showModal, setShowModal] = useState(false);

  const {loggedIn, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  handleFavorite = async shop => {
    const oldfavorites = user.myfavorites.map(e => e.id);
    const newShop = {
      id: shop.id,
      name: shop.name,
      src: shop.preview,
    };
    let newfavorites = user.myfavorites;
    if (oldfavorites.includes(shop.id)) {
      const idx = user.myfavorites.map(e => e.id).indexOf(shop.id);
      newfavorites.splice(idx, 1);
      const shopLikes = {
        id: shop.id,
        likes: shop.likes > 0 ? shop.likes - 1 : 0,
      };
      updateShop(shopLikes);
    } else {
      newfavorites.push(newShop);
      const shopLikes = {id: shop.id, likes: shop.likes + 1};
      updateShop(shopLikes);
    }
    const newUser = {...user, newfavorites};
    dispatch(allActions.userActions.updateUser(newUser));
  };

  const backgroundColor = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)'],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  const color = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <Animated.View
      style={{
        ...style.header,
        ...styles.header,
        backgroundColor,
      }}>
      <TouchableOpacity onPressIn={() => navigation.goBack()}>
        <Animated.Text style={{color}}>
          <Ionicons size={30} name="ios-arrow-back" />
        </Animated.Text>
      </TouchableOpacity>
      <Animated.Text style={[styles.font, {opacity: fadeAnim}]}>
        {shop.name}
      </Animated.Text>
      <View>
        {/* <ChatIcon
          handlePress={() =>
            navigation.navigate('Chat', {
              email: user.email,
              shopId: shop.id,
              shopName: shop.name,
            })
          }
          fadeAnim={fadeAnim}
        /> */}
        <FavoriteIcon
          handlePress={() =>
            loggedIn ? handleFavorite(shop) : setShowModal(true)
          }
          fadeAnim={fadeAnim}
          onOff={user.myfavorites.map(e => e.id).indexOf(shop.id) == -1}
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
      </View>
    </Animated.View>
  );
};

AppBar.defaultProps = {};

AppBar.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  font: {
    fontWeight: 'bold',
    fontSize: fonts.h3,
    marginLeft: 12,
  },
  header: {
    height: 85,
    width: width,
    paddingTop: Platform.OS === 'ios' ? sizes.padding * 2.3 : statusHeight,
    paddingHorizontal: sizes.padding,
    zIndex: 100,
    position: 'absolute',
    top: 0,
  },
});

export default AppBar;
