import React, {useState, useEffect, useRef, createRef, useContext} from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';

import {Block, Text, Loader} from 'app/src/components';

import {sizes, colors} from 'app/src/styles';

import AppBar from './components/AppBar';
import Header from './components/Header';
import ShopTitle from './components/ShopTitle';
import FloatButton from './components/FloatButton';
import ExchangeButton from './components/ExchangeButton';

import ReservationSection from './components/ReservationSection';

import MenuSection from './components/MenuSection';
import MassageSection from './components/MassageSection';
import ProgramSection from './components/ProgramSection';
import PlaceSection from './components/PlaceSection';

import ReviewSection from './components/ReviewSection';
import ShopInfoSection from './components/ShopInfoSection';
import RecommendSection from './components/RecommendSection';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {streamShop} from 'app/src/api/shop';

const MENUS = ['Restaurant', 'Food'];

const MAPCAT = {
  1: '리뷰',
  2: '기본정보',
  3: '근처',
};

const SHOPCAT = {
  Restaurant: '메뉴',
  Food: '메뉴',
  Massage: '프로그램',
  Activity: '프로그램',
  Place: '정보',
};

const {width, height} = Dimensions.get('window');

const ShopTab = ({tab, isActive, setShow, shopScroll, shop, xAnim}) => {
  return (
    <TouchableOpacity
      key={`tab-${tab}`}
      style={styles.tab}
      onPress={() => {
        if (shopScroll.current) {
          shopScroll.current.getNode().scrollTo({
            y: Platform.OS === 'ios' ? 260 : 210,
            animated: true,
          });
        }
        setShow(tab);
        if (tab === 0) {
          Animated.timing(xAnim, {
            toValue: sizes.padding,
            duration: 400,
          }).start();
        } else if (tab === 1) {
          Animated.timing(xAnim, {
            toValue: sizes.padding + (width - sizes.padding * 2) / 4,
            duration: 400,
          }).start();
        } else if (tab === 2) {
          Animated.timing(xAnim, {
            toValue: sizes.padding + ((width - sizes.padding * 2) / 4) * 2,
            duration: 400,
          }).start();
        } else {
          Animated.timing(xAnim, {
            toValue: sizes.padding + ((width - sizes.padding * 2) / 4) * 3,
            duration: 400,
          }).start();
        }
      }}>
      <Text
        h3
        center
        style={{
          color: isActive ? colors.black : colors.gray,
        }}>
        {tab === 0 ? SHOPCAT[shop.category] : MAPCAT[tab]}
      </Text>
    </TouchableOpacity>
  );
};

export default ShopScreen = observer(({navigation}) => {
  const {user} = useContext(UserStoreContext);

  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});
  const [show, setShow] = useState(0);

  const shopScroll = createRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isKorean, setIsKorean] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [yAnim] = useState(new Animated.Value(0));
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;
  const [xAnim] = useState(new Animated.Value(sizes.padding));

  useEffect(() => {
    const shopId = navigation.getParam('shopId');
    let unsubscribe;
    unsubscribe = streamShop(shopId).onSnapshot(doc => {
      setShop(doc.data());
      setIsLoaded(true);
    });
    setTodo(navigation.getParam('todo'));
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

    if (e.nativeEvent.contentOffset.y > 200) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 200) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 25,
      }).start();
    }
  };

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppBar navigation={navigation} shop={shop} fadeAnim={fadeAnim}></AppBar>
      <Animated.View
        style={[
          styles.tabs,
          {
            top: Platform.OS === 'ios' ? 40 : 90,
            opacity: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
              useNativeDriver: true,
            }),
          },
        ]}>
        <Block row flex={false}>
          {[0, 1, 2, 3].map(tab => (
            <ShopTab
              key={tab}
              tab={tab}
              shop={shop}
              isActive={show == tab}
              setShow={setShow}
              shopScroll={shopScroll}
              xAnim={xAnim}></ShopTab>
          ))}
        </Block>
        <Animated.View
          style={{
            ...styles.bottomBar,
            left: xAnim,
          }}></Animated.View>
      </Animated.View>
      <Header top={animatedScrollYValue} shop={shop}></Header>
      <Animated.ScrollView
        ref={ref => {
          shopScroll.current = ref;
        }}
        showsVerticalScrollIndicator={false}
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
        <Block
          style={{
            paddingTop: 250,
          }}>
          <Animated.View
            style={[
              styles.tabs,
              {
                opacity: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                  useNativeDriver: true,
                }),
              },
            ]}>
            <Block row flex={false}>
              {[0, 1, 2, 3].map(tab => (
                <ShopTab
                  key={tab}
                  tab={tab}
                  shop={shop}
                  isActive={show == tab}
                  setShow={setShow}
                  shopScroll={shopScroll}
                  xAnim={xAnim}></ShopTab>
              ))}
            </Block>
            <Animated.View
              style={{
                ...styles.bottomBar,
                left: xAnim,
              }}></Animated.View>
          </Animated.View>
          <Animated.View style={{paddingTop: 20, backgroundColor: 'white'}}>
            {/* {todo && <ReservationSection shop={shop} todo={todo} />} */}
            {show === 0 && MENUS.includes(shop.category) && (
              <MenuSection shop={shop} isKorean={isKorean} />
            )}
            {show === 0 && shop.category === 'Massage' && (
              <MassageSection shop={shop} isKorean={isKorean} />
            )}
            {show === 0 && shop.category === 'Activity' && (
              <ProgramSection shop={shop} />
            )}
            {show === 0 && shop.category === 'Place' && (
              <PlaceSection shop={shop} isKorean={isKorean} />
            )}
            {show === 1 && (
              <ReviewSection shop={shop} navigation={navigation} />
            )}
            {show === 2 && <ShopInfoSection shop={shop} />}
            {show === 3 && (
              <RecommendSection navigation={navigation} shop={shop} />
            )}
          </Animated.View>
        </Block>
      </Animated.ScrollView>
      <FloatButton navigation={navigation} shop={shop} user={user} />
      {show === 0 && (
        <ExchangeButton isKorean={isKorean} setIsKorean={setIsKorean} />
      )}
    </SafeAreaView>
  );
});

ShopScreen.defaultProps = {};

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  tabs: {
    zIndex: 1000,
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: sizes.padding,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.gray2,
  },
  tab: {
    width: (width - sizes.padding * 2) / 4,
    paddingVertical: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: colors.black,
    width: (width - sizes.padding * 2) / 4,
  },
});
