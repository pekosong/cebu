import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Block, Text} from 'app/src/components';
import CardProgram from './CardProgram';
import CardMenu from './CardMenu';

import {style} from 'app/src/styles';

export default MenuSection = ({shop}) => {
  return (
    <Block style={style.shop.categories}>
      <FlatList
        ListHeaderComponent={
          <Block row space="between" style={{marginBottom: 30}}>
            <Text h1 bold>
              {shop.category == 'Massage' ? '프로그램' : '대표 메뉴'}
            </Text>
          </Block>
        }
        data={shop.menus}
        renderItem={({item}) =>
          shop.category == 'Massage' ? (
            <CardProgram item={item}></CardProgram>
          ) : (
            <CardMenu item={item}></CardMenu>
          )
        }
        keyExtractor={item => item.name}
      />
    </Block>
  );
};

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
