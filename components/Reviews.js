import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {sizes, colors} from 'app/styles';
import StarRating from 'react-native-star-rating';

import moment from 'moment';

export default Reviews = props => {
  const {review} = props;

  useEffect(() => {}, []);

  return (
    <TouchableOpacity>
      <Block style={styles.reviewWrapper}>
        <Block row space="between">
          <CachedImage uri={review.src} style={styles.avatarChat} />
          <Block bottom style={{marginLeft: 10}}>
            <Text>{moment.unix(review.date.seconds).format('YYYY-MM-DD')}</Text>
            <Text>{review.writer}</Text>
          </Block>
          <Block style={{position: 'absolute', right: 50, bottom: 0}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={review.star}
              starSize={15}
              fullStarColor={colors.accent}
              containerStyle={{width: 20}}
            />
          </Block>
        </Block>
        <Block style={{marginTop: sizes.padding / 1.5}}>
          <Text h3>{review.comment}</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  reviewWrapper: {
    paddingVertical: 16,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
  avatarChat: {
    width: sizes.base * 4,
    height: sizes.base * 4,
    borderRadius: sizes.base * 2,
  },
});
