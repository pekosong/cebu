import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Block from './Block';
import Text from './Text';
import CachedImage from './CachedImage';
import {theme} from '../constants';
import StarRating from 'react-native-star-rating';

export default Reviews = props => {
  const {review} = props;

  useEffect(() => {}, []);

  return (
    <TouchableOpacity>
      <Block style={{marginVertical: theme.sizes.padding / 3}}>
        <Block row space="between">
          <CachedImage uri={review.src} style={styles.avatarChat} />
          <Block bottom style={{marginLeft: 10}}>
            <Text>2019년 9월</Text>
            <Text>{review.writer}</Text>
          </Block>
          <Block style={{position: 'absolute', right: 50, bottom: 0}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={review.star}
              starSize={15}
              fullStarColor={theme.colors.accent}
              containerStyle={{width: 20}}
            />
          </Block>
        </Block>
        <Block style={{marginTop: theme.sizes.padding / 2}}>
          <Text h3>{review.comment}</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 3,
    width: 250,
    height: 250,
    marginRight: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  avatarChat: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2,
  },
});
