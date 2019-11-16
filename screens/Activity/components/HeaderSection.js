import React, {useState} from 'react';
import {Dimensions, StyleSheet, ScrollView, Animated} from 'react-native';

import {Block, CachedImage, Text} from '../../../components';
import {AntDesign} from '@expo/vector-icons';
import {theme} from '../../../styles';
import {convertComma} from '../../../utils';

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
        position: 'absolute',
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
        width: width,
        height: 260,
        zIndex: -10,
      }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScrollByX}
        style={{zIndex: 0}}>
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
      <Animated.View style={styles.shopTitle}>
        <Block middle center>
          <Text h1 bold>
            {shop.name}
          </Text>
          <Text>{shop.tags.join(', ')}</Text>
          <Block left row center>
            <AntDesign
              size={20}
              color={theme.colors.primary}
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
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  shopTitle: {
    top: 210,
    position: 'absolute',
    height: 140,
    width: width - 60,
    backgroundColor: 'white',
    marginHorizontal: 30,
    paddingVertical: theme.sizes.padding * 0.8,
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
