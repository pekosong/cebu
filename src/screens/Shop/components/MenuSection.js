import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Block, Text} from 'app/src/components';
import CardMenu from './CardMenu';

import {style} from 'app/src/styles';

export default MenuSection = ({shop, isKorean}) => {
  return (
    <Block style={style.shop.categories}>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        ListHeaderComponent={
          <Block row space="between" style={{marginBottom: 30}}>
            <Text h1 bold>
              대표 메뉴
            </Text>
          </Block>
        }
        data={shop.menus}
        renderItem={({item}) => <CardMenu item={item} isKorean={isKorean} />}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </Block>
  );
};

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
