import React, {useState, useEffect, useRef, createRef} from 'react';
import {StyleSheet, Animated, TouchableOpacity, Dimensions} from 'react-native';

import {Block, Text, Loader} from 'app/src/components';

import {sizes, colors} from 'app/src/styles';

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
import {streamShop} from 'app/src/api/shop';

const HEIGHT = 250;

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
            y: HEIGHT,
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
  const [shop, setShop] = useState({});
  const [show, setShow] = useState(0);

  const shopScroll = createRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isKorean, setIsKorean] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
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

  if (!isLoaded) return <Loader></Loader>;

  return (
    <Block>
      <Header top={animatedScrollYValue} shop={shop} HEIGHT={HEIGHT}></Header>
      <AppBar navigation={navigation} shop={shop} fadeAnim={fadeAnim}></AppBar>
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
            listener: e => {
              if (e.nativeEvent.contentOffset.y > HEIGHT - 5) {
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 0,
                }).start();
              } else if (e.nativeEvent.contentOffset.y < HEIGHT - 5) {
                Animated.timing(fadeAnim, {
                  toValue: 0,
                  duration: 0,
                }).start();
              }
            },
          },
        )}
        scrollEventThrottle={360}>
        <ShopTitle shop={shop} HEIGHT={HEIGHT} />
        <TabBar
          fadeAnim={fadeAnim}
          xAnim={xAnim}
          inFlat
          style={{
            marginTop: HEIGHT + 80,
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
            paddingTop: 30,
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
          {show === 1 && <ReviewSection shop={shop} navigation={navigation} />}
          {show === 2 && (
            <ShopInfoSection shop={shop} navigation={navigation} />
          )}
          {show === 3 && (
            <RecommendSection shop={shop} navigation={navigation} />
          )}
        </Block>
      </Animated.ScrollView>
      <FloatButton shop={shop} navigation={navigation} />
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
