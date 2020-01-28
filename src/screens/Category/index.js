import React, {useState, useEffect, useRef, useContext} from 'react';
import {StyleSheet, ScrollView, FlatList, Animated, View} from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {CardShop, CategoryTab, Block, Loader, Text} from 'app/src/components';
import {sizes, style} from 'app/src/styles';

import SortModal from './components/SortModal';
import FilterTab from './components/FilterTab';

import {mapCategory} from './categoryList.js';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

import Modal from 'react-native-modal';

const MAP = {
  reviewCnt: '리뷰 많은 순',
  review: '평점 좋은 순',
  like: '저장 많은 순',
};

export default CategoryScreen = observer(props => {
  const {navigation} = props;
  const [catActive, setCatActive] = useState('전체');
  const [category, setCategory] = useState({});

  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [sort, setSort] = useState('reviewCnt');
  const [showSort, setShowSort] = useState(false);

  const [isKorean, setIsKorean] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [isBaby, setIsBaby] = useState(false);

  const [isMak, setIsMak] = useState(true);
  const [isCebu, setIsCebu] = useState(true);

  const animatedScrollCategoryYValue = useRef(new Animated.Value(0)).current;
  const [fadeAnim] = useState(new Animated.Value(0));

  const shops = useContext(ShopStoreContext).shopList;

  useEffect(() => {
    let filterShops;
    if (navigation.getParam('category') === 'Food') {
      filterShops = shops.filter(
        e => e.category === 'Restaurant' && e.isDelivery,
      );
    } else {
      filterShops = shops.filter(
        e => e.category === navigation.getParam('category'),
      );
    }
    setCategory(mapCategory[navigation.getParam('category')]);
    setSelectedLists(filterShops);
    setIsLoaded(true);
  }, []);

  const filterList = [
    {
      isActive: isKorean,
      setActive: setIsKorean,
      title: '한국어',
    },
    {isActive: isPickup, setActive: setIsPickup, title: '픽업'},
    {
      isActive: isBaby,
      setActive: setIsBaby,
      title: '애기',
    },
    {
      isActive: isMak,
      setActive: setIsMak,
      title: '막탄',
    },
    {isActive: isCebu, setActive: setIsCebu, title: '세부시티'},
  ];

  handleScrollByCategoryY = e => {
    if (e.nativeEvent.contentOffset.y > 100) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 100) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1,
      }).start();
    }
  };

  const selectedList = () => {
    return selectedLists
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
      .filter(e => (catActive !== '전체' ? e.tags.includes(catActive) : e));
  };

  const itemSeparatorElement = () => (
    <Block
      style={{
        marginVertical: 12,
      }}
    />
  );

  const headerElement = () => (
    <Block
      style={{
        paddingHorizontal: sizes.padding,
        marginBottom: 16,
      }}>
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
        <FilterTab filterList={filterList} />
      )}
    </Block>
  );

  const emptyElement = () => (
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
  );

  const footerElement = () => <Block style={{marginBottom: 50}}></Block>;

  if (!isLoaded) return <Loader></Loader>;

  return (
    <Block>
      <Modal
        backdropOpacity={0.1}
        animationInTiming={500}
        useNativeDriver={true}
        isVisible={showSort}
        onBackdropPress={() => setShowSort(false)}>
        <SortModal
          sort={sort}
          setSort={setSort}
          setShowSort={setShowSort}></SortModal>
      </Modal>
      <Block style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={30} name="ios-arrow-back" />
        </TouchableOpacity>
        <Block center row style={{flex: 0}}>
          <Text h3 darkgray style={{marginRight: 10}}>
            {MAP[sort]}
          </Text>
          <TouchableOpacity onPress={() => setShowSort(true)}>
            <AntDesign size={26} name="bars" />
          </TouchableOpacity>
        </Block>
      </Block>
      <FilterTab fadeAnim={fadeAnim} filterList={filterList} isTop />
      <FlatList
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedScrollCategoryYValue}}}],
          {
            listener: event => {
              handleScrollByCategoryY(event);
            },
          },
        )}
        contentContainerStyle={[{flexGrow: 1}]}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={2} // Reduce initial render amount
        maxToRenderPerBatch={1} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={7}
        onEndReached={() => console.log('hello')}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={itemSeparatorElement}
        ListEmptyComponent={emptyElement()}
        ListHeaderComponent={headerElement()}
        ListFooterComponent={footerElement()}
        data={selectedList()}
        renderItem={({item}) => (
          <CardShop shop={item} navigation={navigation}></CardShop>
        )}
        keyExtractor={item => item.id}
      />
    </Block>
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
    marginBottom: 12,
    marginHorizontal: -sizes.padding,
    paddingHorizontal: sizes.padding,
  },
});
