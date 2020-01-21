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
    require('./src/assets/images/search/activity.jpg'),
    require('./src/assets/images/cebu_food1.jpg'),
    require('./src/assets/images/cebu_food2.jpeg'),
    require('./src/assets/images/cebu_food3.jpeg'),
    require('./src/assets/images/cebu_food4.jpg'),
    require('./src/assets/images/cebu_massage1.jpg'),
    require('./src/assets/images/cebu_massage2.jpeg'),
    require('./src/assets/images/cebu_massage3.jpg'),
    require('./src/assets/images/cebu_massage4.jpg'),
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
