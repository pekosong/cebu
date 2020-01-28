import React from 'react';
import {Animated, StyleSheet, Dimensions} from 'react-native';
import {sizes, colors} from 'app/src/styles';
const {width} = Dimensions.get('window');

export default TabBar = ({fadeAnim, xAnim, children, style, inFlat}) => {
  const opacity = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
    useNativeDriver: true,
  });
  return (
    <Animated.View
      style={[
        styles.tabs,
        {
          top: style ? 0 : 85,
          position: inFlat ? 'relative' : 'absolute',
          opacity: inFlat ? 1 : opacity,
        },
        style,
      ]}>
      {children}
      <Animated.View
        style={{
          ...styles.bottomBar,
          left: xAnim,
        }}></Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    zIndex: 1000,
    backgroundColor: '#fff',
    paddingHorizontal: sizes.padding,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.gray2,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: colors.black,
    width: (width - sizes.padding * 2) / 4,
  },
});
