import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import Block from './Block';
import Text from './Text';
import Button from './Button';

import {theme} from '../constants';
import {Ionicons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default NewReviewModal = props => {
  const {setNewReviewVisible} = props;
  const [text, setText] = useState('');
  const [starCount, setStarCount] = useState(5);

  useEffect(() => {}, []);

  return (
    <Block padding={[theme.sizes.padding * 1.5, theme.sizes.padding]}>
      <TouchableOpacity onPress={() => setNewReviewVisible(false)}>
        <Ionicons size={50} color={theme.colors.black} name="ios-close" />
      </TouchableOpacity>
      <Text h1 bold style={{marginBottom: 20}}>
        리뷰 작성
      </Text>
      <Block bottom style={{marginBottom: 50, marginHorizontal: 50}}>
        <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          fullStarColor={theme.colors.primary}
          rating={starCount}
          selectedStar={rating => setStarCount(rating)}></StarRating>
      </Block>
      <Text bold h3>
        리뷰
      </Text>
      <TextInput
        style={{fontSize: 20}}
        defaultValue={text}
        onChangeText={e => {
          setText(e);
        }}
      />
      <Button gradient onPress={() => setNewReviewVisible(false)}>
        <Text white center bold>
          작성완료
        </Text>
      </Button>
    </Block>
  );
};

export const styles = StyleSheet.create({});
