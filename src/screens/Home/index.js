import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {SearchBar, Block, Text, Loader} from 'app/src/components';

import CardCategory from './components/CardCategory';
import CardRect from './components/CardRect';

import {mocks} from 'app/src/constants';
import {sizes} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';
import {UserStoreContext} from 'app/src/store/user';

import {Ionicons} from '@expo/vector-icons';

const EMAIL = 'b@naver.com';

const HomeScreen = observer(props => {
  const {
    navigation,
    categories,
    restaurantList,
    messageList,
    ActivityList,
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const userStore = useContext(UserStoreContext);
  const {user, getUser} = useContext(UserStoreContext);
  const shopStore = useContext(ShopStoreContext);

  useEffect(() => {
    userStore.email = EMAIL;
    let unsubscribe = getUser();
    shopStore.getShopList().then(() => {
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
        <Block style={{height: 140}}>
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
              하루의 피로를 풀어줄 마사지
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
          {messageList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={messageList.length - 1 == idx}></CardRect>
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
          {ActivityList.map((item, idx) => (
            <CardRect
              key={idx}
              item={item}
              navigation={navigation}
              isLast={ActivityList.length - 1 == idx}></CardRect>
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
  restaurantList: mocks.restaurantList,
  messageList: mocks.messageList,
  ActivityList: mocks.ActivityList,
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: sizes.padding,
    marginTop: 20,
    marginBottom: 8,
  },
});

export default HomeScreen;
