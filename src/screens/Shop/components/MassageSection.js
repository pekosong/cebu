import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Block, Text} from 'app/src/components';
import CardMassage from './CardMassage';
import MenuImage from './MenuImage';

export default MassageSection = ({shop, isKorean}) => {
  const itemSeparatorElement = () => (
    <Block
      style={{
        marginVertical: 15,
      }}
    />
  );
  const headerElement = (
    <Block row space="between" style={{marginBottom: 30}}>
      <Text h1 bold>
        프로그램
      </Text>
    </Block>
  );

  return (
    <Block style={{marginBottom: 80}}>
      <FlatList
        ItemSeparatorComponent={itemSeparatorElement}
        contentContainerStyle={{paddingBottom: 20}}
        ListHeaderComponent={headerElement}
        data={shop.menus}
        renderItem={({item}) => <CardMassage item={item} isKorean={isKorean} />}
        keyExtractor={(item, idx) => item.name + idx}
      />
      <MenuImage shop={shop}></MenuImage>
    </Block>
  );
};

MassageSection.defaultProps = {};

MassageSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
