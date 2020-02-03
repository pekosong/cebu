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
import {UserStoreContext} from 'app/src/store/user';
import {ShopStoreContext} from 'app/src/store/shop';

const {width, height} = Dimensions.get('window');

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

  const shopStore = useContext(ShopStoreContext);
  const {isLogin, user} = useContext(UserStoreContext);

  useEffect(() => {
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
  }, []);

  handleScrollByHomeY = e => {
    if (e.nativeEvent.contentOffset.y > 40) {
      Animated.timing(fadeAnim, {
        toValue: 6,
        duration: 5,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 40) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 5,
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
    if (category === 'Food') {
      return shuffleArray(shopStore.shopList)
        .filter(e => e.category === 'Restaurant' && e.isDelivery)
        .slice(0, 5);
    }
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
          styles.header,
          {
            shadowOffset: {
              width: fadeAnim,
              height: fadeAnim,
            },
            elevation: fadeAnim,
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
            style={{color: colors.darkgray, marginRight: 6}}
          />
        </TouchableOpacity>
        {isLogin ? (
          <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
            <CachedImage uri={user.image} style={styles.avatar}></CachedImage>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              borderWidth: 1,
              borderColor: colors.accent,
              paddingHorizontal: 6,
              paddingVertical: 3,
              borderRadius: 4,
            }}>
            <Text accent>로그인</Text>
          </TouchableOpacity>
        )}
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
          center
          middle
          style={{
            position: 'relative',
            marginTop: 90,
            height: height * 0.24,
            padding: 10,
          }}>
          <CachedImage
            uri={
              'https://cdn.pixabay.com/photo/2016/11/29/03/19/beach-1867026_960_720.jpg'
            }
            style={{
              borderRadius: 8,
              width: width - 20,
              height: '100%',
            }}></CachedImage>
          <Block style={styles.seachContainer}>
            <Search navigation={navigation} />
          </Block>
        </Block>
        <Block style={{marginTop: 10, marginLeft: 12}}>
          <Text h2 bold>
            {'카테고리'}
          </Text>
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
              <Text h2 bold>
                {item.title + '  '}
                <Text darkgray>{item.subTitle}</Text>
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Category', {
                    category: item.category,
                  })
                }>
                <Text accent bold>
                  더보기
                </Text>
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
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 6,
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
    marginLeft: 6,
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  seachContainer: {
    position: 'absolute',
    width: width,
    zIndex: 100,
    padding: 100,
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
    marginBottom: 8,
  },
});

export default HomeScreen;
