import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, ActivityIndicator} from 'react-native';

import {Block, Text, CardShop, CategoryTab} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {colors, sizes, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {ShopStoreContext} from 'app/src/store/shop';

const cateSrc = {
  All: require('app/src/assets/images/search/activity.jpg'),
  Restaurant: require('app/src/assets/images/search/restaurant.jpg'),
  Massage: require('app/src/assets/images/search/massage.jpg'),
  Nail: require('app/src/assets/images/search/nail.jpg'),
  Activity: require('app/src/assets/images/search/seasports.jpg'),
};

const cateMap = {
  All: '전체',
  Restaurant: '식당',
  Massage: '마사지',
  Cafe: '카페',
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

  if (!isLoaded) {
    return (
      <Block style={style.full}>
        <ActivityIndicator
          size="large"
          color={colors.accent}></ActivityIndicator>
      </Block>
    );
  }

  return (
    <>
      <Block style={[style.appBar, styles.shadow, {height: 215}]}>
        <Text h1 bold>
          저장소
        </Text>
        <Block flex={false} row style={styles.tabs}>
          {tabs.map((tab, idx) => (
            <CategoryTab
              key={idx}
              tab={tab}
              tabName={cateMap[tab]}
              image={cateSrc[tab]}
              isActive={active == tab}
              handleTab={handleTab}></CategoryTab>
          ))}
        </Block>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        style={{
          paddingTop: sizes.base * 2,
        }}>
        {selectedFavorites.map((shop, idx) => (
          <CardShop
            key={idx}
            shop={shop}
            navigation={navigation}
            isLast={selectedFavorites.length - 1 === idx}></CardShop>
        ))}
      </ScrollView>
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  tabs: {
    marginTop: 20,
  },
});

export default FavoritesScreen;
