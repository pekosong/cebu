import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {Block, Text, CardShop} from '../../components';
import {mocks} from '../../constants';

import {theme} from '../../styles';
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

const activityCategory = [
  '전체',
  '호핑',
  '고래투어',
  '시티투어',
  '다이빙',
  '경비행기',
  '샌딩',
];

const cateSrc = {
  전체: require('../../assets/images/search/activity.jpg'),
  호핑: require('../../assets/images/search/hoping.jpg'),
  고래투어: require('../../assets/images/search/gorae.jpg'),
  시티투어: require('../../assets/images/search/city.jpg'),
  다이빙: require('../../assets/images/search/diving.jpg'),
  경비행기: require('../../assets/images/search/plane.jpg'),
  샌딩: require('../../assets/images/search/sanding.jpg'),
};

const CategoryScreen = props => {
  const {navigation} = props;
  const [active, setActive] = useState('추천');
  const [catActive, setCatActive] = useState('전체');

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

  renderShopList = () => {
    return selectedLists.map((shop, idx) => (
      <CardShop key={idx} shop={shop} navigation={navigation}></CardShop>
    ));
  };

  renderSongTab = tab => {
    const isActive = catActive == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleSongTab(tab)}
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
            color: isActive ? theme.colors.black : theme.colors.gray,
          }}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  handleSongTab = tab => {
    // if (tab == 'All') {
    //   setSelectedFavorites(favorites);
    // } else {
    //   setSelectedFavorites(favorites.filter(shop => shop.category == tab));
    // }
    setCatActive(tab);
  };

  return (
    <Block>
      <Block style={styles.header}>
        <Block style={styles.appBar}>
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
        {navigation.getParam('category') === 'Activity' ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Block style={styles.tabs}>
              {activityCategory.map(tab => renderSongTab(tab))}
            </Block>
          </ScrollView>
        ) : null}
      </Block>
      {isLoaded ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingTop: theme.sizes.base * 0.8}}>
          {selectedLists.length != 0
            ? selectedLists.map((shop, idx) => (
                <CardShop
                  key={idx}
                  shop={shop}
                  isActivity={false}
                  navigation={navigation}></CardShop>
              ))
            : mocks.ActivityList.map((shop, idx) => (
                <CardShop
                  key={idx}
                  shop={shop}
                  isActivity={true}
                  navigation={navigation}></CardShop>
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
  appBar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.sizes.padding,
    marginBottom: 10,
  },
  header: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: theme.sizes.padding * 2.5,
    marginBottom: 2,
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
    flex: 0,
    flexDirection: 'row',
    paddingLeft: theme.sizes.padding,
    marginTop: 5,
  },
  tab: {
    marginRight: theme.sizes.base * 1.2,
    paddingBottom: theme.sizes.base * 0.8,
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
