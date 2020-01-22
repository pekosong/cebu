import React from 'react';
import {Animated} from 'react-native';

const TabBar = ({fadeAnim, xAnim, children}) => (
  <Animated.View
    style={[
      styles.tabs,
      {
        top: 90,
        opacity: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
      },
    ]}>
    {children}
    <Animated.View
      style={{
        ...styles.bottomBar,
        left: xAnim,
      }}></Animated.View>
  </Animated.View>
);

const styles = StyleSheet.create({
  tabs: {
    zIndex: 1000,
    backgroundColor: '#fff',
    paddingHorizontal: sizes.padding,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.gray2,
  },
  tab: {
    width: (width - sizes.padding * 2) / 4,
    paddingVertical: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: colors.black,
    width: (width - sizes.padding * 2) / 4,
  },
});
