import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  View,
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
import {mapCategory} from './categoryList.js';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

import Modal from 'react-native-modal';
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SortModal = ({sort, setSort, setShowSort}) => {
  return (
    <Block bottom style={{marginBottom: -15}}>
      <Block
        style={{
          flex: 0,
          backgroundColor: 'white',
          marginHorizontal: -sizes.padding,
        }}>
        <Block
          onPress={() => {
            setShowSort(false);
          }}
          style={{
            flex: 0,
            paddingVertical: 16,
            borderBottomWidth: 0.8,
            borderBottomColor: colors.gray2,
            position: 'relative',
          }}>
          <Text h3 bold center>
            정렬 순서
          </Text>
          <Block
            style={{
              flex: 0,
              position: 'absolute',
              right: 20,
              top: 7,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setShowSort(false);
              }}>
              <Ionicons size={40} color={colors.black} name="ios-close" />
            </TouchableWithoutFeedback>
          </Block>
        </Block>
        {[
          {label: '리뷰 많은 순', value: 'reviewCnt'},
          {label: '평점 좋은 순', value: 'review'},
          {label: '저장 많은 순', value: 'like'},
        ].map((item, idx) => (
          <Block
            key={idx}
            row
            style={{
              flex: 0,
              borderBottomWidth: 0.3,
              borderBottomColor: colors.gray2,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setSort(item.value);
                setShowSort(false);
              }}>
              <Block
                row
                middle
                center
                style={{
                  height: 60,
                }}>
                {sort === item.value && (
                  <Ionicons
                    style={{marginRight: 10}}
                    size={40}
                    color={colors.primary}
                    name="ios-checkmark"
                  />
                )}
                <Text h4 center>
                  {item.label}
                </Text>
              </Block>
            </TouchableWithoutFeedback>
          </Block>
        ))}
      </Block>
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
    <SafeAreaView style={{flex: 1}}>
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
        backdropOpacity={0.1}
        animationInTiming={500}
        useNativeDriver={true}
        isVisible={showSort}>
        <SortModal
          sort={sort}
          setSort={setSort}
          setShowSort={setShowSort}></SortModal>
      </Modal>
      <FlatList
        style={{flex: 1}}
        disableVirtualization={false}
        contentContainerStyle={[{flexGrow: 1}]}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <Block
            style={{
              height: '100%',
              marginVertical: 12,
            }}
          />
        )}
        ListEmptyComponent={
          <Block middle>
            <Block flex={false}>
              <Text h1 bold center>
                업체 추가 중
              </Text>
              <Text h3 center darkgray style={{marginTop: 10}}>
                현재 업체를 준비 중에 있습니다.
              </Text>
            </Block>
          </Block>
        }
        ListHeaderComponent={
          <Block style={[style.scrollTab]}>
            <Block center row space="between">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons size={30} name="ios-arrow-back" />
              </TouchableOpacity>
              <Block row style={{flex: 0}}>
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
