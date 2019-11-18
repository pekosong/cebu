import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import {Block, Text, CardShop} from 'app/src/components';

import {mocks} from 'app/src/constants';
import {colors, sizes, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';
import {useSelector, shallowEqual} from 'react-redux';

const cateMap = {
  All: '전체',
  Restaurant: '식당',
  Massage: '마사지',
  Nail: '네일',
  Activity: '액티비티',
};

const cateSrc = {
  All: require('app/src/assets/images/search/activity.jpg'),
  Restaurant: require('app/src/assets/images/search/restaurant.jpg'),
  Massage: require('app/src/assets/images/search/massage.jpg'),
  Nail: require('app/src/assets/images/search/nail.jpg'),
  Activity: require('app/src/assets/images/search/seasports.jpg'),
};
function FavoritesScreen(props) {
  const {navigation} = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState('');

  const [favorites, setFavorites] = useState([]);

  const [selectedFavorites, setSelectedFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      firebase
        .firestore()
        .collection('shops')
        .get()
        .then(querySnapshot => {
          const shopList = [];
          const category = new Set(['All']);
          querySnapshot.forEach(doc => {
            if (user.myfavorites.map(e => e.id).indexOf(doc.data().id) != -1) {
              shopList.push(doc.data());
              category.add(doc.data().category);
            }
          });
          setFavorites(shopList);
          setSelectedFavorites(shopList);
          setActive('All');
          setTabs(Array.from(category));
          setIsLoaded(true);
        });
    }
    return () => {};
  }, [user]);

  renderTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={styles.tab}>
        <Block style={{flex: 0, width: 60, height: 60}}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              borderRadius: 30,
            }}
            source={cateSrc[tab]}></Image>
        </Block>
        <Text
          center
          size={16}
          style={{
            marginTop: 6,
            color: isActive ? colors.black : colors.gray,
          }}>
          {cateMap[tab]}
        </Text>
      </TouchableOpacity>
    );
  };

  handleTab = tab => {
    if (tab == 'All') {
      setSelectedFavorites(favorites);
    } else {
      setSelectedFavorites(favorites.filter(shop => shop.category == tab));
    }
    setActive(tab);
  };

  return (
    <Block>
      <Block flex={false} style={styles.header}>
        <Text h1 bold>
          저장소
        </Text>
        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => renderTab(tab))}
        </Block>
      </Block>
      {isLoaded ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          style={{paddingTop: sizes.base * 0.8}}>
          {selectedFavorites.map((shop, idx) => (
            <CardShop key={idx} shop={shop} navigation={navigation}></CardShop>
          ))}
        </ScrollView>
      ) : (
        <Block style={style.full}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
}

FavoritesScreen.navigationOptions = {
  header: null,
};

FavoritesScreen.defaultProps = {
  profiles: mocks.profiles,
  lists: mocks.lists,
  myplans: mocks.plans,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingTop: sizes.base * 4,
    paddingHorizontal: sizes.padding,
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
  tab: {
    marginRight: sizes.base * 1.2,
    paddingBottom: sizes.base * 0.8,
  },
  categories: {
    paddingHorizontal: sizes.padding,
    marginVertical: sizes.padding,
  },
});

export default FavoritesScreen;
