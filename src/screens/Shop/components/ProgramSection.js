import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, Divider} from 'app/src/components';
import {sizes, colors, style} from 'app/src/styles';

import {Ionicons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default ProgramSection = ({}) => {
  return (
    <>
      <Block style={style.shop.categories}>
        <Text h3 accent bold>
          호핑
        </Text>
        <Text h1 bold style={{marginVertical: 10}}>
          세부 3섬 스페셜 호핑투어
        </Text>
        <Text h3 gray>
          하루 동안 즐기는 세부 인기 3섬
        </Text>
      </Block>
      <Divider />
      <Block style={style.shop.categories}>
        <Text h2 bold style={{marginBottom: 30}}>
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
            style={{marginTop: idx == 0 ? 0 : 20}}>
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
        <Text h2 bold style={{marginBottom: 30}}>
          프로그램 세부
        </Text>
        <Block>
          <Text h2 bold style={{marginBottom: 20}}>
            세부 호핑투어! 왕복 픽업+스노클링+중식+BBQ중식 까지!
          </Text>
          <Text h3 style={{marginBottom: 15, lineHeight: 25}}>
            <Ionicons size={25} name="ios-checkmark" /> 세부자유여행객을 위한
            막탄 내 리조트 무료픽업 &드랍서비스
          </Text>
          <Text h3 style={{marginBottom: 15, lineHeight: 25}}>
            <Ionicons size={25} name="ios-checkmark" /> 세부액티비티호핑투어를
            즐기고 선상BBQ중식제공(선셋투어 시 석시)
          </Text>
          <Text h3 style={{marginBottom: 15, lineHeight: 25}}>
            <Ionicons size={25} name="ios-checkmark" /> 세부여행 최고 액티비티
            최신스노클링장비 세부여행추억담기
          </Text>
          <Text h3 style={{marginBottom: 15, lineHeight: 25}}>
            <Ionicons size={25} name="ios-checkmark" /> 수중카메라 촬영서비스
            세부호핑투 무료 베이비시터 서비스 호핑 도우미 서비스
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
        <Text h3 style={{marginTop: 10, lineHeight: 25}}>
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
        <Text h3 style={{marginTop: 10, lineHeight: 25}}>
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
        <Text h3 style={{marginTop: 10, lineHeight: 25}}>
          수중카메라 촬영서비스 세부호핑투 무료 베이비시터 서비스 호핑 도우미
          서비스
        </Text>
      </Block>
    </>
  );
};

ProgramSection.defaultProps = {};

ProgramSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
