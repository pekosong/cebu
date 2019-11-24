import React, {useContext} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons';

import {Block} from 'app/src/components';

import {sizes, colors, fonts} from 'app/src/styles';
import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {updateFavorite} from 'app/src/api/user';

const {width} = Dimensions.get('window');

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
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 2],
            extrapolate: 'clamp',
            useNativeDriver: true,
          }),
        },
        shadowOpacity: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.25],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
        shadowRadius: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 3.84],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
        elevation: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 2],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
      }}>
      <Block middle center row space="between">
        <Block>
          <TouchableOpacity
            onPressIn={() => {
              navigation.goBack();
            }}
            style={{
              height: 100,
              width: 100,
            }}>
            <Block center row>
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
            </Block>
          </TouchableOpacity>
        </Block>
        <Animated.Text
          style={{
            color: colors.black,
            fontWeight: 'bold',
            fontSize: fonts.h3,
            opacity: fadeAnim,
            marginRight: 30,
          }}>
          {shop.name}
        </Animated.Text>
        <Block middle row right style={{marginRight: 2}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chat', {
                email: user.email,
                shopId: shop.id,
                shopName: shop.name,
              })
            }
            style={{marginHorizontal: 10, marginTop: 2}}>
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

          <TouchableOpacity onPress={() => handleAddHeart(shop)}>
            <Animated.Text
              style={{
                color: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange:
                    user.myfavorites.map(e => e.id).indexOf(shop.id) == -1
                      ? ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
                      : ['rgb(255, 0, 0)', 'rgb(255, 0, 0)'],
                  extrapolate: 'clamp',
                  useNativeDriver: true,
                }),
              }}>
              <Ionicons
                size={30}
                name={
                  user.myfavorites.map(e => e.id).indexOf(shop.id) == -1
                    ? 'ios-heart-empty'
                    : 'ios-heart'
                }
              />
            </Animated.Text>
          </TouchableOpacity>
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
    paddingTop: sizes.padding * 1.5,
    height: 90,
    width: width,
    paddingHorizontal: sizes.padding,
    position: 'absolute',
    zIndex: 100,
  },
});

export default AppBar;
