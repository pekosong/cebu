import React, {useEffect} from 'react';
import {Platform, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import Block from './Block';
import Text from './Text';

import {colors, sizes} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default ReviewModal = props => {
  const {setReviewVisible, reviews, review, reviewCnt} = props;

  useEffect(() => {
    console.log(reviews);
  }, []);

  return (
    <Block
      padding={[
        Platform.OS === 'ios' ? sizes.padding * 2 : sizes.padding,
        sizes.padding,
      ]}>
      <TouchableOpacity onPress={() => setReviewVisible(false)}>
        <Ionicons size={50} color={colors.black} name="ios-close" />
      </TouchableOpacity>
      <Block row space="between" style={{flex: 0, height: 50}}>
        <Text h1 bold>
          후기
        </Text>
        <Block>
          <Text h4 right>
            {reviewCnt
              ? reviewCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' '
              : null}
            Reviews
          </Text>
          <Block style={{position: 'absolute', right: 62, top: 25}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={review}
              starSize={20}
              fullStarColor={colors.accent}
              containerStyle={{width: 30}}
            />
          </Block>
        </Block>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        {reviews
          ? reviews.map((review, idx) => <Reviews key={idx} review={review} />)
          : null}
        {reviews
          ? reviews.map((review, idx) => <Reviews key={idx} review={review} />)
          : null}
      </ScrollView>
    </Block>
  );
};

export const styles = StyleSheet.create({});