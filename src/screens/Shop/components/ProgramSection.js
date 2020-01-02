import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, Divider, CachedImage} from 'app/src/components';
import {sizes, colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

const {width} = Dimensions.get('window');

export default ProgramSection = ({shop}) => {
  const {program} = shop;
  return (
    <>
      <Block style={style.shop.categories}>
        <Text h3 accent bold>
          {program.type.join(', ')}
        </Text>
        <Text h1 bold style={{marginVertical: 10}}>
          {program.name}
        </Text>
        <Text h3 gray>
          {program.subName}
        </Text>
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          가격 안내
        </Text>
        <Block row>
          {program.plan.map((e, idx) => (
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
                marginRight:
                  idx == 2 ? 2 : program.plans.length - 1 == idx ? 2 : 10,
              }}>
              <Text bold center h2 style={{marginBottom: 6}}>
                {e.type === 'adult' ? '어른' : '어린이'}
              </Text>
              <Text center>
                {e.type === 'adult' ? '만 13세 이상' : '만 13세 이하'}
              </Text>
              <Block
                style={{
                  flex: 0,
                  width: 50,
                  borderBottomWidth: 2,
                  borderBottomColor: 'red',
                  marginVertical: 6,
                }}></Block>
              <Text bold center h2>
                {`${convertComma(e.price)}원`}
              </Text>
            </Block>
          ))}
        </Block>
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          프로그램 일정
        </Text>
        {program.plans.map((e, idx) => (
          <Block key={idx} style={[style.inputRow]}>
            <Block>
              <Text h3>{e.time + ' : ' + e.title}</Text>
              <Block row space="between" style={{marginTop: 10}}>
                <Block middle style={{marginRight: 10}}>
                  <Text darkgray style={{lineHeight: 25}}>
                    {e.desc}
                  </Text>
                </Block>
                <CachedImage
                  style={styles.imageStyle}
                  uri={e.src}></CachedImage>
              </Block>
            </Block>
          </Block>
        ))}
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          상세 프로그램
        </Text>
        <Block>
          <Text h2 bold style={{marginBottom: 20}}>
            {program.detail.title}
          </Text>
          <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
            {program.detail.subTitle}
          </Text>
        </Block>
        {program.detail.images.map((e, idx) => (
          <CachedImage
            key={idx}
            uri={e.src}
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
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          포함 사항
        </Text>
        {program.include.map((e, idx) => (
          <Block key={idx} style={style.inputRow}>
            <Text h3>{e.name}</Text>
            <Text darkgray h3>
              {e.content}
            </Text>
          </Block>
        ))}
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          불포함 사항
        </Text>
        {program.notInclude.map((e, idx) => (
          <Block key={idx} style={style.inputRow}>
            <Text h3>{e.name}</Text>
            <Text darkgray h3>
              {e.content}
            </Text>
          </Block>
        ))}
      </Block>
      <Divider />

      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          유의 사항
        </Text>
        {program.cautions.map((e, idx) => (
          <Text key={idx} h4 style={{marginBottom: 10, lineHeight: 25}}>
            {`${idx + 1}. ${e}`}
          </Text>
        ))}
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Block row space="between">
          <Text h1 bold style={{marginBottom: 30}}>
            취소 및 환불 규정
          </Text>
          <Text h3>여행일 기준</Text>
        </Block>
        {program.refund.map((e, idx) => (
          <Block key={idx} style={style.inputRow}>
            <Text h3>{`${e.period} 취소`}</Text>
            <Text darkgray h3>
              {`${e.content}% 공제`}
            </Text>
          </Block>
        ))}
      </Block>
      <Divider />
    </>
  );
};

ProgramSection.defaultProps = {};

ProgramSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 2,
    width: 90,
    height: 90,
    resizeMode: 'cover',
  },
});
