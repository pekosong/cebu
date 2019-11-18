import React from 'react';
import {StyleSheet} from 'react-native';

import {Image} from 'react-native-expo-image-cache';

const preview = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
};
export default CachedImage = props => {
  const {style, uri} = props;

  return <Image tint="light" style={{...style}} {...{uri}} />;
};

const styles = StyleSheet.create({});
