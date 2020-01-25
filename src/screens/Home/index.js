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
        setIsLoaded(true);
      });
    } else if (shopStore.shopList.length !== 0) {
      setRestaurantList(filterShopList('Restaurant'));
      setMassageList(filterShopList('Massage'));
      setFoodList(filterShopList('Food'));
      setActivityList(filterShopList('Activity'));
      setPlaceList(filterShopList('Place'));
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
          {
            opacity: fadeAnim,
            paddingHorizontal: sizes.padding / 1.5,
            paddingTop: 40,
            zIndex: 1000,
            position: 'absolute',
            height: 86,
            width,
            backgroundColor: 'white',
            marginBottom: 3,
          },
        ]}>
        <Block center row>
          <Image
            source={require('app/src/assets/icon.png')}
            style={{
              height: 26,
              width: 36,
              borderRadius: 5,
              marginRight: 8,
            }}></Image>
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
          <Image
            source={require('app/src/assets/images/hello.jpg')}
            style={{
              height: '100%',
              resizeMode: 'cover',
            }}></Image>
          <Block
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}></Block>
          <Block
            style={{
              position: 'absolute',
              width: width,
              top: 70,
              zIndex: 10,
              borderRadius: 30,
              paddingHorizontal: sizes.padding,
            }}>
            <Block center row space="between">
              <Block>
                <Text size={23} white bold>
                  이런 곳은 어때요?
                </Text>
              </Block>
              <CachedImage
                uri={'https://randomuser.me/api/portraits/men/19.jpg'}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}></CachedImage>
            </Block>
          </Block>
          <Block
            style={{
              width: width,
              position: 'absolute',
              top: (height * 0.5) / 3,
              left: 0,
              zIndex: 100,
              padding: 5,
            }}>
            <Search navigation={navigation} />
          </Block>
        </Block>
        {/* <Block center row space="between" style={styles.title}>
        <Text h2 bold>
          오늘의 세부
        </Text>
        <Ionicons size={20} name="ios-arrow-down" />
      </Block>
      <Block
        row
        style={{
          marginTop: 4,
          marginBottom: 6,
          paddingHorizontal: sizes.padding,
        }}>
        <Block row center>
          <CachedImage
            style={{height: 20, width: 30}}
            uri={
              'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
            }></CachedImage>
          <Block style={{marginLeft: 10}}>
            <Text style={{marginRight: 6}}>
              30<Text> ℃</Text>
            </Text>
            <Text darkgray size={11}>
              맑음, 체감온도 36℃
            </Text>
          </Block>
        </Block>
        <Block row center>
          <CachedImage
            style={{height: 20, width: 30}}
            uri={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/300px-Flag_of_the_Philippines.svg.png'
            }></CachedImage>
          <Block style={{marginLeft: 10}}>
            <Text style={{marginRight: 6}}>
              {22.82 + ' '}
              <Text size={11}>(원/페소)</Text>
            </Text>
            <Text darkgray size={11}>
              ▼ 0.05 (-0.22%)
            </Text>
          </Block>
        </Block>
      </Block> */}
        <Block
          middle
          center
          row
          style={{
            marginTop: 10,
            flexWrap: 'wrap',
          }}>
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
            title: '액티비티',
            subTitle: '하루 정도는 신나게',
            category: 'Activity',
            items: activityList,
          },
          {
            title: '명소',
            subTitle: '세부 왔으면 그래도 여기는',
            category: 'Place',
            items: placeList,
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
            {idx !== 4 ? (
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
  title: {
    marginHorizontal: sizes.padding,
    marginBottom: 6,
  },
});

export default HomeScreen;
