import React, {useState, Fragment} from 'react';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {
  Block,
  Text,
  Reviews,
  ReviewModal,
  ReviewNewModal,
} from 'app/components';
import {sizes, colors, style} from 'app/styles';

export default function ReviewSection(props) {
  const {navigation, shop, user} = props;

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
        <Block row space="between" style={style.shop.content}>
          <Text h3 bold>
            후기
          </Text>
          <TouchableOpacity onPress={() => setReviewVisible(true)}>
            <Text h3 bold color={colors.accent}>
              더보기
            </Text>
          </TouchableOpacity>
        </Block>
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
}

ReviewSection.defaultProps = {};

ReviewSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
