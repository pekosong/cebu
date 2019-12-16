import React, {useState, useEffect, useContext} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import CategoryTab from './components/CategoryTab';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {CardShop, Block, Text} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {colors, sizes, style} from 'app/src/styles';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

const {width} = Dimensions.get('window');

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

export default CategoryScreen = observer(props => {
  const {navigation} = props;
  const [active, setActive] = useState('추천');
  const [catActive, setCatActive] = useState('전체');

  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const tabs = ['추천', '리뷰수', '거리'];

  const shops = useContext(ShopStoreContext).shopList;

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

  handleSongTab = tab => {
    setCatActive(tab);
  };

  renderShopList = () => {
    const list = selectedLists.length != 0 ? selectedLists : mocks.ActivityList;
    return list.map((shop, idx) => (
      <CardShop
        key={idx}
        shop={shop}
        isActivity={false}
        navigation={navigation}></CardShop>
    ));
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
        {navigation.getParam('category') === 'Activity' && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Block style={styles.tabs}>
              {activityCategory.map((tab, idx) => (
                <CategoryTab
                  key={idx}
                  tab={tab}
                  isActive={catActive == tab}
                  handleSongTab={handleSongTab}></CategoryTab>
              ))}
            </Block>
          </ScrollView>
        )}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: sizes.padding,
          marginBottom: 30,
          paddingBottom: 50,
        }}>
        {renderShopList()}
      </ScrollView>
    </>
  );
});

CategoryScreen.navigationOptions = {
  header: null,
};
CategoryScreen.defaultProps = {};

const styles = StyleSheet.create({
  appBar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
    marginTop: 5,
    marginBottom: 10,
  },
  header: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: sizes.padding * 2,
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
    paddingLeft: sizes.padding,
    marginTop: 5,
  },
});
