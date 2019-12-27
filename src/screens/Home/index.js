import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import {SearchBar, Block, Text, Loader, CachedImage} from 'app/src/components';

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
        <Block row space="between" style={styles.title}>
          <Text h2 bold>
            세부 날씨 / 환율
          </Text>
          <Text h3>더보기</Text>
        </Block>
        <Block row style={{height: 40, paddingLeft: 20}}>
          <CachedImage
            style={{width: 50}}
            uri={
              'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
            }></CachedImage>
          <Block row>
            <Block center middle style={{marginLeft: 8, flex: 0, width: 60}}>
              <Text h2 bold style={{marginRight: 10}}>
                30 <Text h3>℃</Text>
              </Text>
            </Block>
            <Block middle>
              <Text>맑음, 체감온도 36℃</Text>
              <Text>자외선 10 나쁨</Text>
            </Block>
          </Block>
        </Block>
        <Block row style={{height: 30, marginTop: 10, paddingLeft: 20}}>
          <CachedImage
            style={{width: 50}}
            uri={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/300px-Flag_of_the_Philippines.svg.png'
            }></CachedImage>
          <Block row>
            <Block center middle style={{marginLeft: 8, flex: 0, width: 60}}>
              <Text h3 bold style={{marginRight: 10}}>
                22.82
              </Text>
            </Block>
            <Block middle>
              <Text style={{color: 'darkblue'}}>▼ 0.05 (-0.22%)</Text>
            </Block>
            <Block style={{position: 'absolute', right: 20, top: 0}}>
              <Text right size={10}>
                2019.12.27
              </Text>
              <Text right size={10}>
                12:49
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
