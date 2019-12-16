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
      <Text h2 bold style={{marginBottom: 30}}>
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
                  width: 110,
                  height: 120,
                  marginRight: 10,
                }}>
                <Image style={styles.imageStyle} source={item.src}></Image>
                <Favorite
                  shop={{
                    id: item.shopCode,
                    name: item.shop,
                    preview: item.url,
                  }}></Favorite>
                <Block style={styles.overlap}></Block>
              </Block>
              <Block>
                <Text bold accent>
                  {item.tag}
                </Text>
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
    height: 140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  overlap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
  },
});
