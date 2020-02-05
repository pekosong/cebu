import React, {useState, useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {ShopStoreContext} from 'app/src/store/shop';

import {Block, Text, CardRecommend} from 'app/src/components';

export default RecommendSection = ({navigation, shop}) => {
  const [showCount, setShowCount] = useState(15);
  const shopList = useContext(ShopStoreContext).shopList.filter(
    e => e.id != shop.id,
  );
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
    .slice(0, showCount);

  const itemSeparatorElement = () => (
    <Block
      style={{
        marginVertical: 8,
      }}></Block>
  );
  const headerElement = () => (
    <Text h1 bold style={{marginBottom: 30}}>
      근처 추천 장소
    </Text>
  );

  return (
    <FlatList
      ItemSeparatorComponent={itemSeparatorElement}
      contentContainerStyle={{paddingBottom: 50}}
      ListHeaderComponent={headerElement()}
      windowSize={7}
      onEndReached={() => {
        setShowCount(showCount + 15);
      }}
      data={sortedShop}
      renderItem={({item}) => (
        <CardRecommend
          item={item}
          navigation={navigation}
          isDistance={true}></CardRecommend>
      )}
      keyExtractor={(item, idx) => idx.toString()}
    />
  );
};

RecommendSection.defaultProps = {};

RecommendSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
