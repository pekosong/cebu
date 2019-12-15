import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CardProgram, CachedImage} from 'app/src/components';
import {colors, style, sizes} from 'app/src/styles';

export default function MenuSection(props) {
  const {shop} = props;

  return (
    <Block style={[style.shop.categories]}>
      <Block row space="between" style={{marginBottom: 20}}>
        <Text h2 bold>
          {shop.category == 'Massage' ? '프로그램' : '대표메뉴'}
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

const CardMenu = props => {
  const {item} = props;

  useEffect(() => {});

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block style={styles.container}>
        <Block style={{marginRight: 10}}>
          <Text h3 bold>
            {item.name}
          </Text>
          <Text gray style={{marginVertical: 10, lineHeight: 20}}>
            {item.desc}
          </Text>
          <Text h3>{item.price}</Text>
        </Block>
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
      </Block>
    </TouchableOpacity>
  );
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
