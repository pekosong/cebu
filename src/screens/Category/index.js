import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {CardShop, CategoryTab, Block, Text, Loader} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {sizes} from 'app/src/styles';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

const cateSrc = {
  전체: require('app/src/assets/images/search/activity.jpg'),
  호핑: require('app/src/assets/images/search/hoping.jpg'),
  고래투어: require('app/src/assets/images/search/gorae.jpg'),
  시티투어: require('app/src/assets/images/search/city.jpg'),
  다이빙: require('app/src/assets/images/search/diving.jpg'),
  경비행기: require('app/src/assets/images/search/plane.jpg'),
  샌딩: require('app/src/assets/images/search/sanding.jpg'),
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
      filteredShops = shops
        .filter(e => e.category == navigation.getParam('category'))
        .sort((a, b) => b.review - a.review);
      if (filteredShops.length) {
        setSelectedLists(filteredShops);
        setIsLoaded(true);
      } else {
        setSelectedLists(mocks.ActivityList);
        setIsLoaded(true);
      }
    }
  }, []);

  handleSongTab = tab => setCatActive(tab);

  if (!isLoaded) return <Loader></Loader>;

  return (
    <>
      <Block
        style={[
          styles.header,
          {height: navigation.getParam('category') === 'Activity' ? null : 90},
        ]}>
        <Block style={styles.appBar}>
          <Block row center>
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
              style={{marginRight: 12}}>
              <Ionicons size={30} name="ios-arrow-back" />
            </TouchableWithoutFeedback>
          </Block>
          <Block row bottom center>
            <Text h3 style={{marginRight: 10}}>
              추천순
            </Text>
            <TouchableWithoutFeedback onPress={() => console.log('song')}>
              <AntDesign size={26} name="bars" />
            </TouchableWithoutFeedback>
          </Block>
        </Block>

        {navigation.getParam('category') === 'Activity' && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Block style={styles.tabs}>
              {activityCategory.map((tab, idx) => (
                <CategoryTab
                  key={idx}
                  tab={tab}
                  image={cateSrc[tab]}
                  tabName={tab}
                  isActive={catActive == tab}
                  handleTab={handleSongTab}
                />
              ))}
            </Block>
          </ScrollView>
        )}
      </Block>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Block style={{marginBottom: 30}}></Block>}
        data={selectedLists}
        renderItem={({item}) => (
          <CardShop shop={item} navigation={navigation}></CardShop>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
});

CategoryScreen.navigationOptions = {
  header: null,
};
CategoryScreen.defaultProps = {};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: sizes.padding * 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  appBar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
    marginTop: 4,
    marginBottom: 10,
  },
  tabs: {
    flex: 0,
    flexDirection: 'row',
    paddingLeft: sizes.padding,
    marginTop: 5,
    paddingBottom: sizes.padding * 0.5,
  },
});
