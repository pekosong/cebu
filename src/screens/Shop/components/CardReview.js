import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';

import {sizes, colors} from 'app/src/styles';

import StarRating from 'react-native-star-rating';
import moment from 'moment';

const {width} = Dimensions.get('window');

export default CardReview = ({item}) => {
  return (
    <TouchableOpacity>
      <Block style={styles.container}>
        <Block row space="between">
          <CachedImage uri={item.src} style={styles.avatarChat} />
          <Block bottom style={{marginLeft: 10}}>
            <Text>{item.writer}</Text>
            <Text>{moment.unix(item.date.seconds).format('YYYY-MM-DD')}</Text>
          </Block>
          <Block style={{position: 'absolute', right: 50, bottom: 0}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={item.star}
              starSize={15}
              fullStarColor={colors.accent}
              containerStyle={{width: 20}}
            />
          </Block>
        </Block>
        <Block style={{marginTop: 16}}>
          <Text>{item.comment}</Text>
        </Block>
        <Block row style={{marginTop: 16}}>
          {[
            'http://mblogthumb1.phinf.naver.net/MjAxODA1MTVfMTYz/MDAxNTI2MzczNDIyMDA0.JDrUBkJH0BbA-BFy0efcxDlU04fqD87IeWPwBKMESu8g.bUJvoLUoLu9AZVSvgjXn80PAkjLpZjnVpzuY7015Bocg.JPEG.jhot1123/1526373393565.jpg?type=w800',
            'http://mblogthumb4.phinf.naver.net/MjAxODAyMjVfMjQw/MDAxNTE5NTY3MzAzMDMz.C87S7N4Ok0kbbkLLWnFFudCAC0mnEGjrCVjeBaUY7w4g.B4FB915csBPqkg6tgaCh6nA_jp3ouXI2jUReEJ4OAGEg.JPEG.kejsms1107/%EC%84%B8%EB%B6%80%EB%A7%88%EC%82%AC%EC%A7%80.JPG?type=w800',
            'https://m.cebudiary.com:454/upload/coupons/1534130524_1.jpg',
            'http://mblogthumb1.phinf.naver.net/MjAxODA1MDFfMjM1/MDAxNTI1MTUwNDI4OTk2.wxcrd2EExOVkvVME5u5Of4RjC9WtgbxPdU87M1GdZLMg.h7J7gl9PmcMrLUAZgri5-f4iUKyJsvSIydWGliMLWykg.JPEG.386265/%EC%84%B8%EB%B6%80%EC%9D%8C%EC%8B%9D.jpg?type=w800',
          ].map(e => (
            <CachedImage key={e} uri={e} style={styles.image} />
          ))}
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
    paddingBottom: 30,
    marginBottom: 30,
  },
  avatarChat: {
    width: sizes.base * 4,
    height: sizes.base * 4,
    borderRadius: sizes.base * 2,
  },
  image: {
    width: (width - 30 - sizes.padding * 2) / 4,
    height: (width - 30 - sizes.padding * 2) / 4,
    marginRight: 10,
  },
});