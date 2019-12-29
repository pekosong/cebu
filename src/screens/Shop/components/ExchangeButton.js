import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text} from 'app/src/components';
import {colors} from 'app/src/styles';

export default ExchangeButton = ({isKorean, setIsKorean}) => {
  return (
    <TouchableOpacity
      onPress={() => setIsKorean(!isKorean)}
      style={styles.container}>
      <Text size={20} white bold>
        {isKorean ? '페소' : '원'}
      </Text>
    </TouchableOpacity>
  );
};

ExchangeButton.defaultProps = {};

ExchangeButton.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.accent,
    position: 'absolute',
    bottom: 15,
    left: 15,
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
