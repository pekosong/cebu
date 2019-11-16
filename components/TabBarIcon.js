import React from 'react';
import {AntDesign} from '@expo/vector-icons';

import {theme} from '../styles';

export default function TabBarIcon(props) {
  return (
    <AntDesign
      name={props.name}
      size={24}
      style={{height: 35}}
      color={props.focused ? theme.colors.black : theme.colors.gray}
    />
  );
}
