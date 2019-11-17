import React, {useState} from 'react';
import {Dimensions, StyleSheet, ScrollView, Animated} from 'react-native';

import {Block, CachedImage, Text} from 'app/components';
import {AntDesign} from '@expo/vector-icons';
import {sizes, colors} from 'app/styles';
import {convertComma} from 'app/utils';

const {width} = Dimensions.get('window');

export default HeaderSection = props => {
  const {shop, top} = props;
  const [imageNum, setImageNum] = useState(1);

  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };
  return (
    <Animated.View
      style={{
        ...styles.container,
        top: top.interpolate({
          inputRange: [0, 200],
          outputRange: [0, -150],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
        opacity: top.interpolate({
          inputRange: [170, 200],
          outputRange: [1, 0],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
      }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScrollByX}>
        {shop.source.map(e => (
          <CachedImage
            key={e}
            uri={e}
            style={{
              height: 250,
              width: width,
              resizeMode: 'cover',
            }}
          />
        ))}
      </ScrollView>
      <Block style={styles.imageNum}>
        <Text white bold size={11}>
          {imageNum + ' / ' + shop.source.length}
        </Text>
      </Block>
      <Block style={styles.shopTitle}>
        <Block middle center>
          <Text h1 bold>
            {shop.name}
          </Text>
          <Text>{shop.tags.join(', ')}</Text>
          <Block left row center>
            <AntDesign
              size={20}
              color={colors.primary}
              name="heart"></AntDesign>
            <Text h3 bold style={{marginLeft: 5}}>
              {shop.review}
            </Text>
          </Block>
          <Text>
            {'리뷰 ' +
              convertComma(shop.reviewCnt) +
              ' | ' +
              '저장 ' +
              shop.likes}
          </Text>
        </Block>
      </Block>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: 260,
    zIndex: -10,
  },
  shopTitle: {
    top: 210,
    position: 'absolute',
    height: 140,
    width: width - 60,
    backgroundColor: 'white',
    marginHorizontal: 30,
    paddingVertical: sizes.padding * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 100,
  },
  imageNum: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
