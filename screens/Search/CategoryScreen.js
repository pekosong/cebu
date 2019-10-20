import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import StarRating from 'react-native-star-rating';
import {Ionicons} from '@expo/vector-icons';
import {Badge, Button, Block, Text, CachedImage} from '../../components';
import {theme} from '../../constants';

import {useSelector, shallowEqual} from 'react-redux';

const {width} = Dimensions.get('window');

const cateMap = {
  Restaurant: '식당',
  Message: '마사지',
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

const CategoryScreen = props => {
  const {navigation} = props;
  const [active, setActive] = useState('추천');
  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const tabs = ['추천', '리뷰수', '거리'];
  const shops = useSelector(state => state.shops, shallowEqual);

  useEffect(() => {
    filteredShops = shops.filter(
      e => e.category == navigation.getParam('category'),
    );

    filteredShops = filteredShops.sort((a, b) => {
      return b.review - a.review;
    });

    setSelectedLists(filteredShops);
    setIsLoaded(true);
  }, []);

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

  renderStar = cnt => {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={cnt}
        starSize={10}
        fullStarColor={theme.colors.accent}
        containerStyle={{width: 20}}
      />
    );
  };

  renderShopList = () => {
    return selectedLists.map(shop => (
      <TouchableOpacity
        key={shop.name}
        onPress={() => {
          navigation.navigate('Shop', {
            shopId: shop.id,
          });
        }}>
        <Block middle shadow style={styles.category}>
          <Block flex={1}>
            <CachedImage
              key={shop.preview}
              uri={shop.preview}
              style={{height: 70, width: '100%'}}
            />
          </Block>
          <Block middle flex={2.8} style={{paddingLeft: 10}}>
            <Text h4 bold height={25}>
              {shop.name}
            </Text>
            <Text caption h4>
              {shop.tags.join(', ')}
            </Text>
            <Block row style={{marginTop: 5}}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={shop.review}
                starSize={15}
                fullStarColor={theme.colors.accent}
                containerStyle={{width: 20}}
              />
              <Text caption style={{marginLeft: 50}}>
                {'  '}
                리뷰{' '}
                {shop.reviewCnt
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </Block>
          </Block>
          <Block middle center flex={0.4} style={{position: 'relative'}}>
            <Text>1.5</Text>
            <Text>km</Text>
            {shop.pickup ? (
              <Badge
                size={18}
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                }}
                color={theme.colors.primary}>
                <Ionicons color={theme.colors.white} size={12} name="md-car" />
              </Badge>
            ) : null}
          </Block>
        </Block>
      </TouchableOpacity>
    ));
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Block center row>
            <Ionicons
              size={30}
              color={theme.colors.black}
              name="ios-arrow-back"
            />
          </Block>
        </Button>
        <Button>
          <Text h1 bold>
            {cateMap[navigation.getParam('category')]}
          </Text>
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderCatTab(tab))}
      </Block>
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex={false} row space="between" style={styles.categories}>
            {renderShopList()}
          </Block>
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
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.padding,
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
  categories: {
    flexWrap: 'wrap',
    marginHorizontal: theme.sizes.padding,
    marginBottom: theme.sizes.base * 1,
  },
  category: {
    flexDirection: 'row',
    paddingVertical: theme.sizes.base / 2,
    width: width - theme.sizes.base * 3,
  },
});

export default CategoryScreen;
