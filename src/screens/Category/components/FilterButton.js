import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from 'app/src/components';
import {colors} from 'app/src/styles';

export default FilterButton = ({text, isActive, setActive}) => {
  return (
    <TouchableOpacity
      onPress={() => setActive(!isActive)}
      style={[
        styles.container,
        {
          borderColor: isActive ? colors.white : colors.gray,
          backgroundColor: isActive ? colors.black : colors.white,
        },
      ]}>
      <Text
        size={12}
        center
        style={{
          fontWeight: 'bold',
          color: isActive ? colors.white : colors.gray,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

FilterButton.defaultProps = {};

FilterButton.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 14,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
