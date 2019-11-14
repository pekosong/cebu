import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text} from '../../components';
import {theme} from '../../constants';

export default function MenuSection(props) {
  const {menus} = props;

  return (
    <Block style={styles.categories}>
      <Block row space="between" style={{...styles.content, marginBottom: 25}}>
        <Text h3 bold>
          추천메뉴
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text h3 bold color={theme.colors.accent}>
            더보기
          </Text>
        </TouchableOpacity>
      </Block>
      {menus.map((item, idx) => (
        <CardMenu key={idx} item={item} />
      ))}
      {menus.map((item, idx) => (
        <CardMenu key={idx} item={item} />
      ))}
    </Block>
  );
}

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  categories: {
    marginVertical: 10,
  },
  content: {
    marginBottom: 15,
  },
});
