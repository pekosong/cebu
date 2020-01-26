import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Block, Text} from 'app/src/components';
import FilterButton from './FilterButton';
import {sizes} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default FilterTab = ({filterList, fadeAnim, isTop}) => {
  return (
    <Block
      row
      center
      animated
      style={
        isTop && {...styles.filterTap, opacity: fadeAnim, zIndex: fadeAnim}
      }>
      <Text darkgray style={{marginRight: 8}}>
        필터
      </Text>
      {filterList.slice(0, 3).map((filter, idx) => (
        <FilterButton
          key={idx}
          isActive={filter.isActive}
          setActive={filter.setActive}
          text={filter.title}
        />
      ))}
      <Text darkgray style={{marginHorizontal: 8}}>
        지역
      </Text>
      {filterList.slice(3, 5).map((filter, idx) => (
        <FilterButton
          key={idx}
          isActive={filter.isActive}
          setActive={filter.setActive}
          text={filter.title}
        />
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  filterTap: {
    flex: 0,
    position: 'absolute',
    top: 80,
    height: 45,
    width: width,
    paddingHorizontal: sizes.padding,
    backgroundColor: 'white',
  },
});
