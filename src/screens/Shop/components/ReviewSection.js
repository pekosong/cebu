import React, {useState, useContext, Fragment} from 'react';
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

  renderReviews = () => {
    sortedReviews = shop.reviews.sort((a, b) => {
      return b.date.seconds - a.date.seconds;
    });

    return sortedReviews
      .slice(0, 3)
      .map((review, idx) => <Reviews key={idx} review={review} />);
  };

  return (
    <Fragment>
      <Block style={style.shop.categories}>
        <Text h3 bold style={{marginBottom: 10}}>
          후기
        </Text>
        {renderReviews()}
        {renderReviews()}
        <Block style={{marginTop: sizes.padding}}>
          <TouchableOpacity onPress={() => setNewReviewVisible(true)}>
            <Text right h3 bold color={colors.accent}>
              후기 작성
            </Text>
          </TouchableOpacity>
        </Block>
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
    </Fragment>
  );
});

ReviewSection.defaultProps = {};

ReviewSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});

export default ReviewSection;
