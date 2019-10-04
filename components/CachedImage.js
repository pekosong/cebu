import React, {useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Image} from 'react-native-expo-image-cache';

const preview = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
};
// const uri =
//   'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage1.jpg?alt=media&token=01df0f3f-75f6-4c4d-ab1f-07353fd528aa';

const {height, width} = Dimensions.get('window');

export default CachedImage = props => {
  const {style, uri} = props;

  return <Image tint="dark" style={{...style}} {...{preview, uri}} />;
};

const styles = StyleSheet.create({});
