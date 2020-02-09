import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Block, Button, Text} from 'app/src/components';
import CardMenu from './CardMenu';
import MenuImage from './MenuImage';
import DeliveryInfo from './DeliveryInfo';

export default MenuSection = ({shop, isKorean}) => {
  const [menuCnt, setMenuCnt] = useState(5);

  const itemSeparatorElement = () => (
    <Block
      style={{
        borderBottomWidth: 0.2,
        borderBottomColor: '#ddd',
        marginVertical: 15,
      }}></Block>
  );

  const headerElement = (
    <Block row space="between" style={{marginBottom: 30}}>
      <Text h1 bold>
        대표 메뉴
      </Text>
    </Block>
  );

  return (
    <Block style={{marginBottom: 80}}>
      {shop.minPrice !== 0 && (
        <DeliveryInfo shop={shop} isKorean={isKorean}></DeliveryInfo>
      )}
      <FlatList
        ItemSeparatorComponent={itemSeparatorElement}
        ListHeaderComponent={headerElement}
        contentContainerStyle={{paddingBottom: 20}}
        data={shop.menus.slice(0, menuCnt)}
        renderItem={({item, index}) => (
          <CardMenu
            shopId={shop.id}
            item={item}
            idx={index}
            isKorean={isKorean}
          />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <Block>
        <Button
          border
          onPress={() => setMenuCnt(menuCnt === 5 ? shop.menus.length : 5)}
          style={{marginTop: 20}}>
          <Text bold accent center>
            {menuCnt === 5 ? '더 보기' : '닫기'}
          </Text>
        </Button>
        <MenuImage shop={shop}></MenuImage>
      </Block>
    </Block>
  );
};

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
