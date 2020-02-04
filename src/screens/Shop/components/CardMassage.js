import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

export default CardMassage = ({item, isKorean}) => {
  return (
    <Block style={[style.shadow, {margin: 2, padding: 12, borderRadius: 6}]}>
      <Text h1>{item.name}</Text>
      <Text gray style={{marginTop: 6, lineHeight: 20}}>
        {item.desc}
      </Text>
      <Block
        style={{
          borderColor: colors.gray2,
          borderBottomWidth: 0.6,
          marginVertical: 20,
        }}></Block>
      <Block>
        {item.plans
          .filter(e => e.time)
          .map((e, idx) => (
            <Block
              row
              sha
              space="between"
              key={idx}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 8,
                marginBottom:
                  item.plans.filter(e => e.time).length - 1 === idx ? 0 : 8,
              }}>
              <Block>
                <Text left h3>
                  {`${e.time}분`}
                </Text>
              </Block>
              <Block row right center>
                <Text h2 accent bold>{`${convertComma(
                  isKorean ? e.price * 22 : e.price,
                )} `}</Text>
                <Text h4 darkgray style={{marginTop: 3}}>
                  {isKorean ? '원' : '페소'}
                </Text>
              </Block>
            </Block>
          ))}
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
