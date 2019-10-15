import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {
  Block,
  Text,
  Card,
  CardWrap,
  SearchBar,
  CachedImage,
  Button,
} from '../../components';
import {theme, mocks} from '../../constants';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {watchUserData, downloadShopData} from '../../redux/action';

const EMAIL = 'peko22@naver.com';
const {height, width} = Dimensions.get('window');
const MAP = {
  Restaurant: '식당',
  Massage: '마사지',
  Nail: '네일',
  Activity: '액티비티',
};
const SearchScreen = props => {
  const {navigation, categories, recommendList, eventList, loveList} = props;
  const [cates, setCates] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe;
    unsubscribe = dispatch(watchUserData(EMAIL));
    dispatch(downloadShopData()).then(() => setIsLoaded(true));
    setIsLoaded(true);
    setCates(categories);
    return () => {
      unsubscribe();
    };
  }, []);

  renderList = item => {
    return (
      <TouchableWithoutFeedback
        key={item.name}
        onPress={() =>
          navigation.navigate('Category', {
            category: item.id,
          })
        }>
        <Block style={styles.categoryContainer}>
          <Block
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              overflow: 'hidden',
            }}>
            <Image
              style={{
                width: '100%',
                resizeMode: 'cover',
                height: 85,
              }}
              source={item.src}></Image>

            <Text black style={{padding: 12}}>
              {MAP[item.id]}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

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
          <Block style={{...styles.content, height: 140}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {cates.map(item => renderList(item))}
            </ScrollView>
          </Block>

          <Block style={styles.title}>
            <Text h1 bold>
              이런 활동은 어떠세요
            </Text>
          </Block>
          <Block style={{paddingHorizontal: theme.sizes.padding}}>
            <CachedImage
              style={{
                height: 350,
                width: width - theme.sizes.padding * 2,
                borderRadius: 10,
              }}
              uri={
                'https://cebu365.com/wp-content/uploads/2016/12/hopping-tour-1.jpg'
              }></CachedImage>
            <Block center style={{width: width, position: 'absolute', top: 30}}>
              <Text white>헬로우 세부와 함께하는</Text>
              <Text white bold h3 style={{paddingVertical: 15}}>
                다양한 Activity
              </Text>
              <Button
                style={{
                  width: 120,
                }}>
                <Text center black>
                  자세히 알아보기
                </Text>
              </Button>
            </Block>
          </Block>
          {/* 할인 정보 */}
          <Block style={styles.title}>
            <Text h1 bold>
              지금 할인 하고 있어요
            </Text>
            <Text h4 style={{marginTop: 6}}>
              Hello, Cebu 만을 위한 특별 할인 행사를 하고 있어요
            </Text>
          </Block>
          <Block style={styles.content}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {recommendList.map((item, idx) => (
                <Card
                  key={idx}
                  item={item}
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
            <Text h1 bold>
              많은 분들이 사랑하는 곳
            </Text>
            <Text h4 style={{marginTop: 6}}>
              Hello, Cebu 이용객들이 많은 곳이에요
            </Text>
          </Block>
          <Block
            style={{
              marginHorizontal: theme.sizes.padding,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {loveList.map((item, idx) => (
              <CardWrap
                key={idx}
                item={item}
                navigation={navigation}
                favorite={user.myfavorites}
                idx={idx}></CardWrap>
            ))}
          </Block>

          <Block style={styles.title}>
            <Text h1 bold>
              지금 이벤트 중이에요
            </Text>
            <Text h4 style={{marginTop: 6}}>
              Hello, Cebu 만을 위한 특별 이벤트를 하고 있어요
            </Text>
          </Block>
          <Block style={{...styles.content, marginBottom: 40}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {eventList.map((item, idx) => (
                <Card
                  key={idx}
                  item={item}
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
        <Block style={styles.full}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
};

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
    marginHorizontal: theme.sizes.padding,
    marginTop: 40,
    marginBottom: 20,
  },
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginLeft: theme.sizes.padding,
    height: 220,
  },
  categoryContainer: {
    flex: 0,
    borderRadius: 10,
    width: 130,
    height: 130,
    marginRight: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SearchScreen;
