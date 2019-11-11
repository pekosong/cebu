import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {Block, Text, CardShop} from '../../components';
import {theme} from '../../constants';

import {useSelector, shallowEqual} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const cateMap = {
  Restaurant: '식당',
  Massage: '마사지',
  Cafe: '카페',
  Bar: '술집',
  Nail: '네일',
  SeaSports: '수상스포츠',
  Activity: '액티비티',
  Shopping: '쇼핑',
};

const filerMap = {
  추천: 'review',
  리뷰수: 'reviewCnt',
  거리: 'hello',
};

const activityList = [
  {
    src: 'http://thecebu.co.kr/wp-content/uploads/2019/01/005.jpg',
    category: '호핑',
    title: '물고기들과 교감',
    sub: 'Cebu',
  },
  {
    src:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30884/194557_large_1525764053.jpg',
    category: '투어',
    title: '상어 투어',
    sub: 'Cebu',
  },
  {
    src:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/7979/44910_large_1525337841.jpg',
    category: '시티투어',
    title: '전망대, 카지노',
    sub: 'Cebu',
  },
];

const CategoryScreen = props => {
  const {navigation} = props;
  const [active, setActive] = useState('추천');
  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const tabs = ['추천', '리뷰수', '거리'];
  const shops = useSelector(state => state.shops, shallowEqual);

  useEffect(() => {
    if (Object.entries(shops).length != 0) {
      filteredShops = shops.filter(
        e => e.category == navigation.getParam('category'),
      );

      filteredShops = filteredShops.sort((a, b) => {
        return b.review - a.review;
      });

      setSelectedLists(filteredShops);
      setIsLoaded(true);
    }
  }, [shops]);

  handleCatTab = tab => {
    sortedLists = selectedLists.sort((a, b) => {
      return b[filerMap[tab]] - a[filerMap[tab]];
    });
    setActive(tab);
    setSelectedLists(sortedLists);
  };

  renderCatTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleCatTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  renderShopList = () => {
    return selectedLists.map((shop, idx) => (
      <CardShop key={idx} shop={shop} navigation={navigation}></CardShop>
    ));
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Block row center>
          <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            style={{marginRight: 12}}>
            <Ionicons size={30} name="ios-arrow-back" />
          </TouchableWithoutFeedback>
          <Text h2 bold>
            {cateMap[navigation.getParam('category')]}
          </Text>
        </Block>

        <Block row bottom center>
          <Text h2 style={{marginRight: 15}}>
            추천순
          </Text>
          <AntDesign size={26} name="bars" />
        </Block>
      </Block>
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            style={{
              paddingVertical: 15,
            }}></Block>
          {selectedLists.map((shop, idx) => (
            <CardShop key={idx} shop={shop} navigation={navigation}></CardShop>
          ))}
        </ScrollView>
      ) : (
        <Block style={styles.full}>
          <ActivityIndicator
            size="large"
            color={theme.colors.accent}></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
};

CategoryScreen.navigationOptions = {
  header: null,
};
CategoryScreen.defaultProps = {};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'white',
    paddingTop: theme.sizes.padding * 2.5,
    paddingBottom: 10,
    marginBottom: 2,
    paddingHorizontal: theme.sizes.padding,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.padding,
  },
  tab: {
    marginRight: theme.sizes.padding,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  category: {
    flexDirection: 'row',
    paddingVertical: theme.sizes.base / 2,
    width: width - theme.sizes.base * 3,
  },
});

export default CategoryScreen;
