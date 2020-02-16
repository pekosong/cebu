import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {
  Block,
  Button,
  Text,
  CardShop,
  CategoryTab,
  Loader,
} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {sizes, style, colors} from 'app/src/styles';

import {useSelector} from 'react-redux';

const cateSrc = {
  All: require('app/src/assets/images/search/all.jpg'),
  Restaurant: require('app/src/assets/images/search/restaurant.jpg'),
  Massage: require('app/src/assets/images/search/massage.jpg'),
  Activity: require('app/src/assets/images/search/seasports.jpg'),
  Place: require('app/src/assets/images/search/activity.jpg'),
  Food: require('app/src/assets/images/search/food.jpg'),
  Adult: require('app/src/assets/images/category/show.jpeg'),
};

const cateMap = {
  All: '전체',
  Restaurant: '식당',
  Food: '배달',
  Massage: '스파',
  Activity: '액티비티',
  Place: '명소',
  Adult: '어른전용',
  Nail: '네일',
};

const FavoritesScreen = props => {
  const {navigation} = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState('');

  const [favorites, setFavorites] = useState([]);

  const [selectedFavorites, setSelectedFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const {loggedIn, user} = useSelector(state => state.user);
  const shopList = useSelector(state => state.shop);

  useEffect(() => {
    if (loggedIn) {
      const favorites = user.myfavorites.map(e => e.id);
      const favoritesList = shopList.filter(e => favorites.indexOf(e.id) != -1);
      const category = new Set(
        ['All'].concat(favoritesList.map(e => e.category)),
      );
      setFavorites(favoritesList);
      setSelectedFavorites(favoritesList);
      setActive('All');
      setTabs(Array.from(category));
      setIsLoaded(true);
    }
    return () => {};
  }, [user]);

  handleTab = tab => {
    if (tab == 'All') {
      setSelectedFavorites(favorites);
    } else {
      setSelectedFavorites(favorites.filter(shop => shop.category == tab));
    }
    setActive(tab);
  };

  if (!loggedIn)
    return (
      <Block center middle style={{padding: 80}}>
        <Text size={40} bold center>
          저장소
        </Text>
        <Text darkgray h4 center style={{marginTop: 30}}>
          로그인 후 나만의 추천
        </Text>
        <Text darkgray h4 center style={{marginTop: 5, marginBottom: 30}}>
          리스트를 정리해보세요
        </Text>
        <Button
          style={{
            height: 60,
            backgroundColor: colors.accent,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text h4 white bold center>
            로그인 하러 가기
          </Text>
        </Button>
      </Block>
    );

  if (!isLoaded) return <Loader />;

  if (user.myfavorites.length === 0)
    return (
      <Block center middle style={{padding: 80}}>
        <Text size={40} bold center>
          저장소
        </Text>
        <Text darkgray h4 center style={{marginTop: 30}}>
          저장 정보가 없습니다
        </Text>
        <Text darkgray h4 center style={{marginTop: 5, marginBottom: 30}}>
          리스트를 등록하세요
        </Text>
        <Button
          style={{
            height: 60,
            backgroundColor: colors.accent,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text h4 white bold center>
            검색하러 가기
          </Text>
        </Button>
      </Block>
    );

  const itemSeparatorElement = () => (
    <Block
      style={{
        marginVertical: 12,
      }}
    />
  );
  const headerElement = (
    <Block style={[style.scrollTab, {marginBottom: 20}]}>
      <Block style={{flex: 0, height: 40}}>
        <Text h1 bold>
          저장소
        </Text>
      </Block>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}>
        {tabs.map((tab, idx) => (
          <CategoryTab
            key={idx}
            tab={tab}
            tabName={cateMap[tab]}
            image={cateSrc[tab]}
            isActive={active == tab}
            handleTab={handleTab}
            isLast={tabs.length - 1 === idx}></CategoryTab>
        ))}
      </ScrollView>
    </Block>
  );
  const footerElement = <Block style={{marginBottom: 50}}></Block>;

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <FlatList
        bounces={true}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparatorElement}
        ListHeaderComponent={headerElement}
        ListFooterComponent={footerElement}
        data={selectedFavorites}
        renderItem={({item}) => (
          <CardShop shop={item} navigation={navigation}></CardShop>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

FavoritesScreen.navigationOptions = {
  header: null,
};

FavoritesScreen.defaultProps = {
  profiles: mocks.profiles,
  lists: mocks.lists,
  myplans: mocks.plans,
};

const styles = StyleSheet.create({
  tabs: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: -sizes.padding,
    paddingHorizontal: sizes.padding,
  },
});

export default FavoritesScreen;
