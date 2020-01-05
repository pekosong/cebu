import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {CardShop, CategoryTab, Block, Loader, Text} from 'app/src/components';
import {sizes, style} from 'app/src/styles';

import FilterButton from './components/FilterButton';

import {TouchableOpacity} from 'react-native-gesture-handler';

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

  const [isKorean, setIsKorean] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [isBaby, setIsBaby] = useState(false);
  const [isReservation, setIsReservation] = useState(false);

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
    <SafeAreaView>
      <FlatList
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Block>
            <Text>song</Text>
          </Block>
        }
        ListHeaderComponent={
          <Block style={[style.scrollTab, {marginBottom: 20}]}>
            <Block center row space="between">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons size={30} name="ios-arrow-back" />
              </TouchableOpacity>
              <RNPickerSelect
                style={{
                  inputIOS: {
                    flex: 1,
                    height: 32,
                    fontSize: 17,
                    paddingVertical: 12,
                    paddingRight: 32,
                    color: 'black',
                  },
                  inputAndroid: {
                    flex: 1,
                    height: 20,
                    width: 120,
                    fontSize: 17,
                    paddingVertical: 12,
                    paddingRight: 32,
                    textAlign: 'right',
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  iconContainer: {
                    top: 2,
                    justifyContent: 'center',
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
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.tabs}>
                {activityCategory.map((tab, idx) => (
                  <CategoryTab
                    key={idx}
                    tab={tab}
                    image={cateSrc[tab]}
                    tabName={tab}
                    isActive={catActive == tab}
                    handleTab={tab => setCatActive(tab)}
                    isLast={activityCategory.length - 1 === idx}
                  />
                ))}
              </ScrollView>
            )}
            {navigation.getParam('category') !== 'Place' && (
              <Block row style={{marginTop: 8}}>
                <FilterButton
                  isActive={isKorean}
                  setActive={setIsKorean}
                  text={'한국어'}
                />
                <FilterButton
                  isActive={isPickup}
                  setActive={setIsPickup}
                  text={'픽업'}
                />
                <FilterButton
                  isActive={isBaby}
                  setActive={setIsBaby}
                  text={'애기'}
                />
                <FilterButton
                  isActive={isReservation}
                  setActive={setIsReservation}
                  text={'예약'}
                />
              </Block>
            )}
          </Block>
        }
        data={selectedLists
          .sort((a, b) => {
            if (sort === 'review') {
              return b.review - a.review;
            } else if (sort === 'reviewCnt') {
              return b.reviewCnt - a.reviewCnt;
            } else {
              return b.like - a.like;
            }
          })
          .filter(e => (isKorean ? e.korean : e))
          .filter(e => (isBaby ? e.baby : e))
          .filter(e => (isPickup ? e.pickup : e))
          .filter(e => (isReservation ? e.reservation : e))}
        renderItem={({item}) => (
          <CardShop shop={item} navigation={navigation}></CardShop>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
});

CategoryScreen.navigationOptions = {
  header: null,
};
CategoryScreen.defaultProps = {};

const styles = StyleSheet.create({
  tabs: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: -sizes.padding,
    paddingHorizontal: sizes.padding,
  },
});
