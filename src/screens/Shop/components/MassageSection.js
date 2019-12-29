import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Block, Text} from 'app/src/components';
import CardMassage from './CardMassage';

import {style} from 'app/src/styles';

export default MassageSection = ({shop, isKorean}) => {
  return (
    <Block style={style.shop.categories}>
      <FlatList
        ListHeaderComponent={
          <Block row space="between" style={{marginBottom: 30}}>
            <Text h1 bold>
              프로그램
            </Text>
          </Block>
        }
        data={shop.menus}
        renderItem={({item}) => <CardMassage item={item} isKorean={isKorean} />}
        keyExtractor={item => item.name}
      />
    </Block>
  );
};

MassageSection.defaultProps = {};

MassageSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});