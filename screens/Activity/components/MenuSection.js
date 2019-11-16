import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CardMenu, CardProgram} from '../../../components';
import {theme} from '../../../styles';

export default function MenuSection(props) {
  const {shop} = props;

  return (
    <Block style={styles.categories}>
      <Block row space="between" style={{...styles.content, marginBottom: 25}}>
        <Text h3 bold>
          {shop.category == 'Massage' ? '프로그램' : '메뉴'}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text h3 bold color={theme.colors.accent}>
            더보기
          </Text>
        </TouchableOpacity>
      </Block>
      {shop.menus.map((item, idx) =>
        shop.category == 'Massage' ? (
          <CardProgram key={idx} item={item}></CardProgram>
        ) : (
          <CardMenu key={idx} item={item} />
        ),
      )}
      {shop.menus.map((item, idx) =>
        shop.category == 'Massage' ? null : <CardMenu key={idx} item={item} />,
      )}
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
