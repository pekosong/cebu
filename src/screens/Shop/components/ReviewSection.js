import React, {useState, useContext} from 'react';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {
  Block,
  Text,
  Reviews,
  ReviewModal,
  ReviewNewModal,
} from 'app/src/components';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

import {sizes, colors, style} from 'app/src/styles';

const ReviewSection = observer(props => {
  const {navigation, shop} = props;

  const {user} = useContext(UserStoreContext);

  const [reviewVisible, setReviewVisible] = useState(false);
  const [newReviewVisible, setNewReviewVisible] = useState(false);

  return (
    <>
      <Block style={[style.shop.categories]}>
        <Block row space="between" style={{marginBottom: 20}}>
          <Text h2 bold>
            이용 후기
          </Text>
          <TouchableOpacity onPress={() => setNewReviewVisible(true)}>
            <Text h2 bold accent>
              후기 작성
            </Text>
          </TouchableOpacity>
        </Block>
        {shop.reviews
          .sort((a, b) => {
            return b.date.seconds - a.date.seconds;
          })
          .map((review, idx) => (
            <Reviews key={idx} review={review} />
          ))}
      </Block>
      <Modal
        animationType="slide"
        visible={reviewVisible}
        onRequestClose={() => setReviewVisible(false)}>
        <ReviewModal
          review={shop.review}
          reviewCnt={shop.reviewCnt}
          reviews={shop.reviews}
          navigation={navigation}
          setReviewVisible={setReviewVisible}
        />
      </Modal>
      <Modal
        animationType="slide"
        visible={newReviewVisible}
        onRequestClose={() => setNewReviewVisible(false)}>
        <ReviewNewModal
          navigation={navigation}
          user={user}
          shop={shop}
          setNewReviewVisible={setNewReviewVisible}
        />
      </Modal>
    </>
  );
});

ReviewSection.defaultProps = {};

ReviewSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});

export default ReviewSection;
