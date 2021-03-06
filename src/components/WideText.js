import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import {colors} from 'app/src/styles';

export default WideText = props => {
  const {style, onPress, children} = props;
  return (
    <Block style={styles.inputRow}>
      <TouchableOpacity onPress={onPress}>
        <Block center middle row space="between">
          {children}
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

export const styles = StyleSheet.create({
  inputRow: {
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
});
