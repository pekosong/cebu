import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator,
} from 'react-native';

import firebase from '../../constants/store';

import {Block, Divider, FullImageSlider} from '../../components';
import {theme} from '../../constants';

import AppBar from './AppBar';
import HeaderSection from './HeaderSection';

import ReservationSection from './ReservationSection';
import MenuSection from './MenuSection';
import ReviewSection from './ReviewSection';
import ShopInfoSection from './ShopInfoSection';
import BottomSection from './BottomSection';
import RecommedSection from './RecommedSection';

import {useSelector, shallowEqual} from 'react-redux';

export default function ShopScreen(props) {
  const {navigation} = props;

  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});

  const user = useSelector(state => state.user, shallowEqual);

  const [isLoaded, setIsLoaded] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [yAnim] = useState(new Animated.Value(0));
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let shopId = navigation.getParam('shopId');
    let unsubscribe = firebase
      .firestore()
      .collection('shops')
      .doc(shopId)
      .onSnapshot(doc => {
        setShop(doc.data());
        setIsLoaded(true);
      });

    setTodo(navigation.getParam('todo'));
    return () => {
      unsubscribe();
    };
  }, []);

  handleScrollByY = e => {
    if (e.nativeEvent.contentOffset.y > 130) {
      Animated.timing(yAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 130) {
      Animated.timing(yAnim, {
        toValue: 0,
        duration: 80,
      }).start();
    }

    if (e.nativeEvent.contentOffset.y > 80) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 80) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 25,
      }).start();
    }
  };

  return isLoaded ? (
    <Block>
      <AppBar
        navigation={navigation}
        user={user}
        shop={shop}
        fadeAnim={fadeAnim}></AppBar>
      <HeaderSection
        top={animatedScrollYValue}
        source={shop.source}
        shop={shop}
        yAnim={yAnim}></HeaderSection>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginBottom: 55,
          zIndex: 10,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedScrollYValue}}}],
          {
            listener: event => {
              handleScrollByY(event);
            },
          },
        )}
        scrollEventThrottle={360}>
        <Animated.View
          style={{
            marginTop: 330,
            paddingHorizontal: theme.sizes.padding,
            backgroundColor: 'white',
          }}>
          <Divider style={{marginTop: 10}} />
          <ReservationSection todo={todo} shop={shop}></ReservationSection>
          <MenuSection menus={shop.menus}></MenuSection>
          <Divider />
          <ReviewSection
            user={user}
            shop={shop}
            navigation={navigation}></ReviewSection>
          <Divider />
          <ShopInfoSection shop={shop}></ShopInfoSection>
          <Divider
            style={{
              marginTop: 20,
            }}></Divider>
          <RecommedSection shop={shop}></RecommedSection>
        </Animated.View>
      </Animated.ScrollView>
      <BottomSection
        navigation={navigation}
        shop={shop}
        todo={todo}
        user={user}></BottomSection>
    </Block>
  ) : (
    <Block style={styles.full}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </Block>
  );
}

ShopScreen.defaultProps = {};

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
});
