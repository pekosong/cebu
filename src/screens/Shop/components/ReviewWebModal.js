import React from 'react';
import {SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';
import CloseButton from './CloseButton';

export default ReviewWebModal = props => {
  const {setwebViewVisible, page} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CloseButton setwebViewVisible={setwebViewVisible}></CloseButton>
      <WebView source={{uri: page}}></WebView>
    </SafeAreaView>
  );
};
