import React from 'react';

import {StyleSheet, ScrollView} from 'react-native';
import {Card, Block, Text} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {sizes, style} from 'app/src/styles';

export default function RecommendSection(props) {
  const {navigation, recommendList, shop} = props;

  return (
    <Block style={{...style.shop.container, paddingLeft: sizes.padding}}>
      <Text h3 bold style={style.shop.content}>
        이 근처의 추천 장소
      </Text>
      <Text h4 style={{marginBottom: 10}}>
        {shop.name} 근처의 이런 곳은 어때요?
      </Text>
      <Block
        style={{
          marginLeft: -sizes.padding,
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          style={{
            paddingLeft: sizes.padding,
          }}>
          {recommendList.map((item, idx) => (
            <Card
              key={idx}
              item={item}
              navigation={navigation}
              shopId={shop.id}>
              <Text
                gray
                caption
                style={{
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                {item.beforePrice}원
              </Text>
              <Text h4 bold style={{marginTop: 5}}>
                {item.afterPrice}원
              </Text>
            </Card>
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
}

RecommendSection.defaultProps = {
  recommendList: mocks.recommendList,
};

RecommendSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
