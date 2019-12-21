import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';

import {Block, Text} from 'app/src/components';
import {mocks} from 'app/src/constants';
import {style, colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

import {AntDesign} from '@expo/vector-icons';

export default RecommendSection = ({navigation, recommendList, shop}) => {
  return (
    <Block style={[style.shop.categories]}>
      <Text h1 bold style={{marginBottom: 30}}>
        근처 추천 장소
      </Text>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}>
        {recommendList.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              navigation.push('Shop', {
                shopId: item.shopCode,
              });
            }}>
            <Block style={styles.elementContainer}>
              <Block
                style={{
                  flex: 0,
                  width: 80,
                  height: 80,
                  marginRight: 16,
                }}>
                <Image style={styles.imageStyle} source={item.src}></Image>
              </Block>
              <Block>
                <Text accent>{item.tag}</Text>
                <Text h3 bold style={{marginVertical: 5}}>
                  {item.shop}
                </Text>
                <Text gray>
                  필리핀 인기 만점의 전신 아로마 마사지 제공하며, 필리핀 전통
                </Text>
                <Block row style={{marginVertical: 5}}>
                  <AntDesign
                    size={13}
                    name="star"
                    style={{color: colors.primary}}
                  />
                  <Text style={{marginLeft: 5}}>
                    {`3 · 리뷰 ${convertComma(shop.reviewCnt)}`}
                  </Text>
                  <Text style={{marginLeft: 5}}>
                    {'· 저장 ' + convertComma(shop.likes)}
                  </Text>
                </Block>
              </Block>
            </Block>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Block>
  );
};

RecommendSection.defaultProps = {
  recommendList: mocks.recommendList,
};

RecommendSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 3,
    height: 130,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
