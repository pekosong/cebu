import React, {useState, useEffect, useRef, createRef, useContext} from 'react';
import {StyleSheet, Animated, TouchableOpacity, Dimensions} from 'react-native';

import {Block, Text, Loader} from 'app/src/components';

import {sizes, colors, style} from 'app/src/styles';

import AppBar from './components/AppBar';
import TabBar from './components/TabBar';

import Header from './components/Header';
import ShopTitle from './components/ShopTitle';
import FloatButton from './components/FloatButton';
import ExchangeButton from './components/ExchangeButton';

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

const MENUS = ['Restaurant', 'Food', 'Adult'];

const MAPCAT = {
  1: '리뷰',
  2: '기본정보',
  3: '근처',
};

const SHOPCAT = {
  Restaurant: '메뉴',
  Food: '메뉴',
  Adult: '메뉴',
  Massage: '프로그램',
  Activity: '프로그램',
  Place: '정보',
};

const {width} = Dimensions.get('window');

const ShopTab = ({tab, isActive, setShow, shopScroll, shop, xAnim}) => {
  return (
    <TouchableOpacity
      key={`tab-${tab}`}
      style={styles.tab}
      onPress={() => {
        if (shopScroll.current) {
          shopScroll.current.getNode().scrollTo({
            y: 280,
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
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  handleScrollByShopY = e => {
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

    if (e.nativeEvent.contentOffset.y > 270) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 270) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 10,
      }).start();
    }
  };

  const opacity = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  if (!isLoaded) return <Loader></Loader>;

  return (
    <Block>
      <Header top={animatedScrollYValue} shop={shop}></Header>
      <AppBar navigation={navigation} shop={shop} fadeAnim={yAnim}></AppBar>
      <TabBar fadeAnim={fadeAnim} xAnim={xAnim}>
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
      </TabBar>
      <Animated.ScrollView
        ref={ref => {
          shopScroll.current = ref;
        }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedScrollYValue}}}],
          {
            listener: event => {
              handleScrollByShopY(event);
            },
          },
        )}
        scrollEventThrottle={360}>
        <ShopTitle shop={shop} />
        <Block
          style={{
            paddingTop: 270,
          }}>
          <TabBar
            fadeAnim={fadeAnim}
            xAnim={xAnim}
            inFlat
            style={{
              opacity: 1,
            }}>
            <Block row>
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
          </TabBar>
          <Block
            style={{
              paddingHorizontal: sizes.padding,
              paddingTop: 40,
              backgroundColor: 'white',
            }}>
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
            {show === 2 && (
              <ShopInfoSection navigation={navigation} shop={shop} />
            )}
            {show === 3 && (
              <RecommendSection navigation={navigation} shop={shop} />
            )}
          </Block>
        </Block>
      </Animated.ScrollView>
      <FloatButton navigation={navigation} shop={shop} user={user} />
      {show === 0 && (
        <ExchangeButton isKorean={isKorean} setIsKorean={setIsKorean} />
      )}
    </Block>
  );
});

ShopScreen.defaultProps = {};

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  tab: {
    width: (width - sizes.padding * 2) / 4,
    paddingVertical: 10,
  },
});
