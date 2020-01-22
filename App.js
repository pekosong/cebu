import './fixtimerbug';
import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, Image} from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';
import AppNavigator from './src/navigation/AppNavigator';

import {Block} from './src/components';

// YellowBox.ignoreWarnings(['Warning: ...']);
// console.ignoredYellowBox = ['Setting a timer'];

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Block style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Block>
    );
  }
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

async function loadResourcesAsync() {
  const imageAssets = cacheImages([
    require('app/src/assets/images/hello.jpg'),
    require('app/src/assets/images/search/restaurant.jpg'),
    require('app/src/assets/images/category/local.jpg'),
    require('app/src/assets/images/category/korean.jpg'),
    require('app/src/assets/images/category/bunsik.jpg'),
    require('app/src/assets/images/category/buffet.jpeg'),
    require('app/src/assets/images/category/western.jpg'),
    require('app/src/assets/images/category/japan.jpg'),
    require('app/src/assets/images/category/china.jpeg'),
    require('app/src/assets/images/category/market.jpg'),
    require('app/src/assets/images/category/bakery.jpeg'),
    require('app/src/assets/images/category/cafe.jpg'),
    require('app/src/assets/images/search/activity.jpg'),
    require('app/src/assets/images/search/hoping.jpg'),
    require('app/src/assets/images/search/gorae.jpg'),
    require('app/src/assets/images/search/city.jpg'),
    require('app/src/assets/images/search/diving.jpg'),
    require('app/src/assets/images/search/plane.jpg'),
    require('app/src/assets/images/search/sanding.jpg'),
    require('app/src/assets/images/search/massage.jpg'),
    require('app/src/assets/images/category/massage.jpg'),
    require('app/src/assets/images/category/beauty.jpeg'),
    require('app/src/assets/images/search/sanding.jpg'),
    require('app/src/assets/images/category/sight.jpeg'),
    require('app/src/assets/images/category/shopping.jpg'),
    require('app/src/assets/images/category/adult.jpg'),
    require('app/src/assets/images/category/livebar.jpg'),
    require('app/src/assets/images/category/club.jpg'),
    require('app/src/assets/images/category/karaoke.jpg'),
    require('app/src/assets/images/category/show.jpeg'),
    require('app/src/assets/images/category/pc.jpg'),
  ]);

  await Promise.all([...imageAssets]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
