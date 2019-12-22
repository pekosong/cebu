import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {sizes, colors} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default CardProgram = ({item}) => {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
        <Block style={{marginLeft: 10}}>
          <Text h2>{item.name}</Text>
          <Text h4 gray style={{marginTop: 5, lineHeight: 20}}>
            {item.desc}
          </Text>
        </Block>
      </Block>

      <Block style={{marginTop: 10}}>
        <Text h3 bold style={{marginVertical: 10}}>
          가격 정보
        </Text>
        <Block row>
          {[
            {
              type: '120분',
              price: '1100',
            },
            {
              type: '90분',
              price: '850',
            },
            {
              type: '60분',
              price: '600',
            },
          ].map((e, idx) => (
            <Block
              key={idx}
              style={{
                borderRadius: 20,
                height: 100,
                width: (width - sizes.padding * 2) / 3,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.white,
                borderColor: colors.accent,
                shadowColor: '#000',
                shadowOffset: {
                  width: 2,
                  height: 3,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 3,
                marginRight: idx == 2 ? 0 : 10,
              }}>
              <Text bold h3 style={{marginBottom: 10}}>
                {e.type}
              </Text>
              <Text bold h2>
                {`${e.price}`}
                <Text>{`P`}</Text>
              </Text>
            </Block>
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingBottom: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray2,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.gray2,
    marginRight: 10,
  },
  imageStyle: {
    borderRadius: 3,
    width: 160,
    height: 90,
    resizeMode: 'cover',
  },
});
