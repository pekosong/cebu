import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, View} from 'react-native';

import Favorite from './Favorite';
import Block from './Block';
import Text from './Text';

import {colors, sizes} from 'app/src/styles';
import {convertComma} from 'app/src/utils';
import {AntDesign} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

const RenderTag = ({text}) => {
  return (
    <View
      style={{
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderWidth: 1,
        backgroundColor: colors.black,
        borderRadius: 10,
        marginTop: 2,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text center white style={{fontSize: 10, fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
};

export default CardShop = ({shop, navigation}) => {
  const {
    id,
    name,
    preview,
    review,
    likes,
    korean,
    pickup,
    baby,
    tags,
    reviewCnt,
    location,
    branch,
  } = shop;

  return (
    <TouchableOpacity
      style={[styles.categories]}
      onPress={() =>
        navigation.navigate('Shop', {
          shopId: id,
        })
      }>
      <CachedImage
        uri={typeof preview === 'string' ? preview : preview[1]}
        style={styles.image}
      />
      <Block style={styles.overlap}></Block>
      <Favorite shop={shop} navigation={navigation}></Favorite>
      <Block row>
        {location !== '' && (
          <Text h5 darkgray style={{marginTop: 6}}>
            {location}
          </Text>
        )}
        {branch !== '' && (
          <Text h5 darkgray style={{marginTop: 6}}>
            {'  /  ' + branch}
          </Text>
        )}
      </Block>
      <Block row center style={{marginVertical: 3}}>
        <Text h3 bold>
          {name}
        </Text>
        <Text h5 primary style={{marginLeft: 6}}>
          {tags.slice(0, 3).join(', ')}
        </Text>
      </Block>
      <Block row center>
        <AntDesign size={13} name="star" style={{color: colors.primary}} />
        <Text darkgray style={{marginLeft: 5}}>
          {`${review} · 리뷰 ${convertComma(reviewCnt)}`}
        </Text>
        <Text darkgray style={{marginLeft: 5}}>
          {'· 저장 ' + convertComma(likes)}
        </Text>
      </Block>
      <Block row center style={{marginTop: 3}}>
        {korean && <RenderTag text={'한국어'}></RenderTag>}
        {pickup && <RenderTag text={'픽업'}></RenderTag>}
        {baby && <RenderTag text={'애기'}></RenderTag>}
      </Block>
      <Block style={styles.corner}></Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  categories: {
    marginHorizontal: sizes.padding,
  },
  image: {
    height: 165,
    width: width - sizes.padding * 2,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  overlap: {
    width: '100%',
    height: 165,
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  corner: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.accent,
    marginRight: 7,
  },
});
