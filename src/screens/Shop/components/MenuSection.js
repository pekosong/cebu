import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text} from 'app/src/components';
import CardProgram from './CardProgram';
import CardMenu from './CardMenu';

import {colors, style} from 'app/src/styles';

export default MenuSection = ({shop}) => {
  return (
    <Block style={[style.shop.categories]}>
      <Block row space="between" style={{marginBottom: 30}}>
        <Text h2 bold>
          {shop.category == 'Massage' ? '프로그램' : '대표메뉴'}
        </Text>
      </Block>
      {shop.menus.map((item, idx) =>
        shop.category == 'Massage' ? (
          <CardProgram key={idx} item={item}></CardProgram>
        ) : (
          <CardMenu key={idx} item={item}></CardMenu>
        ),
      )}
      {shop.menus.map((item, idx) =>
        shop.category == 'Massage' ? null : <CardMenu key={idx} item={item} />,
      )}
    </Block>
  );
};

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray2,
  },
  imageStyle: {
    borderRadius: 5,
    width: 110,
    height: 90,
    resizeMode: 'cover',
  },
});
