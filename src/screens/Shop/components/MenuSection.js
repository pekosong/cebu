import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CardMenu, CardProgram} from 'app/src/components';
import {colors, style, sizes} from 'app/src/styles';

export default function MenuSection(props) {
  const {shop} = props;

  return (
    <Block style={[style.shop.categories]}>
      <Block row space="between" style={style.shop.content}>
        <Text h3 bold>
          {shop.category == 'Massage' ? '프로그램' : '메뉴'}
        </Text>
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

const styles = StyleSheet.create({});
