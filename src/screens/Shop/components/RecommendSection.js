import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import CardRecommend from './CardRecommend';

import {Block, Text} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {style} from 'app/src/styles';

export default RecommendSection = ({navigation, recommendList}) => {
  return (
    <Block style={[style.shop.categories]}>
      <FlatList
        ListHeaderComponent={
          <Text h1 bold style={{marginBottom: 30}}>
            근처 추천 장소
          </Text>
        }
        data={recommendList}
        renderItem={({item}) => (
          <CardRecommend item={item} navigation={navigation}></CardRecommend>
        )}
        keyExtractor={item => item.id}
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
