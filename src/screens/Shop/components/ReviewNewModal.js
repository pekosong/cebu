import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {Block, Text} from 'app/src/components';

import {colors, sizes} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

import firebase from 'app/src/constants/store';

export default ReviewNewModal = props => {
  const {setNewReviewVisible, user, shop} = props;
  const [text, setText] = useState('');
  const [starCount, setStarCount] = useState(3);
  const [err, setErr] = useState('');

  handleWriteReview = () => {
    const {email, image} = user;
    const {id} = shop;

    if (!text) {
      setErr('텍스트를 입력하세요');
    } else {
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
        shopRef.update({reviews: reviews}).then(() => {
          setNewReviewVisible(false);
        });
      });
    }
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Block padding={[sizes.padding * 2, sizes.padding]}>
        <TouchableOpacity onPress={() => setNewReviewVisible(false)}>
          <Ionicons size={50} color={colors.black} name="ios-close" />
        </TouchableOpacity>
        <Text h1 bold style={{marginBottom: 20}}>
          후기 작성
        </Text>
        <Block style={{marginBottom: 30, marginHorizontal: 80}}>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            fullStarColor={colors.accent}
            rating={starCount}
            selectedStar={rating => setStarCount(rating)}></StarRating>
        </Block>
        <Text bold h3 style={{marginBottom: 10}}>
          후기
        </Text>
        <TextInput
          multiline={true}
          style={{...styles.inputRow, fontSize: 20}}
          defaultValue={text}
          onChangeText={e => {
            setText(e);
          }}
        />
        {err != '' && (
          <Text h3 style={{color: colors.primary, marginBottom: 10}}>
            {err}
          </Text>
        )}
        <TouchableOpacity onPress={() => handleWriteReview()}>
          <Block
            style={{
              flex: 0,
              paddingVertical: 10,
              borderRadius: 5,
              backgroundColor: colors.accent,
            }}>
            <Text white center h3>
              작성 완료
            </Text>
          </Block>
        </TouchableOpacity>
      </Block>
    </KeyboardAvoidingView>
  );
};

export const styles = StyleSheet.create({
  inputRow: {
    marginVertical: 15,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
    textAlignVertical: 'top',
  },
});
