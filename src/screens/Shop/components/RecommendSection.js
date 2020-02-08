import React, {useState, useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {ShopStoreContext} from 'app/src/store/shop';

import {Block, Text, CardRecommend} from 'app/src/components';
import {sortByDistance} from 'app/src/utils';

export default RecommendSection = ({navigation, shop}) => {
  const shopList = useContext(ShopStoreContext).shopList.filter(
    e => e.id != shop.id,
  );

  const sortedShop = sortByDistance(shopList, shop)
    .sort((a, b) => a.distance > b.distance)
    .slice(0, 20);

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
