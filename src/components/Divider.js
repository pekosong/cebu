import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors, sizes} from 'app/src/styles';

export default class Divider extends Component {
  render() {
    const {color, style, ...props} = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <View color={color || colors.gray2} style={dividerStyles} {...props} />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    marginLeft: -sizes.padding,
    marginRight: -sizes.padding,
    height: 0,
    marginVertical: sizes.base * 1.5,
    borderWidth: 4,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
