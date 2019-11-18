import React from 'react';
import {AntDesign} from '@expo/vector-icons';

import {colors} from 'app/src/styles';

export default function TabBarIcon(props) {
  return (
    <AntDesign
      name={props.name}
      size={24}
      style={{height: 35}}
      color={props.focused ? colors.black : colors.gray}
    />
  );
}
