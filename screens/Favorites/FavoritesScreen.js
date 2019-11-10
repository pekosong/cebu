import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Dimensions,
  Image,
} from 'react-native';

import StarRating from 'react-native-star-rating';

import {Ionicons} from '@expo/vector-icons';
import {Block, Text, CardShop, CachedImage} from '../../components';
import {theme, mocks} from '../../constants';

import firebase from '../../constants/store';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite} from '../../redux/action';

const {width} = Dimensions.get('window');

const cateMap = {
  All: '전체',
  Restaurant: '식당',
  Massage: '마사지',
  Nail: '네일',
  Activity: '액티비티',
};

const cateSrc = {
  All: require('../../assets/images/search/activity.jpg'),
  Restaurant: require('../../assets/images/search/restaurant.jpg'),
  Massage: require('../../assets/images/search/massage.jpg'),
  Nail: require('../../assets/images/search/nail.jpg'),
  Activity: require('../../assets/images/search/seasports.jpg'),
};
function FavoritesScreen(props) {
  const {navigation} = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState('');

  const [favorites, setFavorites] = useState([]);

  const [selectedFavorites, setSelectedFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

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
          bold
          center
          size={16}
          gray={!isActive}
          accent={isActive}
          style={{marginTop: 10}}>
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
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      {isLoaded ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          style={{paddingTop: theme.sizes.base}}>
          {selectedFavorites.map((shop, idx) => (
            <CardShop key={idx} shop={shop} navigation={navigation}></CardShop>
          ))}
        </ScrollView>
      ) : (
        <Block style={styles.full}>
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
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: theme.sizes.base * 4,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 5,
    marginTop: theme.sizes.base,
    marginHorizontal: theme.sizes.padding,
  },
  tab: {
    marginRight: theme.sizes.base * 1.2,
    paddingBottom: theme.sizes.base,
  },
  categories: {
    paddingHorizontal: theme.sizes.padding,
    marginVertical: theme.sizes.padding,
  },
});

export default FavoritesScreen;
