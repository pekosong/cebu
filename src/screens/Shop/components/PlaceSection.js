import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, Divider, CachedImage} from 'app/src/components';
import {sizes, colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

const {width} = Dimensions.get('window');

const PriceCard = ({item, idx, isKorean}) => {
  return (
    <Block style={[styles.cardStyle, {marginRight: idx == 0 ? 10 : 0}]}>
      <Text bold center h2 style={{marginBottom: 6}}>
        {item.type === 'adult' ? '어른' : '어린이'}
      </Text>
      <Block style={styles.cardDivider} />
      {isKorean ? (
        <Block row center style={{flex: 0}}>
          {item.price === 0 ? (
            <Text h2 style={{marginTop: 5}}>
              무료
            </Text>
          ) : (
            <>
              <Text h2>{`${convertComma(item.price * 22)} `}</Text>
              <Text darkgray style={{marginTop: 3}}>
                원
              </Text>
            </>
          )}
        </Block>
      ) : (
        <Block row center style={{flex: 0}}>
          {item.price === 0 ? (
            <Text h2 style={{marginTop: 5}}>
              무료
            </Text>
          ) : (
            <>
              <Text h2>{`${convertComma(item.price)} `}</Text>
              <Text darkgray style={{marginTop: 3}}>
                페소
              </Text>
            </>
          )}
        </Block>
      )}
    </Block>
  );
};

export default PlaceSection = ({shop, isKorean}) => {
  return (
    <>
      <Block style={{marginVertical: 10}}>
        <Text h3 accent bold>
          {shop.tags}
        </Text>
        <Text h1 bold style={{marginVertical: 16}}>
          {shop.name}
        </Text>
        <Text h4 style={{lineHeight: 25}}>
          {shop.title}
        </Text>
        <Text h4 style={{marginTop: 20, lineHeight: 25}}>
          {shop.subTitle}
        </Text>
      </Block>
      <Divider />
      {shop.menus[0]['src'] !== '' && (
        <>
          <Block style={{marginVertical: 10, marginBottom: 30}}>
            <Text h1 bold>
              {shop.name} 소개
            </Text>
            {shop.menus.map((e, idx) => (
              <Block key={idx}>
                <CachedImage key={idx} uri={e.src} style={styles.image} />
                <Text h3 bold style={{marginTop: 15}}>
                  {e.name}
                </Text>
                <Text
                  darkgray
                  h4
                  style={{marginTop: 8, marginBottom: 20, lineHeight: 25}}>
                  {e.desc}
                </Text>
              </Block>
            ))}
          </Block>
          <Divider />
        </>
      )}
      {shop.price[0].price !== 0 && (
        <>
          <Block style={{marginVertical: 10}}>
            <Text h1 bold style={{marginBottom: 30}}>
              가격 안내
            </Text>
            <Block row>
              {shop.price.map((item, idx) => (
                <PriceCard
                  key={idx}
                  item={item}
                  idx={idx}
                  isKorean={isKorean}
                />
              ))}
            </Block>
          </Block>
          <Divider />
        </>
      )}
      <Block style={{marginVertical: 10, marginBottom: 80}}>
        <Text h1 bold>
          사진 정보
        </Text>
        {shop.source.map((e, idx) => (
          <CachedImage key={idx} uri={e} style={styles.image} />
        ))}
      </Block>
    </>
  );
};

ProgramSection.defaultProps = {};

ProgramSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    marginTop: 20,
    height: 200,
    width: width - sizes.padding * 2,
    resizeMode: 'contain',
  },
  cardStyle: {
    borderRadius: 20,
    height: 120,
    width: (width - sizes.padding * 2) / 2 - 8,
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
  },
  cardDivider: {
    flex: 0,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    marginVertical: 6,
  },
});
