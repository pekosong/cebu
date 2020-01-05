import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';

import {sizes, colors} from 'app/src/styles';

export default CardReview = ({item, setwebViewVisible, setPage}) => {
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: colors.accent, marginTop: 5}} onPress={handlePress}>
        더보기
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: colors.accent, marginTop: 5}} onPress={handlePress}>
        닫기
      </Text>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setPage(item.href);
        setwebViewVisible(true);
      }}>
      <Block row>
        <CachedImage uri={item.src} style={styles.avatarChat} />
        <Block middle style={{height: sizes.base * 5}}>
          <Text h4 bold numberOfLines={2}>
            {item.title + '  '}
          </Text>
          <Text size={13} gray style={{marginTop: 3}}>
            {item.date + '  NAVER BLOG'}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  avatarChat: {
    width: sizes.base * 5,
    height: sizes.base * 5,
    marginRight: 10,
  },
});
