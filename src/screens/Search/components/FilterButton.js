import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from 'app/src/components';
import {colors} from 'app/src/styles';

export default FilterButton = ({text, setSearch, setSearchText}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSearch(text);
        setSearchText(text);
      }}
      style={[
        styles.container,
        {
          borderColor: colors.gray,
          backgroundColor: colors.white,
        },
      ]}>
      <Text
        size={12}
        center
        style={{
          fontWeight: 'bold',
          color: colors.gray,
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
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 14,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
