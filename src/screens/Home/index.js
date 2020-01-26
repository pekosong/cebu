import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
} from 'react-native';

import {
  Search,
  Block,
  Text,
  Loader,
  CachedImage,
  Divider,
} from 'app/src/components';
import {Ionicons, AntDesign} from '@expo/vector-icons';

import CardCategory from './components/CardCategory';
import CardRect from './components/CardRect';
import CardActivity from './components/CardActivity';

import {mocks} from 'app/src/constants';
import {sizes, colors, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';
import {UserStoreContext} from 'app/src/store/user';

const {width, height} = Dimensions.get('window');

const EMAIL = 'peko22@naver.com';

const HomeScreen = observer(props => {
  const {navigation, categories} = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const [restaurantList, setRestaurantList] = useState([]);
  const [massageList, setMassageList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [placeList, setPlaceList] = useState([]);
  const [adultList, setAdultList] = useState([]);

  const animatedScrollYValue = useRef(new Animated.Value(0)).current;
  const [fadeAnim] = useState(new Animated.Value(0));

  const userStore = useContext(UserStoreContext);
  const shopStore = useContext(ShopStoreContext);

  useEffect(() => {
    userStore.email = EMAIL;
    let unsubscribe = userStore.getUser();
    if (shopStore.shopList.length === 0) {
      shopStore.getShopList().then(() => {
        setRestaurantList(filterShopList('Restaurant'));
        setMassageList(filterShopList('Massage'));
        setFoodList(filterShopList('Food'));
        setActivityList(filterShopList('Activity'));
        setPlaceList(filterShopList('Place'));
        setAdultList(filterShopList('Adult'));
        setIsLoaded(true);
      });
    } else if (shopStore.shopList.length !== 0) {
      setRestaurantList(filterShopList('Restaurant'));
      setMassageList(filterShopList('Massage'));
      setFoodList(filterShopList('Food'));
      setActivityList(filterShopList('Activity'));
      setPlaceList(filterShopList('Place'));
      setAdultList(filterShopList('Adult'));
      setIsLoaded(true);
    }

    return () => {
      unsubscribe();
    };
  }, []);

  handleScrollByHomeY = e => {
    if (e.nativeEvent.contentOffset.y > 80) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 40,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 80) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 40,
      }).start();
    }
  };

  const shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const filterShopList = category => {
    return shuffleArray(shopStore.shopList)
      .filter(e => e.category == category)
      .slice(0, 5);
  };

  if (!isLoaded) return <Loader></Loader>;

  return (
    <>
      <Block
        row
        center
        space="between"
        animated
        shadow
        style={[
          style.shadow,
          styles.header,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Block center row>
          <Image
            source={require('app/src/assets/icon.png')}
            style={styles.logo}></Image>
          <Block>
            <Text h4 bold>
              hello,{' '}
              <Text primary h3 bold>
                Cebu
              </Text>
            </Text>
          </Block>
        </Block>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <AntDesign
            size={26}
            name="search1"
            style={{color: colors.darkgray}}
          />
        </TouchableOpacity>
      </Block>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedScrollYValue}}}],
          {
            listener: event => {
              handleScrollByHomeY(event);
            },
          },
        )}
        scrollEventThrottle={360}
        showsVerticalScrollIndicator={false}
        vertical={true}
        style={{position: 'relative'}}>
        <Block
          style={{
            height: height * 0.4,
          }}>
          <CachedImage
            uri={
              'https://cdn.pixabay.com/photo/2016/11/29/03/19/beach-1867026_960_720.jpg'
            }
            style={{
              height: '100%',
            }}></CachedImage>
          <Block style={styles.overlap}></Block>
          <Block style={styles.avatarContainer}>
            <Block center row space="between">
              <Block>
                <Text size={20} white bold>
                  Hello, Cebu
                </Text>
                <Text size={23} white bold style={{marginTop: 2}}>
                  이런 곳은 어때요?
                </Text>
              </Block>
              <CachedImage
                uri={'https://randomuser.me/api/portraits/men/19.jpg'}
                style={styles.avatar}></CachedImage>
            </Block>
          </Block>
          <Block style={styles.seachContainer}>
            <Search navigation={navigation} />
          </Block>
          <Block
            row
            right
            style={{
              flex: 0,
              width: width * 0.5,
              position: 'absolute',
              bottom: 0,
              right: 0,
              marginTop: 4,
              marginBottom: 6,
              paddingRight: 10,
            }}>
            <Block center flex={false} style={{marginRight: 15}}>
              <CachedImage
                style={{height: 20, width: 24}}
                uri={
                  'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
                }></CachedImage>
              <Text size={12} white>
                30
                <Text size={11} white>
                  ℃ 맑음
                </Text>
              </Text>
            </Block>
            <Block center flex={false}>
              <Text white style={{height: 20, paddingTop: 2}}>
                환율
              </Text>
              <Text size={12} white>
                {22.82 + ' '}
                <Text white size={11}>
                  (원/페소)
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>

        <Block style={styles.categoryContainer}>
          {categories.map((item, idx) => (
            <CardCategory
              key={idx}
              last={categories.length - 1 == idx}
              item={item}
              navigation={navigation}></CardCategory>
          ))}
        </Block>
        <Divider></Divider>
        {[
          {
            title: '식당',
            subTitle: '세부 최고의 맛집',
            category: 'Restaurant',
            items: restaurantList,
          },
          {
            title: '스파',
            subTitle: '하루의 피로는 스파로',
            category: 'Massage',
            items: massageList,
          },
          {
            title: '배달음식',
            subTitle: '리조트에서 편하게',
            category: 'Food',
            items: foodList,
          },

          {
            title: '명소',
            subTitle: '세부 왔으면 그래도 여기는',
            category: 'Place',
            items: placeList,
          },
          {
            title: '액티비티',
            subTitle: '하루 정도는 신나게',
            category: 'Activity',
            items: activityList,
          },
          {
            title: '어른전용',
            subTitle: '어른들만',
            category: 'Adult',
            items: adultList,
          },
        ].map((item, idx) => (
          <Block key={idx}>
            <Block center row space="between" style={styles.title}>
              <Text h3 bold>
                {item.title + '  '}
                <Text h4 gray>
                  {item.subTitle}
                </Text>
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Category', {
                    category: item.category,
                  })
                }>
                <Ionicons size={22} name="ios-arrow-forward" />
              </TouchableOpacity>
            </Block>
            <ScrollView
              style={{paddingLeft: sizes.padding - 3}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {item.items.map((e, idx) => (
                <CardRect
                  key={idx}
                  item={e}
                  navigation={navigation}
                  isLast={item.items.length - 1 == idx}></CardRect>
              ))}
            </ScrollView>
            {idx !== 5 ? (
              <Divider></Divider>
            ) : (
              <Block style={{marginTop: 40}}></Block>
            )}
          </Block>
        ))}
      </ScrollView>
    </>
  );
});

HomeScreen.navigationOptions = {
  header: null,
};
HomeScreen.defaultProps = {
  categories: mocks.categories,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.padding / 1.5,
    paddingTop: 40,
    zIndex: 1000,
    position: 'absolute',
    height: 86,
    width,
    backgroundColor: 'white',
    marginBottom: 3,
  },
  logo: {
    height: 26,
    width: 36,
    borderRadius: 5,
    marginRight: 8,
  },
  overlap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  avatarContainer: {
    position: 'absolute',
    width: width,
    top: 70,
    zIndex: 10,
    borderRadius: 30,
    paddingHorizontal: sizes.padding,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  seachContainer: {
    width: width,
    position: 'absolute',
    top: (height * 0.32) / 2,
    left: 0,
    zIndex: 100,
    padding: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  title: {
    marginHorizontal: sizes.padding,
    marginBottom: 6,
  },
});

export default HomeScreen;
