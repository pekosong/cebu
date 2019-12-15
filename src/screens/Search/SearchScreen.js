import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {
  Block,
  Text,
  Card,
  CardCategory,
  CardRect,
  SearchBar,
  CachedImage,
  Button,
} from 'app/src/components';
import {Ionicons} from '@expo/vector-icons';

import {mocks} from 'app/src/constants';
import {colors, sizes, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from '../../store/user';
import {ShopStoreContext} from '../../store/shop';

const EMAIL = 'peko22@naver.com';
const {width} = Dimensions.get('window');

const SearchScreen = observer(props => {
  const {navigation, categories, recommendList, eventList, loveList} = props;
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

  return (
    <Block>
      <SearchBar />
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false} vertival={true}>
          <Block style={styles.title}>
            <Text h1 bold>
              평생 잊지 못할 세부를 원하세요?
            </Text>
          </Block>
          <Block style={{height: 140}}>
            <ScrollView
              style={{paddingLeft: sizes.padding}}
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

          {/* <Block style={styles.title}>
            <Text h1 bold>
              이런 활동은 어떠세요
            </Text>
          </Block>
          <Block
            style={{
              paddingHorizontal: sizes.padding,
              margin: 2,
            }}>
            <CachedImage
              style={{
                height: 350,
                width: width - sizes.padding * 2,
                borderRadius: 10,
              }}
              uri={
                'https://cebu365.com/wp-content/uploads/2016/12/hopping-tour-1.jpg'
              }></CachedImage>
            <Block
              center
              style={{width: width, position: 'absolute', top: 30, zindex: 10}}>
              <Text white>헬로우 세부와 함께하는</Text>
              <Text white bold h3 style={{paddingVertical: 15}}>
                다양한 Activity
              </Text>
              <Button
                style={{
                  width: 120,
                }}
                onPress={() => {
                  navigation.navigate('CategoryActivity');
                }}>
                <Text center black>
                  자세히 알아보기
                </Text>
              </Button>
            </Block>
          </Block> */}
          {/* 할인 정보 */}
          <Block style={styles.title}>
            <Block row space="between">
              <Text h1 bold>
                지금 할인 하고 있어요
              </Text>
              <Ionicons
                size={26}
                color={colors.black}
                name="ios-arrow-forward"
              />
            </Block>
            <Text h4 style={{marginTop: 6}}>
              Hello, Cebu 만을 위한 특별 할인 행사를 하고 있어요
            </Text>
          </Block>
          <Block>
            <ScrollView
              style={{paddingLeft: sizes.padding}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {recommendList.map((item, idx) => (
                <Card
                  key={idx}
                  item={item}
                  last={recommendList.length - 1 == idx}
                  navigation={navigation}
                  favorite={user.myfavorites}>
                  <Text
                    right
                    gray
                    caption
                    style={{
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    }}>
                    {item.beforePrice}원
                  </Text>
                  <Text right h4 bold style={{marginTop: 5}}>
                    {item.afterPrice}원
                  </Text>
                </Card>
              ))}
            </ScrollView>
          </Block>

          <Block style={styles.title}>
            <Block row space="between">
              <Text h1 bold>
                많은 분들이 사랑하는 곳
              </Text>
              <Ionicons
                size={26}
                color={colors.black}
                name="ios-arrow-forward"
              />
            </Block>
            <Text h4 style={{marginTop: 6}}>
              Hello, Cebu 이용객들이 많은 곳이에요
            </Text>
          </Block>
          <Block
            style={{
              marginHorizontal: sizes.padding,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {loveList.map((item, idx) => (
              <CardRect
                key={idx}
                item={item}
                navigation={navigation}
                favorite={user.myfavorites}
                idx={idx}></CardRect>
            ))}
          </Block>

          <Block style={styles.title}>
            <Block row space="between">
              <Text h1 bold>
                지금 이벤트 중이에요
              </Text>
              <Ionicons
                size={26}
                color={colors.black}
                name="ios-arrow-forward"
              />
            </Block>
            <Text h4 style={{marginTop: 6}}>
              Hello, Cebu 만을 위한 특별 이벤트를 하고 있어요
            </Text>
          </Block>
          <Block style={{marginBottom: 40}}>
            <ScrollView
              style={{paddingLeft: sizes.padding}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {eventList.map((item, idx) => (
                <Card
                  key={idx}
                  item={item}
                  last={eventList.length - 1 == idx}
                  navigation={navigation}
                  favorite={user.myfavorites}>
                  <Text right h4 bold style={{marginTop: 5}}>
                    {item.event}
                  </Text>
                </Card>
              ))}
            </ScrollView>
          </Block>
        </ScrollView>
      ) : (
        <Block style={style.full}>
          <ActivityIndicator
            size="large"
            color={colors.accent}></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
});

SearchScreen.navigationOptions = {
  header: null,
};
SearchScreen.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories,
  recommendList: mocks.recommendList,
  eventList: mocks.eventList,
  loveList: mocks.loveList,
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: sizes.padding,
    marginTop: 40,
    marginBottom: 20,
  },
  content: {
    marginLeft: sizes.padding,
    height: 220,
  },
});

export default SearchScreen;
