import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Block, Text} from 'app/src/components';
import CardMassage from './CardMassage';

import {style} from 'app/src/styles';

export default MassageSection = ({shop, isKorean}) => {
  const itemSeparatorElement = () => (
    <Block
      style={{
        borderBottomWidth: 0.2,
        borderBottomColor: '#eee',
        marginVertical: 25,
      }}></Block>
  );
  const headerElement = () => (
    <Block row space="between" style={{marginBottom: 30}}>
      <Text h1 bold>
        프로그램
      </Text>
    </Block>
  );

  return (
    <FlatList
      ItemSeparatorComponent={itemSeparatorElement}
      contentContainerStyle={{paddingBottom: 50}}
      ListHeaderComponent={headerElement()}
      data={shop.menus}
      renderItem={({item}) => <CardMassage item={item} isKorean={isKorean} />}
      keyExtractor={item => item.name}
    />
  );
};

MassageSection.defaultProps = {};

MassageSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
