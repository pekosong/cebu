import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

import Block from './Block';

import {colors, style} from 'app/src/styles';

export default Loader = () => {
  return (
    <Block style={style.full}>
      <ActivityIndicator size="large" color={colors.accent}></ActivityIndicator>
    </Block>
  );
};

export const styles = StyleSheet.create({});
