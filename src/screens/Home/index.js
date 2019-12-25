import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import {SearchBar, Block, Text, Loader} from 'app/src/components';

import CardCategory from './components/CardCategory';
import CardRect from './components/CardRect';

import {mocks} from 'app/src/constants';
import {sizes} from 'app/src/styles';

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
              지금 뜨는 레스토랑
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Restaurant',
                })
              }>
              <Ionicons size={26} name="ios-arrow-forward" />
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
              세부에서 배달시켜 먹자
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Food',
                })
              }>
              <Ionicons size={26} name="ios-arrow-forward" />
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
              하루의 피로는 스파로
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Massage',
                })
              }>
              <Ionicons size={26} name="ios-arrow-forward" />
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
              세부에서 놀기
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Activity',
                })
              }>
              <Ionicons size={26} name="ios-arrow-forward" />
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
              세부 즐기기
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  category: 'Place',
                })
              }>
              <Ionicons size={26} name="ios-arrow-forward" />
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
    marginBottom: 4,
  },
});

export default HomeScreen;
