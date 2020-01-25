import React, {useContext} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Animated} from 'react-native';

import {Block, Favorite} from 'app/src/components';
import {sizes, colors, fonts, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {updateFavorite} from 'app/src/api/user';

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

const FavoriteIcon = ({handlePress, fadeAnim, onOff}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.Text
        style={{
          color: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: onOff
              ? ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
              : ['rgb(255, 0, 0)', 'rgb(255, 0, 0)'],
            extrapolate: 'clamp',
            useNativeDriver: true,
          }),
        }}>
        <Ionicons size={30} name={onOff ? 'ios-heart-empty' : 'ios-heart'} />
      </Animated.Text>
    </TouchableOpacity>
  );
};

const AppBar = observer(props => {
  const {navigation, shop, fadeAnim} = props;
  const {user} = useContext(UserStoreContext);

  handleAddHeart = async shop => {
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
    updateFavorite(user.email, newfavorites);
  };

  return (
    <Animated.View
      style={{
        ...styles.header,
        backgroundColor: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)'],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
      }}>
      <Block center row>
        <TouchableOpacity
          onPressIn={() => {
            navigation.goBack();
          }}>
          <Animated.Text
            style={{
              color: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
                extrapolate: 'clamp',
                useNativeDriver: true,
              }),
            }}>
            <Ionicons size={30} name="ios-arrow-back" />
          </Animated.Text>
        </TouchableOpacity>
        <Animated.Text
          style={{
            color: colors.black,
            fontWeight: 'bold',
            fontSize: fonts.h3,
            opacity: fadeAnim,
            marginLeft: 12,
          }}>
          {shop.name}
        </Animated.Text>
        <Block row right>
          <ChatIcon
            handlePress={() =>
              navigation.navigate('Chat', {
                email: user.email,
                shopId: shop.id,
                shopName: shop.name,
              })
            }
            fadeAnim={fadeAnim}
          />
          <FavoriteIcon
            handlePress={() => handleAddHeart(shop)}
            fadeAnim={fadeAnim}
            onOff={user.myfavorites.map(e => e.id).indexOf(shop.id) == -1}
          />
        </Block>
      </Block>
    </Animated.View>
  );
});

AppBar.defaultProps = {};

AppBar.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  header: {
    paddingTop: sizes.padding * 1.8,
    height: 90,
    width: width,
    paddingHorizontal: sizes.padding,
    position: 'absolute',
    zIndex: 100,
  },
});

export default AppBar;
