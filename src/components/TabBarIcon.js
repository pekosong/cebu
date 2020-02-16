import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import {colors} from 'app/src/styles';
import {useSelector} from 'react-redux';

export default function TabBarIcon(props) {
  const {user} = useSelector(state => state.user);

  const {name, focused} = props;
  return (
    <View>
      <AntDesign
        name={name}
        size={24}
        style={{height: 35}}
        color={focused ? colors.black : colors.gray}
      />
      {name === 'message1' && user.email === 'a@naver.com' && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: 0,
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: colors.primary,
          }}></View>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
});
