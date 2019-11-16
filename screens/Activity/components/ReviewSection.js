import React, {useState, Fragment} from 'react';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {
  Block,
  Text,
  Reviews,
  ReviewModal,
  ReviewNewModal,
} from '../../../components';
import {theme} from '../../../styles';

export default function ReviewSection(props) {
  const {navigation, shop, user} = props;

  const [reviewVisible, setReviewVisible] = useState(false);
  const [newReviewVisible, setNewReviewVisible] = useState(false);

  renderReviews = () => {
    const reviews = [
      {
        comment: '아아아ㅏ아아아아아',
        date: {
          nanoseconds: 869000000,
          seconds: 1571663107,
        },
        src: 'https://randomuser.me/api/portraits/women/41.jpg',
        star: 3,
        writer: 'b@naver.com',
      },
      {
        comment: '너무 좋아요',
        date: {
          nanoseconds: 993000000,
          seconds: 1571477949,
        },
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        star: 5,
        writer: 'peko22@naver.com',
      },
      {
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        date: {
          nanoseconds: 993000000,
          seconds: 1571477949,
        },
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        star: 3,
        writer: 'peko2@naver.com',
      },
      {
        comment: '다음에 꼭 다시 오고 싶어요',
        date: {
          nanoseconds: 993000000,
          seconds: 1571477949,
        },
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        star: 4,
        writer: 'peko1@naver.com',
      },
    ];
    sortedReviews = reviews.sort((a, b) => {
      return b.date.seconds - a.date.seconds;
    });

    return sortedReviews
      .slice(0, 3)
      .map((review, idx) => <Reviews key={idx} review={review} />);
  };

  return (
    <Fragment>
      <Block style={styles.categories}>
        <Block row space="between" style={styles.content}>
          <Text h3 bold>
            후기
          </Text>
          <TouchableOpacity onPress={() => setReviewVisible(true)}>
            <Text h3 bold color={theme.colors.accent}>
              더보기
            </Text>
          </TouchableOpacity>
        </Block>
        {renderReviews()}
        {renderReviews()}
        <Block style={{marginTop: theme.sizes.padding}}>
          <TouchableOpacity onPress={() => setNewReviewVisible(true)}>
            <Text right h3 bold color={theme.colors.accent}>
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

const styles = StyleSheet.create({
  categories: {
    marginVertical: 10,
  },
  content: {
    marginBottom: 15,
  },
});
