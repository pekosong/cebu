import React from 'react';
import {Dimensions, StyleSheet, Animated} from 'react-native';

import {Block, CachedImage} from 'app/src/components';

const {width} = Dimensions.get('window');

export default HeaderSection = ({shop}) => {
  const {preview} = shop;
  return (
    <Animated.View style={styles.container}>
      <Block style={{position: 'relative'}}>
        <CachedImage
          key={typeof preview === 'string' ? preview : preview[2]}
          uri={typeof preview === 'string' ? preview : preview[2]}
          style={{
            height: '100%',
            width: width,
            resizeMode: 'cover',
          }}
        />
        <Block
          style={{
            position: 'absolute',
            width: width,
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}></Block>
      </Block>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: 280,
    zIndex: -1,
  },
});
