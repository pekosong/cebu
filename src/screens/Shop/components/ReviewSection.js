import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
} from 'react-native';

import {
  Block,
  Text,
  ReviewModal,
  ReviewNewModal,
  CachedImage,
} from 'app/src/components';
import {AntDesign} from '@expo/vector-icons';

import {UserStoreContext} from 'app/src/store/user';
import {sizes, colors, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';

import StarRating from 'react-native-star-rating';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const ReviewSection = observer(({navigation, shop}) => {
  const {user} = useContext(UserStoreContext);
  const [reviewVisible, setReviewVisible] = useState(false);
  const [newReviewVisible, setNewReviewVisible] = useState(false);

  if (shop.reviews.length == 0) {
    return (
      <Block
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text bold center h2 style={{marginBottom: 10}}>
          등록된 후기가 없습니다.
        </Text>
        <Text center h4 style={{marginBottom: 20}}>
          첫 후기를 작성하세요.
        </Text>
        <TouchableWithoutFeedback onPress={() => setNewReviewVisible(true)}>
          <Block
            style={[
              styles.shadow,
              {
                flex: 0,
                paddingVertical: 10,
                borderRadius: 20,
                width: 300,
                backgroundColor: colors.accent,
              },
            ]}>
            <Text white center h3>
              후기 작성
            </Text>
          </Block>
        </TouchableWithoutFeedback>
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
      </Block>
    );
  }
  return (
    <>
      <Block style={[style.shop.categories, {minHeight: height - 180}]}>
        <Block style={{marginBottom: 30}}>
          <Block row space="between">
            <Text h1 bold>
              이용 후기
            </Text>
            <TouchableWithoutFeedback onPress={() => setNewReviewVisible(true)}>
              <Text h2 bold accent>
                후기 작성
              </Text>
            </TouchableWithoutFeedback>
          </Block>
          <Block left row center style={{marginTop: 10}}>
            <AntDesign size={24} color={colors.primary} name="star"></AntDesign>
            <Text h1 bold style={{marginLeft: 5}}>
              {shop.review}
            </Text>
            <Text h2 bold style={{marginLeft: 5}}>
              {` (${shop.reviewCnt})`}
            </Text>
          </Block>
        </Block>
        {shop.reviews
          .sort((a, b) => {
            return b.date.seconds - a.date.seconds;
          })
          .map((review, idx) => (
            <TouchableOpacity key={idx}>
              <Block style={styles.reviewWrapper}>
                <Block row space="between">
                  <CachedImage uri={review.src} style={styles.avatarChat} />
                  <Block bottom style={{marginLeft: 10}}>
                    <Text>{review.writer}</Text>
                    <Text>
                      {moment.unix(review.date.seconds).format('YYYY-MM-DD')}
                    </Text>
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
                <Block style={{marginTop: 16}}>
                  <Text>{review.comment}</Text>
                </Block>
                <Block row style={{marginTop: 16}}>
                  {[
                    'http://mblogthumb1.phinf.naver.net/MjAxODA1MTVfMTYz/MDAxNTI2MzczNDIyMDA0.JDrUBkJH0BbA-BFy0efcxDlU04fqD87IeWPwBKMESu8g.bUJvoLUoLu9AZVSvgjXn80PAkjLpZjnVpzuY7015Bocg.JPEG.jhot1123/1526373393565.jpg?type=w800',
                    'http://mblogthumb4.phinf.naver.net/MjAxODAyMjVfMjQw/MDAxNTE5NTY3MzAzMDMz.C87S7N4Ok0kbbkLLWnFFudCAC0mnEGjrCVjeBaUY7w4g.B4FB915csBPqkg6tgaCh6nA_jp3ouXI2jUReEJ4OAGEg.JPEG.kejsms1107/%EC%84%B8%EB%B6%80%EB%A7%88%EC%82%AC%EC%A7%80.JPG?type=w800',
                    'https://m.cebudiary.com:454/upload/coupons/1534130524_1.jpg',
                    'http://mblogthumb1.phinf.naver.net/MjAxODA1MDFfMjM1/MDAxNTI1MTUwNDI4OTk2.wxcrd2EExOVkvVME5u5Of4RjC9WtgbxPdU87M1GdZLMg.h7J7gl9PmcMrLUAZgri5-f4iUKyJsvSIydWGliMLWykg.JPEG.386265/%EC%84%B8%EB%B6%80%EC%9D%8C%EC%8B%9D.jpg?type=w800',
                  ].map(e => (
                    <CachedImage key={e} uri={e} style={styles.menuImage} />
                  ))}
                </Block>
              </Block>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  reviewWrapper: {
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
    paddingBottom: 30,
    marginBottom: 30,
  },
  avatarChat: {
    width: sizes.base * 4,
    height: sizes.base * 4,
    borderRadius: sizes.base * 2,
  },
  menuImage: {
    width: (width - 30 - sizes.padding * 2) / 4,
    height: (width - 30 - sizes.padding * 2) / 4,
    marginRight: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default ReviewSection;
