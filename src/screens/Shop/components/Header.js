import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Block, CachedImage} from 'app/src/components';

const {width} = Dimensions.get('window');

export default HeaderSection = ({shop, HEIGHT}) => {
  const {preview} = shop;
  return (
    <Block>
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
