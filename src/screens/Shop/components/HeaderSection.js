import React, {useState} from 'react';
import {Dimensions, StyleSheet, ScrollView, Animated} from 'react-native';

import {Block, CachedImage, Text} from 'app/src/components';
import {sizes, colors} from 'app/src/styles';

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
          outputRange: [0, -50],
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: 260,
    zIndex: -1,
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
