import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import {SearchBar, Block, Text, Loader, CachedImage} from 'app/src/components';

import CardCategory from './components/CardCategory';
import CardRect from './components/CardRect';

import {mocks} from 'app/src/constants';
import {sizes, colors} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';
import {UserStoreContext} from 'app/src/store/user';

import {Ionicons} from '@expo/vector-icons';

const EMAIL = 'peko22@naver.com';

const HomeScreen = observer(props => {
  const {navigation, categories} = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const [restaurantList, setRestaurantList] = useState([]);
  const [massageList, setMassageList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [placeList, setPlaceList] = useState([]);

  const userStore = useContext(UserStoreContext);
  const {user, getUser} = useContext(UserStoreContext);
  const shopStore = useContext(ShopStoreContext);

  useEffect(() => {
    userStore.email = EMAIL;
    let unsubscribe = getUser();
    shopStore.getShopList().then(() => {
      const resList = shopStore.shopList
        .filter(e => e.category == 'Restaurant')
        .sort((a, b) => b.review - a.review);
      setRestaurantList(resList);
      const masList = shopStore.shopList
        .filter(e => e.category == 'Massage')
        .sort((a, b) => b.review - a.review);
      setMassageList(masList);
      const fList = shopStore.shopList
        .filter(e => e.category == 'Food')
        .sort((a, b) => b.review - a.review);
      setFoodList(fList);
      const actList = shopStore.shopList
        .filter(e => e.category == 'Activity')
        .sort((a, b) => b.review - a.review);
      setActivityList(actList);
      const plList = shopStore.shopList
        .filter(e => e.category == 'Place')
        .sort((a, b) => b.review - a.review);
      setPlaceList(plList);
      setIsLoaded(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!isLoaded) return <Loader></Loader>;

  return (
    <>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false} vertival={true}>
        <Block center row space="between" style={styles.title}>
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
        </Block>
        <Block style={styles.title}>
          <Text h2 bold>
            평생 잊지 못할 세부를 원하세요?
          </Text>
        </Block>
        <Block style={{height: 120}}>
          <ScrollView
            style={{paddingLeft: sizes.padding - 5}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}>
            {categories.map((item, idx) => (
              <CardCategory
                key={idx}
                last={categories.length - 1 == idx}
                item={item}
                navigation={navigation}></CardCategory>
            ))}
          </ScrollView>
        </Block>
        <Block style={styles.title}>
          <Block center row space="between">
            <Text h3 bold>
              맛집
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Restaurant',
                })
              }>
              <Ionicons size={22} name="ios-arrow-forward" />
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView
          style={{paddingLeft: sizes.padding}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}>
          {restaurantList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={restaurantList.length - 1 == idx}></CardRect>
          ))}
        </ScrollView>

        <Block style={styles.title}>
          <Block center row space="between">
            <Text h3 bold>
              스파
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Massage',
                })
              }>
              <Ionicons size={22} name="ios-arrow-forward" />
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView
          style={{paddingLeft: sizes.padding}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}>
          {massageList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={massageList.length - 1 == idx}></CardRect>
          ))}
        </ScrollView>
        <Block style={styles.title}>
          <Block center row space="between">
            <Text h3 bold>
              배달음식
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Food',
                })
              }>
              <Ionicons size={22} name="ios-arrow-forward" />
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView
          style={{paddingLeft: sizes.padding}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}>
          {foodList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={foodList.length - 1 == idx}></CardRect>
          ))}
        </ScrollView>
        <Block style={styles.title}>
          <Block center row space="between">
            <Text h3 bold>
              놀이
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Activity',
                })
              }>
              <Ionicons size={22} name="ios-arrow-forward" />
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView
          style={{paddingLeft: sizes.padding}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}>
          {activityList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={activityList.length - 1 == idx}></CardRect>
          ))}
        </ScrollView>
        <Block style={styles.title}>
          <Block center row space="between">
            <Text h3 bold>
              갈만한 곳
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Place',
                })
              }>
              <Ionicons size={22} name="ios-arrow-forward" />
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView
          style={{paddingLeft: sizes.padding}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}>
          {placeList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={placeList.length - 1 == idx}></CardRect>
          ))}
        </ScrollView>
        <Block style={styles.title}></Block>
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
    marginTop: 20,
    marginBottom: 6,
  },
});

export default HomeScreen;
