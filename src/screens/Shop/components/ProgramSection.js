import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, Divider, CachedImage} from 'app/src/components';
import {sizes, colors, style} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

import {Ionicons} from '@expo/vector-icons';

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
                marginRight: idx == 0 ? 0 : 0,
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
          <Block key={idx} style={style.inputRow}>
            <Block>
              <Block row space="between">
                <Text h3 bold>
                  {e.time}
                </Text>
                <Text h3 bold>
                  {e.title}
                </Text>
              </Block>
              <Block row space="between" style={{marginTop: 10}}>
                <Block middle style={{marginRight: 10}}>
                  <Text style={{lineHeight: 25}}>{e.desc}</Text>
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
          프로그램 정보
        </Text>
        {[
          {
            firstIcon: 'ios-time',
            firstName: '진행시간',
            firstContent: '8시간',
            secondIcon: 'ios-people',
            secondName: '그룹당 인원',
            secondContent: '최대 20명',
          },
          {
            firstIcon: 'ios-document',
            firstName: '포함사항',
            firstContent: '식사, 음료수',
            secondIcon: 'ios-map',
            secondName: '제공언어',
            secondContent: '한국어, 영어',
          },
          {
            firstIcon: 'ios-car',
            firstName: '픽업',
            firstContent: '호텔 픽업',
            secondIcon: 'ios-hand',
            secondName: '취소가능 여부',
            secondContent: '가능',
          },
        ].map((item, idx) => (
          <Block
            key={idx}
            row
            space="between"
            style={{marginTop: idx == 0 ? 0 : 30}}>
            <Block>
              <Ionicons
                size={25}
                name={item.firstIcon}
                style={{color: colors.darkgray, marginBottom: 5}}
              />
              <Text h4 style={{marginBottom: 5}}>
                {item.firstName}
              </Text>
              <Text h3 bold>
                {item.firstContent}
              </Text>
            </Block>
            <Block>
              <Ionicons
                size={25}
                name={item.secondIcon}
                style={{color: colors.darkgray, marginBottom: 5}}
              />
              <Text h4 style={{marginBottom: 5}}>
                {item.secondName}
              </Text>
              <Text h3 bold>
                {item.secondContent}
              </Text>
            </Block>
          </Block>
        ))}
      </Block>
      <Divider />
      <Block style={[style.shop.categories, {marginBottom: 30}]}>
        <Text h1 bold style={{marginBottom: 30}}>
          상세 프로그램
        </Text>
        <Block>
          <Text h2 bold style={{marginBottom: 20}}>
            세부 호핑투어! 왕복 픽업+스노클링+중식+BBQ중식 까지!
          </Text>
          <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
            세부자유여행객을 위한 막탄 내 리조트 무료픽업 &드랍서비스
          </Text>
          <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
            세부액티비티호핑투어를 즐기고 선상BBQ중식제공(선셋투어 시 석시)
          </Text>
          <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
            세부여행 최고 액티비티 최신스노클링장비 세부여행추억담기
          </Text>
          <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
            수중카메라 촬영서비스 세부호핑투 무료 베이비시터 서비스 호핑 도우미
            서비스
          </Text>
        </Block>
        <CachedImage
          key={'http://www.jumphopping.com/wp-content/uploads/2018/08/1-18.jpg'}
          uri={'http://www.jumphopping.com/wp-content/uploads/2018/08/1-18.jpg'}
          style={{
            borderRadius: 5,
            marginTop: 40,
            height: 200,
            width: width - sizes.padding * 2,
            resizeMode: 'contain',
          }}
        />
        <Text h4 style={{marginTop: 10, lineHeight: 25}}>
          수중카메라 촬영서비스 세부호핑투 무료 베이비시터 서비스 호핑 도우미
          서비스
        </Text>
        <CachedImage
          key={'https://hanoitbs.com/files/sanpham/76/1/jpg/.jpg'}
          uri={'https://hanoitbs.com/files/sanpham/76/1/jpg/.jpg'}
          style={{
            borderRadius: 5,
            marginTop: 40,
            height: 200,
            width: width - sizes.padding * 2,
            resizeMode: 'contain',
          }}
        />
        <Text h4 style={{marginTop: 10, lineHeight: 25}}>
          수중카메라 촬영서비스 세부호핑투 무료 베이비시터 서비스 호핑 도우미
          서비스
        </Text>
        <CachedImage
          key={'http://thecebu.co.kr/wp-content/uploads/2019/01/005.jpg'}
          uri={'http://thecebu.co.kr/wp-content/uploads/2019/01/005.jpg'}
          style={{
            borderRadius: 5,
            marginTop: 40,
            height: 200,
            width: width - sizes.padding * 2,
            resizeMode: 'contain',
          }}
        />
        <Text h4 style={{marginTop: 10, lineHeight: 25}}>
          수중카메라 촬영서비스 세부호핑투 무료 베이비시터 서비스 호핑 도우미
          서비스
        </Text>
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          유의 사항
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          1. 점심식사는 막탄내 유명 레스토랑에서 진행하고 상황에 따라 변경될수
          있습니다.
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          2. 보모 서비스가 필요하신분은 사전에 요청하시면 가능하고 250페소
          현장지불입니다 .
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          3. 선착장 오피스에 짐보관가능합니다.
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          4. 천재지변(태풍, 지진등 )으로 인해 행사가 불가 할수있으며 이럴경우
          100% 환불처리 되십니다.
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          5. 해당일 기상 상황에따라 스노클링 포인트는 안전지역으로 변경진행 될수
          있습니다.
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          6. 여행자보험은 개별적으로 반드시 가입하여 주시길 바랍니다.
        </Text>
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 30}}>
          취소 및 환불 규정
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          여행일 기준 20일 ~ 이전 취소 요청시 : 전액환불
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          여행일 기준 10일 ~ 19일전 취소 요청 시 : 결제금액의 5% 공제
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          여행일 기준 8일 ~ 9일전 취소 요청 시 : 결제금액의 10% 공제
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          여행일 기준 1일 ~ 7일전 취소 요청 시 : 결제금액의 20% 공제
        </Text>
        <Text h4 style={{marginBottom: 5, lineHeight: 25}}>
          여행일 당일 취소 요청 시 : 결제금액의 50% 공제
        </Text>
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
