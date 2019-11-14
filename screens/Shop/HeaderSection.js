import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, ScrollView, Animated} from 'react-native';

import {Block, CachedImage, Text} from '../../components';
import {theme} from '../../constants';

const {width} = Dimensions.get('window');

export default HeaderSection = props => {
  const {source, yAnim, shop, top} = props;
  const [imageNum, setImageNum] = useState(1);

  const [maxImageNum, setMaxImageNum] = useState(1);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (source) {
      setIsLoaded(true);
      setMaxImageNum(source.length);
    }
  }, [source]);

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
        opacity: yAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
        width: width,
        height: 250,
      }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScrollByX}
        style={{zIndex: 0}}>
        {isLoaded ? (
          source.map(e => (
            <CachedImage
              key={e}
              uri={e}
              style={{
                height: 250,
                width: width,
                resizeMode: 'cover',
              }}
            />
          ))
        ) : (
          <Block style={{height: 250, zIndex: 0}}></Block>
        )}
      </ScrollView>

      <Block
        center
        middle
        style={{
          position: 'absolute',
          bottom: 60,
          right: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: 10,
          paddingVertical: 3,
          paddingHorizontal: 8,
        }}>
        <Text white bold size={11}>
          {imageNum + ' / ' + maxImageNum}
        </Text>
      </Block>
      <Animated.View
        style={[
          styles.shopTitle,
          {
            top: 200,
          },
        ]}>
        <Block top row space="between">
          <Block>
            <Text bold style={{fontSize: 25, marginBottom: 5, marginRight: 5}}>
              {shop.name}
            </Text>
            <Text h3 gray style={styles.content}>
              {shop.engName}
            </Text>
          </Block>
          <Text bold style={{color: theme.colors.accent}}>
            {shop.tags[0]}
          </Text>
        </Block>
        <Text gray style={{fontSize: 14}}>
          {'별점 ' +
            shop.review +
            ' | ' +
            '리뷰 ' +
            shop.reviewCnt +
            ' | ' +
            '저장 ' +
            shop.likes}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
  },
  shopTitle: {
    position: 'absolute',
    height: 120,
    width: width - 60,
    backgroundColor: 'white',
    marginHorizontal: 30,
    padding: theme.sizes.padding * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    zIndex: 100,
  },
  content: {
    marginBottom: 15,
  },
});
