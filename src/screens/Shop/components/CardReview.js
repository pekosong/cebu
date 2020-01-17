import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';

import {sizes, colors} from 'app/src/styles';
import {pastDay} from 'app/src/utils';

import StarRating from 'react-native-star-rating';
import ReadMore from 'react-native-read-more-text';

const {width} = Dimensions.get('window');

export default CardReview = ({item, google}) => {
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
    <>
      <Block row space="between">
        <Block middle center flex={false}>
          <CachedImage
            uri={
              google
                ? 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png'
                : item.src
            }
            style={styles.avatarChat}
          />
        </Block>
        <Block middle style={{marginLeft: 10}}>
          <Block row center style={{marginBottom: 3}}>
            <Text h4 bold style={{marginRight: 10}}>
              {item.writer.substring(0, 2) + '*'}
            </Text>
            <Text size={12} darkgray>
              {google ? pastDay(item.date) : pastDay(item.date)}
            </Text>
          </Block>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={parseInt(item.star)}
            starSize={15}
            fullStarColor={colors.primary}
            containerStyle={{width: 20}}
          />
        </Block>
      </Block>
      {item.comment.length > 80 ? (
        <Block style={{marginTop: 5}}>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={e => _renderTruncatedFooter(e)}
            renderRevealedFooter={e => _renderRevealedFooter(e)}>
            <Text size={14} style={{lineHeight: 24}}>
              {item.comment}
            </Text>
          </ReadMore>
        </Block>
      ) : (
        <Text size={14} style={{marginVertical: 5, lineHeight: 24}}>
          {item.comment}
        </Text>
      )}
      <Block row style={{marginTop: 10}}>
        {item.image.length > 0 &&
          item.image.map(e => (
            <CachedImage
              key={e}
              uri={e}
              style={{height: 70, width: 70, marginRight: 6}}
            />
          ))}
      </Block>
    </>
  );
};

export const styles = StyleSheet.create({
  avatarChat: {
    width: sizes.base * 2,
    height: sizes.base * 2,
    borderRadius: sizes.base * 2,
    marginTop: 5,
  },
});
