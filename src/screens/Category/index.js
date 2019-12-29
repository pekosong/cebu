import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {CardShop, CategoryTab, Block, Text, Loader} from 'app/src/components';
import {sizes} from 'app/src/styles';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

import RNPickerSelect from 'react-native-picker-select';

export const Dropdown = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        {label: 'Football', value: 'football'},
        {label: 'Baseball', value: 'baseball'},
        {label: 'Hockey', value: 'hockey'},
      ]}
    />
  );
};

const cateSrc = {
  전체: require('app/src/assets/images/search/activity.jpg'),
  호핑: require('app/src/assets/images/search/hoping.jpg'),
  고래투어: require('app/src/assets/images/search/gorae.jpg'),
  시티투어: require('app/src/assets/images/search/city.jpg'),
  다이빙: require('app/src/assets/images/search/diving.jpg'),
  경비행기: require('app/src/assets/images/search/plane.jpg'),
  샌딩: require('app/src/assets/images/search/sanding.jpg'),
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
  const [catActive, setCatActive] = useState('전체');

  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sort, setSort] = useState('review');

  const shops = useContext(ShopStoreContext).shopList;

  useEffect(() => {
    const filterShops = (filteredShops = shops.filter(
      e => e.category == navigation.getParam('category'),
    ));
    setSelectedLists(filterShops);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <Loader></Loader>;

  return (
    <>
      <Block
        style={[
          styles.header,
          {height: navigation.getParam('category') === 'Activity' ? null : 90},
        ]}>
        <Block style={styles.appBar}>
          <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            style={{marginRight: 12}}>
            <Ionicons size={30} name="ios-arrow-back" />
          </TouchableWithoutFeedback>
          <RNPickerSelect
            style={{
              inputIOS: {
                height: 32,
                fontSize: 17,
                paddingVertical: 12,
                paddingRight: 32,
                color: 'black',
              },
              inputAndroid: {
                flex: 1,
                width: 120,
                fontSize: 17,
                paddingVertical: 12,
                paddingRight: 32,
                textAlign: 'right',
                color: 'black',
              },
              iconContainer: {
                top: 2,
                right: 0,
              },
            }}
            placeholder={{}}
            onValueChange={value => setSort(value)}
            items={[
              {label: '평점 좋은 순', value: 'review'},
              {label: '리뷰 많은 순', value: 'reviewCnt'},
              {label: '저장 많은 순', value: 'like'},
            ]}
            Icon={() => {
              return <AntDesign size={26} name="bars" />;
            }}
          />
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
                  handleTab={tab => setCatActive(tab)}
                />
              ))}
            </Block>
          </ScrollView>
        )}
      </Block>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Block style={{marginBottom: 30}}></Block>}
        data={
          sort === 'review'
            ? selectedLists.sort((a, b) => b.review - a.review)
            : sort === 'reviewCnt'
            ? selectedLists.sort((a, b) => b.reviewCnt - a.reviewCnt)
            : selectedLists.sort((a, b) => b.like - a.reviewCnt)
        }
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
    paddingBottom: sizes.padding * 0.4,
  },
});
