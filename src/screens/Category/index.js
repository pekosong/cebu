import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import {
  CardShop,
  CategoryTab,
  Block,
  Loader,
  Text,
  Button,
} from 'app/src/components';
import {sizes, style, colors} from 'app/src/styles';

import FilterButton from './components/FilterButton';
import {
  mapCategory,
  restaurantSrc,
  restaurantCategory,
  activitySrc,
  activityCategory,
} from './categoryList.js';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

import Modal from 'react-native-modal';

const SortModal = ({sort, setSort, setShowSort}) => {
  return (
    <Block middle>
      {[
        {label: '평점 좋은 순', value: 'review'},
        {label: '리뷰 많은 순', value: 'reviewCnt'},
        {label: '저장 많은 순', value: 'like'},
      ].map((item, idx) =>
        item.value === sort ? (
          <Button
            border
            key={idx}
            onPress={() => {
              setSort(item.value);
              setShowSort(false);
            }}>
            <Text bold accent center>
              {item.label}
            </Text>
          </Button>
        ) : (
          <Button
            key={idx}
            onPress={() => {
              setSort(item.value);
              setShowSort(false);
            }}>
            <Text bold gray center>
              {item.label}
            </Text>
          </Button>
        ),
      )}
    </Block>
  );
};

const SearchModal = ({setSearch, setShowSearch}) => {
  const [text, setText] = useState('');
  return (
    <Block
      center
      style={{
        flex: 0,
        height: 180,
        backgroundColor: colors.white,
        borderRadius: 20,
        position: 'relative',
      }}>
      <Block style={{paddingVertical: 20}}>
        <TextInput
          autoFocus={true}
          style={{fontSize: 22, width: 260}}
          placeholder="여기는 어떠세요?"
          onChangeText={text => setText(text)}
          value={text}
          onSubmitEditing={() => {
            setSearch(text);
            setShowSearch(false);
          }}></TextInput>
        <Block flex={false} style={{marginVertical: 10}}>
          <Text h4 gray style={{marginBottom: 6}}>
            - 식당명 / 가게명
          </Text>
          <Text h4 gray>
            - 중식, 한식, 분식, 현지식
          </Text>
        </Block>
      </Block>
      <TouchableWithoutFeedback
        onPress={() => {
          setShowSearch(false);
        }}>
        <Ionicons size={50} color={colors.black} name="ios-close" />
      </TouchableWithoutFeedback>
    </Block>
  );
};

export default CategoryScreen = observer(props => {
  const {navigation} = props;
  const [catActive, setCatActive] = useState('전체');
  const [category, setCategory] = useState({});

  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('reviewCnt');

  const [showSearch, setShowSearch] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const [isKorean, setIsKorean] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [isBaby, setIsBaby] = useState(false);
  const [isReservation, setIsReservation] = useState(false);

  const [isMak, setIsMak] = useState(true);
  const [isCebu, setIsCebu] = useState(true);

  const shops = useContext(ShopStoreContext).shopList;

  useEffect(() => {
    const filterShops = (filteredShops = shops.filter(
      e => e.category == navigation.getParam('category'),
    ));
    setCategory(mapCategory[navigation.getParam('category')]);
    setSelectedLists(filterShops);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView>
      <Modal
        backdropOpacity={0.8}
        animationInTiming={200}
        useNativeDriver={true}
        isVisible={showSearch}>
        <SearchModal
          setSearch={setSearch}
          setShowSearch={setShowSearch}></SearchModal>
      </Modal>
      <Modal
        backdropOpacity={0.8}
        animationInTiming={200}
        useNativeDriver={true}
        isVisible={showSort}>
        <SortModal
          sort={sort}
          setSort={setSort}
          setShowSort={setShowSort}></SortModal>
      </Modal>
      <FlatList
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <Block
            style={{
              marginVertical: 12,
            }}
          />
        )}
        ListEmptyComponent={
          <Block
            middle
            style={{
              height: 550,
              paddingHorizontal: sizes.padding,
            }}>
            <Button border onPress={() => {}}>
              <Text bold accent center>
                검색 결과 없음
              </Text>
            </Button>
          </Block>
        }
        ListHeaderComponent={
          <Block style={[style.scrollTab]}>
            <Block center row space="between">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons size={30} name="ios-arrow-back" />
              </TouchableOpacity>
              <Block row style={{flex: 0}}>
                <TouchableOpacity
                  onPress={() => setShowSearch(true)}
                  style={{marginRight: 10}}>
                  <AntDesign size={24} name="search1" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowSort(true)}>
                  <AntDesign size={26} name="bars" />
                </TouchableOpacity>
              </Block>
            </Block>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.tabs}>
              {category.name.map((tab, idx) => (
                <CategoryTab
                  key={idx}
                  tab={tab}
                  image={category.src[tab]}
                  tabName={tab}
                  isActive={catActive == tab}
                  handleTab={tab => setCatActive(tab)}
                  isLast={category.name.length - 1 === idx}
                />
              ))}
            </ScrollView>
            {navigation.getParam('category') !== 'Place' && (
              <Block row center style={{marginTop: 12}}>
                <Text darkgray style={{marginRight: 8}}>
                  필터
                </Text>
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
                <Text darkgray style={{marginLeft: 8, marginRight: 8}}>
                  지역
                </Text>
                <FilterButton
                  isActive={isMak}
                  setActive={setIsMak}
                  text={'막탄'}
                />
                <FilterButton
                  isActive={isCebu}
                  setActive={setIsCebu}
                  text={'세부시티'}
                />
              </Block>
            )}
          </Block>
        }
        ListFooterComponent={<Block style={{marginBottom: 50}}></Block>}
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
          .filter(e => (isReservation ? e.reservation : e))
          .filter(e => (!isMak ? e.location !== '막탄' : e))
          .filter(e => (!isCebu ? e.location !== '세부시티' : e))
          .filter(e => (catActive !== '전체' ? e.tags.includes(catActive) : e))}
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
