import React, {useState, useContext} from 'react';
import {StyleSheet, Modal, FlatList} from 'react-native';

import {Block, Text, Button, Divider} from 'app/src/components';

import CardReview from './CardReview';
import CardNaver from './CardNaver';

import ReviewNewModal from './ReviewNewModal';
import ReviewWebModal from './ReviewWebModal';

import {AntDesign} from '@expo/vector-icons';

import {UserStoreContext} from 'app/src/store/user';
import {colors, sizes} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

import {observer} from 'mobx-react-lite';

const ReviewSection = observer(({navigation, shop}) => {
  const {user} = useContext(UserStoreContext);
  const [newReviewVisible, setNewReviewVisible] = useState(false);
  const [webViewVisible, setwebViewVisible] = useState(false);
  const [page, setPage] = useState('');

  const [googleCnt, setGoogleCnt] = useState(5);
  const [naverCnt, setNaverCnt] = useState(5);

  const itemSeparatorElement = () => (
    <Block
      style={{
        marginVertical: 10,
      }}></Block>
  );

  const emptyElement = () => (
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
    </Block>
  );

  const headerElement = title => (
    <Block style={{marginTop: 20, marginBottom: 30}}>
      <Text h1 bold>
        {`${title} 후기`}
      </Text>
    </Block>
  );

  return (
    <Block>
      <FlatList
        key={'ReviewList'}
        ItemSeparatorComponent={itemSeparatorElement}
        ListEmptyComponent={emptyElement()}
        ListHeaderComponent={
          <Block style={{marginBottom: 30}}>
            <Text h1 bold>
              이용 후기
            </Text>
            <Block left row center style={{marginTop: 10}}>
              <AntDesign
                size={24}
                color={colors.primary}
                name="star"></AntDesign>
              <Text h1 bold style={{marginLeft: 5}}>
                {shop.review}
              </Text>
              <Text h3 bold style={{marginLeft: 5}}>
                {` (${convertComma(shop.reviewCnt)})`}
              </Text>
            </Block>
          </Block>
        }
        ListFooterComponent={
          <Button
            border
            onPress={() => setNewReviewVisible(true)}
            style={{marginTop: 20}}>
            <Text bold accent center>
              후기 작성
            </Text>
          </Button>
        }
        data={shop.reviews.sort((a, b) => b.date.seconds - a.date.seconds)}
        renderItem={({item}) => <CardReview item={item}></CardReview>}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <Divider></Divider>
      <FlatList
        ItemSeparatorComponent={itemSeparatorElement}
        ListHeaderComponent={headerElement('구글')}
        ListFooterComponent={
          <Button
            border
            onPress={() =>
              setGoogleCnt(googleCnt === 5 ? shop.googles.length : 5)
            }
            style={{marginTop: 20}}>
            <Text bold accent center>
              {googleCnt === 5 ? '더 보기' : '닫기'}
            </Text>
          </Button>
        }
        data={shop.googles.slice(0, googleCnt)}
        renderItem={({item}) => <CardReview item={item} google></CardReview>}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <Divider></Divider>
      <FlatList
        ItemSeparatorComponent={itemSeparatorElement}
        contentContainerStyle={{paddingBottom: 50}}
        ListHeaderComponent={headerElement('소셜')}
        data={shop.blogs.filter(e => e.title != '').slice(0, naverCnt)}
        renderItem={({item}) => (
          <CardNaver
            item={item}
            setPage={setPage}
            setwebViewVisible={setwebViewVisible}></CardNaver>
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
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
      <Modal
        animationType="slide"
        visible={webViewVisible}
        onRequestClose={() => setwebViewVisible(false)}>
        <ReviewWebModal page={page} setwebViewVisible={setwebViewVisible} />
      </Modal>
    </Block>
  );
});

ReviewSection.defaultProps = {};

ReviewSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});

export default ReviewSection;
