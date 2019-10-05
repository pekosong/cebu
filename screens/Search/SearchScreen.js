import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Block, Text, Card, SearchBar} from '../../components';
import {theme, mocks} from '../../constants';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {watchUserData, downloadShopData} from '../../redux/action';

const EMAIL = 'peko22@naver.com';

const SearchScreen = props => {
  const {navigation, categories, recommendList, eventList} = props;
  const [cates, setCates] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe;
    unsubscribe = dispatch(watchUserData(EMAIL));
    dispatch(downloadShopData());
    setCates(categories);
    setIsLoaded(true);
    return () => {
      unsubscribe();
    };
  }, []);

  renderList = item => {
    return (
      <TouchableOpacity
        key={item.name}
        onPress={() =>
          navigation.navigate('Category', {
            category: item.id,
          })
        }>
        <Block style={styles.categoryContainer}>
          <Image
            style={{
              borderRadius: 3,
              width: '100%',
              height: 70,
              resizeMode: 'cover',
            }}
            source={item.src}></Image>

          <Text black style={{padding: 8}}>
            {item.id}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block>
      <SearchBar />
      {isLoaded ? (
        <ScrollView vertival={true}>
          <Block style={styles.title}>
            <Text h1 bold>
              평생 잊지 못할 세부를 원하세요?
            </Text>
          </Block>
          <Block style={{...styles.content, height: 130}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {cates.map(item => renderList(item))}
            </ScrollView>
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
                    gray
                    caption
                    style={{
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    }}>
                    {item.beforePrice}원
                  </Text>
                  <Text h4 bold style={{marginTop: 5}}>
                    {item.afterPrice}원
                  </Text>
                </Card>
              ))}
            </ScrollView>
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
                  <Text h4 bold style={{marginTop: 5}}>
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
    borderRadius: 3,
    width: 120,
    height: 120,
    marginRight: 20,
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
