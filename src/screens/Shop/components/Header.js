import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Block, CachedImage} from 'app/src/components';

const {width} = Dimensions.get('window');

export default HeaderSection = ({top, shop, HEIGHT}) => {
  const {preview} = shop;

  const top_ = top.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -100],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });

  return (
    <Block animated style={{top: top_}}>
      <CachedImage
        key={typeof preview === 'string' ? preview : preview[2]}
        uri={typeof preview === 'string' ? preview : preview[2]}
        style={{
          height: HEIGHT,
        }}
      />
      <Block
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: width,
          height: HEIGHT,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}></Block>
    </Block>
  );
};

const styles = StyleSheet.create({});
