import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  Fragment,
  useContext,
  memo,
} from 'react';
import {
  StyleSheet,
  Animated,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import firebase from 'app/src/constants/store';
import {Block, Divider} from 'app/src/components';

import {mocks} from 'app/src/constants';

import {sizes, colors, style} from 'app/src/styles';

import AppBar from './components/AppBar';
import HeaderSection from './components/HeaderSection';
import ShopTitle from './components/ShopTitle';
import TabSection from './components/TabSection';

import ReservationSection from './components/ReservationSection';
import BottomSection from './components/BottomSection';
import RecommendSection from './components/RecommendSection';

import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {watchUserData} from 'app/src/redux/action';

import {observer} from 'mobx-react-lite';
import {CounterStoreContext} from '../../store/test';

export default ShopScreen = observer(props => {
  const {navigation} = props;
  const counterStore = useContext(CounterStoreContext);
  counterStore.refs.song = createRef(null);

  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});

  const shopScroll = createRef(null);

  const dispatch = useDispatch();
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
    <Block style={{position: 'relative'}}>
      <AppBar
        navigation={navigation}
        user={user}
        shop={shop}
        fadeAnim={fadeAnim}></AppBar>
      <HeaderSection
        top={animatedScrollYValue}
        shop={shop}
        yAnim={yAnim}></HeaderSection>
      <Animated.ScrollView
        ref={ref => {
          shopScroll.current = ref;
        }}
        showsVerticalScrollIndicator={false}
        style={{
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
        <ShopTitle shop={shop}></ShopTitle>
        <Animated.View
          style={{
            marginTop: 360,
            backgroundColor: colors.white,
          }}>
          <TabSection shop={shop} user={user}></TabSection>
          <Fragment>
            <Divider></Divider>
            <RecommendSection
              navigation={navigation}
              shop={shop}></RecommendSection>
          </Fragment>
        </Animated.View>
      </Animated.ScrollView>
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
