import React, {useState, useEffect, useContext} from 'react';
import {FlatList, StyleSheet, ScrollView} from 'react-native';

import {Block, Text, CardShop, CategoryTab, Loader} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {sizes, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {ShopStoreContext} from 'app/src/store/shop';

const cateSrc = {
  All: require('app/src/assets/images/search/all.jpg'),
  Restaurant: require('app/src/assets/images/search/restaurant.jpg'),
  Massage: require('app/src/assets/images/search/massage.jpg'),
  Nail: require('app/src/assets/images/search/nail.jpg'),
  Activity: require('app/src/assets/images/search/seasports.jpg'),
  Place: require('app/src/assets/images/search/activity.jpg'),
  Food: require('app/src/assets/images/search/food.jpg'),
};

const cateMap = {
  All: '전체',
  Restaurant: '식당',
  Food: '배달',
  Massage: '스파',
  Activity: '액티비티',
  Place: '명소',
  Bar: '술집',
  Nail: '네일',
};

const FavoritesScreen = observer(props => {
  const {navigation} = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState('');

  const [favorites, setFavorites] = useState([]);

  const [selectedFavorites, setSelectedFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const {user} = useContext(UserStoreContext);
  const {shopList} = useContext(ShopStoreContext);

  useEffect(() => {
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

  if (!isLoaded) return <Loader></Loader>;

  return (
    <>
      <Block style={[style.appBar, styles.shadow, {height: 200}]}>
        <Block style={{flex: 0, height: 30}}>
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
              handleTab={handleTab}></CategoryTab>
          ))}
        </ScrollView>
      </Block>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Block style={{marginBottom: 30}}></Block>}
        data={selectedFavorites}
        renderItem={({item}) => (
          <CardShop shop={item} navigation={navigation}></CardShop>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
});

FavoritesScreen.navigationOptions = {
  header: null,
};

FavoritesScreen.defaultProps = {
  profiles: mocks.profiles,
  lists: mocks.lists,
  myplans: mocks.plans,
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  tabs: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 20,
    height: 90,
  },
});

export default FavoritesScreen;
