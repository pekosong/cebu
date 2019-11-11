import React from 'react';
import {AntDesign} from '@expo/vector-icons';

import {theme} from '../constants';

export default function TabBarIcon(props) {
  return (
    <AntDesign
      name={props.name}
      size={27}
      style={{paddingBottom: 6}}
      color={props.focused ? theme.colors.accent : theme.colors.gray}
    />
  );
}
