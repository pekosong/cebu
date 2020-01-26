import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import {colors} from 'app/src/styles';

export default CloseButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons size={40} color={colors.accent} name="ios-close" />
    </TouchableOpacity>
  );
};

CloseButton.defaultProps = {};

CloseButton.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 15,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
