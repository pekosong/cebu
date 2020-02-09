import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text} from 'app/src/components';
import {colors} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

const AppBar = props => {
  const {title, goBack, progress, func, styles} = props;

  return (
    <Block style={{backgroundColor: colors.red, ...styles}}>
      <Block center row space="between">
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons size={30} color={colors.black} name="ios-arrow-back" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => func()}>
          <Text bold h3>
            {progress}
          </Text>
        </TouchableOpacity>
      </Block>
      <Text h1 bold style={{marginTop: 10, marginBottom: 20}}>
        {title}
      </Text>
    </Block>
  );
};

AppBar.navigationOptions = {
  header: null,
};
AppBar.defaultProps = {};

const styles = StyleSheet.create({});

export default AppBar;
