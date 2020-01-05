import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {colors} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

export default CardMassage = ({item, isKorean}) => {
  return (
    <Block>
      <Block row space="between">
        <CachedImage style={styles.imageStyle} uri={item.src}></CachedImage>
        <Block style={{marginLeft: 10}}>
          <Text h3 bold>
            {item.name}
          </Text>
          <Text gray style={{marginTop: 5, lineHeight: 20}}>
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
                marginBottom: 3,
                marginRight:
                  idx == 2 ? 2 : item.plans.length - 1 == idx ? 2 : 10,
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
              <Block row center style={{flex: 0}}>
                <Text h3>{`${convertComma(
                  isKorean ? e.price * 22 : e.price,
                )} `}</Text>
                <Text darkgray style={{marginTop: 3}}>
                  {isKorean ? '원' : '페소'}
                </Text>
              </Block>
            </Block>
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export const styles = StyleSheet.create({
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
