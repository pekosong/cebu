import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import Block from './Block';
import {theme} from '../styles';

export default class Divider extends Component {
  render() {
    const {color, style, ...props} = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <Block
        color={color || theme.colors.gray2}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    marginLeft: -theme.sizes.padding,
    marginRight: -theme.sizes.padding,
    height: 0,
    marginVertical: theme.sizes.base * 1.5,
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
