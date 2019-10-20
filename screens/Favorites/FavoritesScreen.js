import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import StarRating from 'react-native-star-rating';

import {Ionicons} from '@expo/vector-icons';
import {Block, Text, CachedImage} from '../../components';
import {theme, mocks} from '../../constants';

import firebase from '../../constants/store';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite} from '../../redux/action';

const {width} = Dimensions.get('window');

const cateMap = {
  All: '전체',
  Restaurant: '식당',
  Message: '마사지',
  Cafe: '카페',
  Bar: '술집',
  Nail: '네일',
  SeaSports: '수상스포츠',
  Activity: '액티비티',
  Shopping: '쇼핑',
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
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text size={16} medium gray={!isActive} secondary={isActive}>
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

  handleRemoveHeart = shop => {
    let newfavorites = user.myfavorites;
    const idx = newfavorites.map(e => e.id).indexOf(shop);
    newfavorites.splice(idx, 1);
    dispatch(updateFavorite(newfavorites));
  };

  renderList = shop => {
    const {name, id, preview, engName, review, category} = shop;
    return (
      <TouchableOpacity
        key={id}
        onPress={() =>
          navigation.navigate('Shop', {
            title: '저장소',
            shopId: id,
          })
        }>
        <Block key={name} style={styles.categories}>
          <TouchableOpacity
            onPress={() => handleRemoveHeart(id)}
            style={{position: 'absolute', top: 5, right: 30, zIndex: 10}}>
            <Ionicons
              size={30}
              color={'red'}
              name={'ios-heart'}
              style={{
                textShadowColor: theme.colors.black,
                textShadowOffset: {width: 0.5, height: 1},
                textShadowRadius: 1,
              }}
            />
          </TouchableOpacity>
          <CachedImage
            uri={preview}
            style={{
              height: 200,
              width: width - theme.sizes.padding * 2,
              borderRadius: 5,
              resizeMode: 'cover',
            }}
          />
          <Text style={{marginTop: 5}}>{category}</Text>
          <Text h2 bold style={{marginVertical: 5}}>
            {name + '  '}
            <Text>{engName}</Text>
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={review}
            starSize={12}
            fullStarColor={theme.colors.accent}
            containerStyle={{width: 20}}
          />
        </Block>
      </TouchableOpacity>
    );
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
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
          {selectedFavorites.map(shop => renderList(shop))}
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
    marginVertical:
      Platform.OS === 'ios' ? theme.sizes.base * 1.1 : theme.sizes.base,
    marginHorizontal: theme.sizes.padding,
  },
  tab: {
    marginRight: theme.sizes.base,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    paddingHorizontal: theme.sizes.padding,
    marginVertical: theme.sizes.padding,
  },
});

export default FavoritesScreen;
