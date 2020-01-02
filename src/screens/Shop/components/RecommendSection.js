import React, {useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import CardRecommend from './CardRecommend';

import {ShopStoreContext} from 'app/src/store/shop';

import {Block, Text} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {style, colors} from 'app/src/styles';

export default RecommendSection = ({navigation, shop}) => {
  const shopList = useContext(ShopStoreContext)
    .shopList.filter(e => e.id != shop.id)
    .filter(e => ['Massage', 'Restaurant'].includes(e.category));

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  };

  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  const distances = shopList.map(e => ({
    shop: e,
    distance: getDistanceFromLatLonInKm(
      shop.latitude,
      shop.longitude,
      e.latitude,
      e.longitude,
    ),
  }));

  const sortedShop = distances
    .sort((a, b) => a.distance > b.distance)
    .slice(0, 7);

  return (
    <Block style={[style.shop.categories]}>
      <FlatList
        ItemSeparatorComponent={() => (
          <Block
            style={{
              borderBottomWidth: 0.3,
              borderBottomColor: colors.gray,
              marginVertical: 10,
            }}></Block>
        )}
        contentContainerStyle={{paddingBottom: 50}}
        ListHeaderComponent={
          <Text h1 bold style={{marginBottom: 30}}>
            근처 추천 장소
          </Text>
        }
        data={sortedShop}
        renderItem={({item}) => (
          <CardRecommend item={item} navigation={navigation}></CardRecommend>
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </Block>
  );
};

RecommendSection.defaultProps = {
  recommendList: mocks.recommendList,
};

RecommendSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
