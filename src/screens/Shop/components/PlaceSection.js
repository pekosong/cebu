import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, Divider, CachedImage} from 'app/src/components';
import {sizes, colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

const {width} = Dimensions.get('window');

export default PlaceSection = ({shop, isKorean}) => {
  return (
    <>
      <Block style={style.shop.categories}>
        <Text h3 accent bold>
          {shop.tags}
        </Text>
        <Text h1 bold style={{marginVertical: 16}}>
          {shop.name}
        </Text>
        <Text h4 style={{lineHeight: 25}}>
          {shop.title}
        </Text>
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          가격 안내
        </Text>
        <Block row>
          {shop.price.map((e, idx) => (
            <Block
              key={idx}
              style={{
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
                marginRight: idx == 0 ? 10 : 0,
              }}>
              <Text bold center h2 style={{marginBottom: 6}}>
                {e.type === 'adult' ? '어른' : '어린이'}
              </Text>
              <Block
                style={{
                  flex: 0,
                  width: 50,
                  borderBottomWidth: 2,
                  borderBottomColor: 'red',
                  marginVertical: 6,
                }}></Block>
              {isKorean ? (
                <Block row center style={{flex: 0}}>
                  {e.price === 0 ? (
                    <Text h2 style={{marginTop: 5}}>
                      무료
                    </Text>
                  ) : (
                    <>
                      <Text h2>{`${convertComma(e.price * 22)} `}</Text>
                      <Text darkgray style={{marginTop: 3}}>
                        원
                      </Text>
                    </>
                  )}
                </Block>
              ) : (
                <Block row center style={{flex: 0}}>
                  {e.price === 0 ? (
                    <Text h2 style={{marginTop: 5}}>
                      무료
                    </Text>
                  ) : (
                    <>
                      <Text h2>{`${convertComma(e.price)} `}</Text>
                      <Text darkgray style={{marginTop: 3}}>
                        페소
                      </Text>
                    </>
                  )}
                </Block>
              )}
            </Block>
          ))}
        </Block>
      </Block>
      <Divider />
      <Block style={[style.shop.categories, {marginBottom: 30}]}>
        <Text h1 bold style={{marginBottom: 30}}>
          관광지 소개
        </Text>
        <Text h4 style={{marginBottom: 20, lineHeight: 25}}>
          {shop.subTitle}
        </Text>
        {shop.source.map((e, idx) => (
          <CachedImage
            key={idx}
            uri={e}
            style={{
              borderRadius: 5,
              marginTop: 40,
              height: 200,
              width: width - sizes.padding * 2,
              resizeMode: 'contain',
            }}
          />
        ))}
      </Block>
    </>
  );
};

ProgramSection.defaultProps = {};

ProgramSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
