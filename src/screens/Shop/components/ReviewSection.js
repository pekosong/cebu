import React, {useState, useContext} from 'react';
import {StyleSheet, Modal, FlatList, Dimensions} from 'react-native';

import {Block, Text, Button, Divider} from 'app/src/components';

import CardReview from './CardReview';
import CardNaver from './CardNaver';

import ReviewNewModal from './ReviewNewModal';
import ReviewWebModal from './ReviewWebModal';

import {AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {UserStoreContext} from 'app/src/store/user';
import {colors, style, sizes} from 'app/src/styles';
import {convertComma} from 'app/src/utils';

import {observer} from 'mobx-react-lite';
const {width} = Dimensions.get('window');

const ReviewSection = observer(({navigation, shop}) => {
  const {user} = useContext(UserStoreContext);
  const [newReviewVisible, setNewReviewVisible] = useState(false);
  const [webViewVisible, setwebViewVisible] = useState(false);
  const [page, setPage] = useState('');

  return (
    <Block style={style.shop.categories}>
      <FlatList
        ItemSeparatorComponent={() => (
          <Block
            style={{
              marginVertical: 10,
            }}></Block>
        )}
        ListEmptyComponent={
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
        }
        ListHeaderComponent={
          <Block style={{marginBottom: 30}}>
            <Block row space="between">
              <Text h1 bold>
                이용 후기
              </Text>
              <TouchableOpacity onPress={() => setNewReviewVisible(true)}>
                <Text h3 bold accent>
                  후기 작성
                </Text>
              </TouchableOpacity>
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
                {` (${convertComma(shop.reviewCnt)})`}
              </Text>
            </Block>
          </Block>
        }
        data={shop.reviews.sort((a, b) => b.date.seconds - a.date.seconds)}
        renderItem={({item}) => <CardReview item={item}></CardReview>}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <Divider></Divider>
      <FlatList
        ItemSeparatorComponent={() => (
          <Block
            style={{
              marginVertical: 10,
            }}></Block>
        )}
        ListHeaderComponent={
          <Block style={{marginBottom: 30}}>
            <Block row space="between">
              <Text h1 bold>
                구글 후기
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text h3 bold accent>
                  더보기
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        }
        data={shop.googles.sort((a, b) => b.date.seconds - a.date.seconds)}
        renderItem={({item}) => <CardReview item={item}></CardReview>}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <Divider></Divider>
      <FlatList
        ItemSeparatorComponent={() => (
          <Block
            style={{
              marginVertical: 10,
            }}></Block>
        )}
        contentContainerStyle={{paddingBottom: 50}}
        ListHeaderComponent={
          <Block style={{marginBottom: 30}}>
            <Block row space="between">
              <Text h1 bold>
                소셜 후기
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text h3 bold accent>
                  더보기
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        }
        data={shop.blogs.filter(e => e.title != '')}
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
