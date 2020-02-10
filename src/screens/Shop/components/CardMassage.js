import React from 'react';
import {StyleSheet} from 'react-native';

import {Block, Text} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

export default CardMassage = ({item, isKorean}) => {
  return (
    <Block style={[style.shadow, styles.container]}>
      <Text h1>{item.name}</Text>
      {item.desc !== '' && (
        <Text gray style={styles.descStyle}>
          {item.desc}
        </Text>
      )}
      <Block style={styles.divider} />
      <Block>
        {item.plans
          .filter(e => e.time)
          .map((e, idx) => (
            <Block
              key={idx}
              style={{
                ...styles.priceContainer,
                marginBottom:
                  item.plans.filter(e => e.time).length - 1 === idx ? 0 : 8,
              }}>
              <Text left h3>
                {`${e.time}분`}
              </Text>
              <Block row right center>
                <Text h2 accent bold>{`${convertComma(
                  isKorean ? e.price * 22 : e.price,
                )} `}</Text>
                <Text h4 style={styles.priceStyle}>
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
  container: {
    margin: 2,
    padding: 12,
    borderRadius: 6,
  },
  descStyle: {
    marginTop: 6,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  priceStyle: {
    color: colors.darkgray,
    marginTop: 3,
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
  divider: {
    borderColor: colors.gray2,
    borderBottomWidth: 0.6,
    marginVertical: 20,
  },
});
