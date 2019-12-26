import React from 'react';
import {Dimensions, StyleSheet, ScrollView, Animated} from 'react-native';

import {Block, CachedImage} from 'app/src/components';

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
      <Block style={{position: 'relative'}}>
        <CachedImage
          key={shop.preview}
          uri={shop.preview}
          style={{
            height: 280,
            width: width,
            resizeMode: 'cover',
          }}
        />
        <Block
          style={{
            position: 'absolute',
            flex: 0,
            width: '100%',
            height: 260,
            background: 'linear-gradient(rgba(0,0,0,0.1),transparent)',
          }}></Block>
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
});
