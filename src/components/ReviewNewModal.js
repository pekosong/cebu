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

import {colors, sizes} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import {useDispatch} from 'react-redux';
import {updateShop} from 'app/src/redux/action';

import firebase from 'app/src/constants/store';

export default ReviewNewModal = props => {
  const {setNewReviewVisible, user, shop} = props;
  const [text, setText] = useState('');
  const [starCount, setStarCount] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  handleWriteReview = () => {
    const {email, name, image} = user;
    const {id} = shop;

    const shopRef = firebase
      .firestore()
      .collection('shops')
      .doc(id);

    shopRef.get().then(doc => {
      let reviews = doc.data().reviews;

      reviews.push({
        comment: text,
        writer: email,
        src: image,
        star: starCount,
        date: new Date(),
      });

      newShop = {...shop, reviews: reviews};
      shopRef.update({reviews: reviews}).then(() => {
        dispatch(updateShop(newShop));
        setNewReviewVisible(false);
      });
    });
  };
  return (
    <Block padding={[sizes.padding * 1.5, sizes.padding]}>
      <TouchableOpacity onPress={() => setNewReviewVisible(false)}>
        <Ionicons size={50} color={colors.black} name="ios-close" />
      </TouchableOpacity>
      <Text h1 bold style={{marginBottom: 20}}>
        후기 작성
      </Text>
      <Block bottom style={{marginBottom: 30, marginHorizontal: 50}}>
        <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          fullStarColor={colors.primary}
          rating={starCount}
          selectedStar={rating => setStarCount(rating)}></StarRating>
      </Block>
      <Text bold h3 style={{marginBottom: 10}}>
        후기
      </Text>
      <TextInput
        style={{...styles.inputRow, fontSize: 20}}
        defaultValue={text}
        onChangeText={e => {
          setText(e);
        }}
      />
      <Button gradient onPress={() => handleWriteReview()}>
        <Text white center bold>
          작성완료
        </Text>
      </Button>
    </Block>
  );
};

export const styles = StyleSheet.create({
  inputRow: {
    marginVertical: 15,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
  },
});