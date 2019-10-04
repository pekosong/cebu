import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default Test = props => {
  const {selected} = props;

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return selected ? (
    <AntDesign
      size={30}
      name={'checkcircleo'}
      style={{
        color: 'white',
        position: 'absolute',
        top: 5,
        right: 5,
      }}
    />
  ) : null;
};

const styles = StyleSheet.create({});
