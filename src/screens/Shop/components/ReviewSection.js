import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';

import {Block, Text, Button} from 'app/src/components';

import CardReview from './CardReview';
import ReviewNewModal from './ReviewNewModal';

import {AntDesign} from '@expo/vector-icons';

import {UserStoreContext} from 'app/src/store/user';
import {colors, style, sizes} from 'app/src/styles';

import {observer} from 'mobx-react-lite';

const {width} = Dimensions.get('window');

const ReviewSection = observer(({navigation, shop}) => {
  const {user} = useContext(UserStoreContext);
  const [newReviewVisible, setNewReviewVisible] = useState(false);

  if (shop.reviews.length == 0) {
    return (
      <Block
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: sizes.padding,
        }}>
        <Text bold center h2 style={{marginBottom: 10}}>
          등록된 후기가 없습니다.
        </Text>
        <Text center h4 style={{marginBottom: 20}}>
          첫 후기를 작성하세요.
        </Text>
        <Button
          border
          onPress={() => setNewReviewVisible(true)}
          style={{width: width - sizes.padding * 2}}>
          <Text accent center>
            후기 작성
          </Text>
        </Button>
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
      <Block style={style.shop.categories}>
        <FlatList
          ListHeaderComponent={
            <Block style={{marginBottom: 30}}>
              <Block row space="between">
                <Text h1 bold>
                  이용 후기
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => setNewReviewVisible(true)}>
                  <Text h2 bold accent>
                    후기 작성
                  </Text>
                </TouchableWithoutFeedback>
              </Block>
              <Block left row center style={{marginTop: 10}}>
                <AntDesign
                  size={24}
                  color={colors.primary}
                  name="star"></AntDesign>
                <Text h1 bold style={{marginLeft: 5}}>
                  {shop.review}
                </Text>
                <Text h2 bold style={{marginLeft: 5}}>
                  {` (${shop.reviewCnt})`}
                </Text>
              </Block>
            </Block>
          }
          data={shop.reviews.sort((a, b) => b.date.seconds - a.date.seconds)}
          renderItem={({item}) => <CardReview item={item}></CardReview>}
          keyExtractor={item => item.id}
        />
      </Block>
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
