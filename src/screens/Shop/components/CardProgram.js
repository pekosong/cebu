import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {sizes, colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

const {width} = Dimensions.get('window');

export default CardProgram = ({item}) => {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
        <Block style={{marginLeft: 10}}>
          <Text h3>{item.name}</Text>
          <Text h4 gray style={{marginTop: 5, lineHeight: 20}}>
            {item.desc}
          </Text>
        </Block>
      </Block>
      <Block style={{marginTop: 10}}>
        <Block row>
          {item.plans.map((e, idx) => (
            <Block
              key={idx}
              style={{
                marginLeft: 2,
                borderRadius: 10,
                height: 80,
                width: (width - sizes.padding * 2) / 3,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.white,
                borderColor: colors.accent,
                shadowColor: '#000',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                elevation: 4,
                shadowOpacity: 0.25,
                shadowRadius: 2,
                marginRight: idx == 2 ? 2 : 10,
              }}>
              <Text center bold h4>
                {`${e.time}분`}
              </Text>
              <Block
                style={{
                  flex: 0,
                  width: 50,
                  borderBottomWidth: 2,
                  borderBottomColor: 'red',
                  marginVertical: 4,
                }}></Block>
              <Text bold h2>
                {`${convertComma(e.price)}`}
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
    marginBottom: 20,
    paddingBottom: 20,
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
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
});
