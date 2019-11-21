import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  Fragment,
  useContext,
} from 'react';
import {
  StyleSheet,
  Animated,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import useForceUpdate from 'use-force-update';

import firebase from 'app/src/constants/store';
import {Block, Divider} from 'app/src/components';

import {mocks} from 'app/src/constants';

import {sizes, colors, style} from 'app/src/styles';

import AppBar from './components/AppBar';
import HeaderSection from './components/HeaderSection';
import TabBarSection from './components/TabBarSection';

import ReservationSection from './components/ReservationSection';
import MenuSection from './components/MenuSection';
import ProgramSection from './components/ProgramSection';

import ReviewSection from './components/ReviewSection';
import ShopInfoSection from './components/ShopInfoSection';
import BottomSection from './components/BottomSection';
import RecommendSection from './components/RecommendSection';

import {useSelector, shallowEqual} from 'react-redux';

import {observer} from 'mobx-react-lite';
import {CounterStoreContext} from '../../store/test';

export default ShopScreen = observer(props => {
  const counterStore = useContext(CounterStoreContext);
  const forceUpdate = useForceUpdate();
  counterStore.refs.song = createRef(null);

  const {navigation} = props;

  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});
  const [show, setShow] = useState('menu');

  const shopScroll = createRef(null);

  const user = useSelector(state => state.user, shallowEqual);

  const [isLoaded, setIsLoaded] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [yAnim] = useState(new Animated.Value(0));
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let shopId = navigation.getParam('shopId');
    let unsubscribe;
    if (shopId) {
      unsubscribe = firebase
        .firestore()
        .collection('shops')
        .doc(shopId)
        .onSnapshot(doc => {
          setShop(doc.data());
          setIsLoaded(true);
        });
      setTodo(navigation.getParam('todo'));
    } else {
      setShop(mocks.ActivityList[0]);
      setIsLoaded(true);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  myView = tab => {
    if (shop.category != 'Activity' && tab === 'menu') {
      return <MenuSection shop={shop}></MenuSection>;
    } else if (shop.category == 'Activity' && tab === 'menu') {
      return <ProgramSection></ProgramSection>;
    } else if (tab === 'review') {
      return (
        <ReviewSection
          user={user}
          shop={shop}
          navigation={navigation}></ReviewSection>
      );
    } else {
      return <ShopInfoSection shop={shop}></ShopInfoSection>;
    }
  };
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
        shop={shop}
        yAnim={yAnim}></HeaderSection>
      <TabBarSection
        category={shop.category}
        top={animatedScrollYValue}
        setShow={setShow}></TabBarSection>
      <ScrollView
        ref={ref => {
          shopScroll.current = ref;
        }}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginBottom: 20,
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
            marginTop: 360,
            paddingTop: animatedScrollYValue.interpolate({
              inputRange: [0, 210],
              outputRange: [70, 0],
              extrapolate: 'clamp',
              useNativeDriver: true,
            }),
            paddingHorizontal: sizes.padding,
            backgroundColor: colors.white,
          }}>
          <ReservationSection todo={todo} shop={shop}></ReservationSection>
          {shop.category != 'Activity' && show === 'menu' ? (
            <MenuSection shop={shop}></MenuSection>
          ) : shop.category == 'Activity' && show === 'menu' ? (
            <ProgramSection></ProgramSection>
          ) : show === 'review' ? (
            <ReviewSection
              user={user}
              shop={shop}
              navigation={navigation}></ReviewSection>
          ) : show === 'info' ? (
            <ShopInfoSection shop={shop}></ShopInfoSection>
          ) : null}

          <Fragment>
            <Divider></Divider>
            <RecommendSection
              navigation={navigation}
              shop={shop}></RecommendSection>
          </Fragment>
        </Animated.View>
      </ScrollView>
      <BottomSection
        navigation={navigation}
        shop={shop}
        user={user}></BottomSection>
    </Block>
  ) : (
    <Block style={style.full}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </Block>
  );
});

ShopScreen.defaultProps = {};

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
