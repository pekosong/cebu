import React from 'react';
import {Dimensions, StyleSheet, ScrollView, Animated} from 'react-native';

import {CachedImage} from 'app/src/components';

const {width} = Dimensions.get('window');

export default HeaderSection = ({shop, top}) => {
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
        pagingEnabled>
        {shop.source.map(e => (
          <CachedImage
            key={e}
            uri={e}
            style={{
              height: 260,
              width: width,
              resizeMode: 'cover',
            }}
          />
        ))}
      </ScrollView>
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
