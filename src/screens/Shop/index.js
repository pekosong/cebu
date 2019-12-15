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
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Block, Divider, Text} from 'app/src/components';

import {sizes, colors, style} from 'app/src/styles';

import AppBar from './components/AppBar';
import HeaderSection from './components/HeaderSection';
import ShopTitle from './components/ShopTitle';

import ReservationSection from './components/ReservationSection';
import BottomSection from './components/BottomSection';
import RecommendSection from './components/RecommendSection';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {streamShop} from 'app/src/api/shop';

import MenuSection from './components/MenuSection';
import ProgramSection from './components/ProgramSection';

import ReviewSection from './components/ReviewSection';
import ShopInfoSection from './components/ShopInfoSection';

const MAPCAT = {
  Massage: '프로그램',
  Activity: '프로그램',
  Restaurant: '메뉴',
};
const MAP = {
  프로그램: 'menu',
  메뉴: 'menu',
  후기: 'review',
  기본정보: 'info',
  주변: 'nearby',
};
const {width} = Dimensions.get('window');

export default ShopScreen = observer(props => {
  const {navigation} = props;
  const {user} = useContext(UserStoreContext);

  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});
  const [show, setShow] = useState('menu');

  const shopScroll = createRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [yAnim] = useState(new Animated.Value(0));
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState('');
  const [xAnim] = useState(new Animated.Value(sizes.padding));

  useEffect(() => {
    let shopId = navigation.getParam('shopId');
    let unsubscribe;
    unsubscribe = streamShop(shopId).onSnapshot(doc => {
      setShop(doc.data());
      setActive(MAPCAT[doc.data().category]);
      setIsLoaded(true);
    });
    setTodo(navigation.getParam('todo'));

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  renderShopTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        style={styles.tab}
        onPress={() => {
          if (shopScroll.current) {
            shopScroll.current.getNode().scrollTo({
              y: 260,
              animated: true,
            });
          }
          setShow(MAP[tab]);
          setActive(tab);
          if (tab == '메뉴' || tab == '프로그램') {
            Animated.timing(xAnim, {
              toValue: sizes.padding,
              duration: 400,
            }).start();
          } else if (tab == '후기') {
            Animated.timing(xAnim, {
              toValue: sizes.padding + (width - sizes.padding * 2) / 4,
              duration: 400,
            }).start();
          } else if (tab == '기본정보') {
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
          {tab}
        </Text>
      </TouchableOpacity>
    );
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

  if (isLoaded) {
    return (
      <Block key={shop.id}>
        <AppBar
          navigation={navigation}
          shop={shop}
          fadeAnim={fadeAnim}></AppBar>
        <HeaderSection
          top={animatedScrollYValue}
          shop={shop}
          yAnim={yAnim}></HeaderSection>
        <Animated.View
          style={{
            ...styles.tabs,
            top: animatedScrollYValue.interpolate({
              inputRange: [0, 260],
              outputRange: [350, 90],
              extrapolate: 'clamp',
              useNativeDriver: true,
            }),
          }}>
          <Block flex={false} row>
            {[MAPCAT[shop.category], '후기', '기본정보', '주변'].map(tab =>
              renderShopTab(tab),
            )}
          </Block>
          <Animated.View
            style={{
              ...styles.bottomBar,
              left: xAnim,
            }}></Animated.View>
        </Animated.View>
        <Animated.ScrollView
          ref={ref => {
            shopScroll.current = ref;
          }}
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: 0,
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
              marginTop: 350,
              paddingTop: 70,
              backgroundColor: colors.white,
            }}>
            {show === 'menu' && <MenuSection shop={shop}></MenuSection>}
            {show === 'review' && (
              <ReviewSection
                shop={shop}
                navigation={navigation}></ReviewSection>
            )}
            {show === 'info' && <ShopInfoSection shop={shop}></ShopInfoSection>}
            {show === 'nearby' && (
              <RecommendSection
                navigation={navigation}
                shop={shop}></RecommendSection>
            )}
          </Animated.View>
        </Animated.ScrollView>
        <BottomSection
          navigation={navigation}
          shop={shop}
          user={user}></BottomSection>
      </Block>
    );
  } else {
    return (
      <Block style={style.full}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </Block>
    );
  }
});

ShopScreen.defaultProps = {};

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  tabs: {
    zIndex: 1000,
    position: 'absolute',
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
