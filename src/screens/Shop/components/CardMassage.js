import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

export default CardMassage = ({item, isKorean}) => {
  return (
    <View style={[style.shadow, styles.container]}>
      <Text h1>{item.name}</Text>
      {item.desc !== '' && (
        <Text gray style={styles.descStyle}>
          {item.desc}
        </Text>
      )}
      <View style={styles.divider} />
      <View>
        {item.plans
          .filter(e => e.time)
          .map((e, idx) => (
            <View
              key={idx}
              style={{
                ...styles.descContainer,
                marginBottom:
                  item.plans.filter(e => e.time).length - 1 === idx ? 0 : 8,
              }}>
              <Text left h3>
                {`${e.time}분`}
              </Text>
              <View style={styles.priceContainer}>
                <Text h2 accent bold>{`${convertComma(
                  isKorean ? e.price * 22 : e.price,
                )} `}</Text>
                <Text h4 style={styles.priceStyle}>
                  {isKorean ? '원' : '페소'}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </View>
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
  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  priceStyle: {
    color: colors.darkgray,
    marginTop: 3,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
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
