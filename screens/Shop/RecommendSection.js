import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Card, Block, Text} from '../../components';
import {theme, mocks} from '../../constants';

export default function RecommendSection(props) {
  const {navigation, recommendList, shop} = props;

  return (
    <Block style={{...styles.categories, marginTop: 10}}>
      <Text h3 bold style={styles.content}>
        이 근처의 추천 장소
      </Text>
      <Text h4 style={{marginBottom: 10}}>
        {shop.name} 근처의 이런 곳은 어때요?
      </Text>
      <Block
        style={{
          marginLeft: -theme.sizes.padding,
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          style={{
            paddingLeft: theme.sizes.padding,
          }}>
          {recommendList.map((item, idx) => (
            <Card key={idx} item={item} navigation={navigation}>
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

const styles = StyleSheet.create({
  categories: {
    marginVertical: 10,
  },
  content: {
    marginBottom: 15,
  },
});
