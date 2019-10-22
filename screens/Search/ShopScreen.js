import React, {useState, useEffect, Fragment} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Animated,
  ActivityIndicator,
} from 'react-native';

import MapView from 'react-native-maps';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import firebase from '../../constants/store';

import {
  Card,
  Button,
  Block,
  Text,
  Divider,
  Reviews,
  FullImageSlider,
  ReservationModal,
  ReviewModal,
  ReviewNewModal,
} from '../../components';
import {theme, mocks} from '../../constants';

import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite, getShop} from '../../redux/action';

const {width} = Dimensions.get('window');

export default function ShopScreen(props) {
  const {navigation, recommendList} = props;

  const [shop, setShop] = useState({});
  const [todo, setTodo] = useState({});

  const user = useSelector(state => state.user, shallowEqual);

  const [isLoaded, setIsLoaded] = useState(false);

  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);
  const [newReviewVisible, setNewReviewVisible] = useState(false);

  const dispatch = useDispatch();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    let shopId = navigation.getParam('shopId');
    let unsubscribe = firebase
      .firestore()
      .collection('shops')
      .doc(shopId)
      .onSnapshot(doc => {
        setShop(doc.data());
        setIsLoaded(true);
      });

    setTodo(navigation.getParam('todo'));
    return () => {
      unsubscribe();
    };
  }, []);

  handleScrollByY = e => {
    if (e.nativeEvent.contentOffset.y > 120) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 120) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 25,
      }).start();
    }
  };

  handleAddHeart = async shop => {
    oldfavorites = user.myfavorites.map(e => e.id);
    newShop = {
      id: shop.id,
      name: shop.name,
      src: shop.preview,
    };
    let newfavorites = user.myfavorites;
    if (oldfavorites.includes(shop.id)) {
      const idx = user.myfavorites.map(e => e.id).indexOf(shop.id);
      newfavorites.splice(idx, 1);
    } else {
      newfavorites.push(newShop);
    }
    dispatch(updateFavorite(newfavorites));
  };

  renderReviews = () => {
    sortedReviews = shop.reviews.sort((a, b) => {
      return b.date.seconds - a.date.seconds;
    });

    return sortedReviews
      .slice(0, 3)
      .map((review, idx) => <Reviews key={idx} review={review} />);
  };

  return isLoaded ? (
    <Block>
      <Animated.View
        style={{
          ...styles.header,
          backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 1)'],
          }),
          borderWidth: fadeAnim,
          borderColor: theme.colors.gray2,
        }}>
        <Block middle center row space="between">
          <Block>
            <TouchableOpacity
              onPressIn={() => {
                navigation.goBack();
              }}
              style={{
                height: 100,
                width: 100,
              }}>
              <Block center row>
                <Animated.Text
                  style={{
                    color: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
                    }),
                  }}>
                  <Ionicons size={30} name="ios-arrow-back" />
                </Animated.Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Animated.Text
            style={{
              color: theme.colors.black,
              fontWeight: 'bold',
              fontSize: 18,
              opacity: fadeAnim,
              marginRight: 30,
            }}>
            {shop.name}
          </Animated.Text>
          <Block middle row right style={{marginRight: 2}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Chat', {
                  email: user.email,
                  shopId: shop.id,
                  shopName: shop.name,
                })
              }
              style={{marginHorizontal: 10, marginTop: 2}}>
              <Animated.Text
                style={{
                  color: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
                  }),
                }}>
                <AntDesign size={26} name="message1" />
              </Animated.Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleAddHeart(shop)}>
              <Animated.Text
                style={{
                  color: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange:
                      user.myfavorites.map(e => e.id).indexOf(shop.id) == -1
                        ? ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
                        : ['rgb(255, 0, 0)', 'rgb(255, 0, 0)'],
                  }),
                }}>
                <Ionicons
                  size={30}
                  name={
                    user.myfavorites.map(e => e.id).indexOf(shop.id) == -1
                      ? 'ios-heart-empty'
                      : 'ios-heart'
                  }
                />
              </Animated.Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Animated.View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 65, zIndex: -1}}
        scrollEventThrottle={360}
        onScroll={handleScrollByY}>
        <FullImageSlider source={shop.source}></FullImageSlider>
        <Block style={{paddingHorizontal: theme.sizes.padding}}>
          <Block style={[styles.categories, {marginTop: 20}]}>
            <Block row space="between">
              <Block>
                <Text bold style={{fontSize: 25, marginBottom: 5}}>
                  {shop.name}
                </Text>
                <Text h3 gray style={styles.content}>
                  {shop.engName}
                </Text>
              </Block>
              <Text bold style={{color: theme.colors.accent}}>
                {shop.tags}
              </Text>
            </Block>
            <Text gray>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              unde recusandae voluptate numquam consectetur quibusdam
            </Text>
          </Block>
          <Divider />

          {todo && Object.entries(todo).length !== 0 ? (
            <Fragment>
              <Block style={styles.categories}>
                <Text h3 bold style={styles.content}>
                  예약정보
                </Text>
                <Block>
                  <Block style={styles.inputRow}>
                    <Text h3>예약인원</Text>
                    <Text color={theme.colors.black} bold h3>
                      {todo.people}명
                    </Text>
                  </Block>
                  <Block style={styles.inputRow}>
                    <Text h3>예약시간</Text>
                    <Text color={theme.colors.black} bold h3>
                      {todo.time}
                    </Text>
                  </Block>
                  <Block style={styles.inputRow}>
                    <Text h3>예약정보</Text>
                    <Text color={theme.colors.black} bold h3>
                      {shop.category == 'Massage' ? '전신마사지' : '스테이크'}
                    </Text>
                  </Block>
                  <Block style={styles.inputRow}>
                    <Text h3>요청사항</Text>
                    <Text color={theme.colors.black} bold h3>
                      {todo.text}
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Divider />
              {todo.pickupTime ? (
                <Fragment>
                  <Block style={styles.categories}>
                    <Text h3 bold style={styles.content}>
                      픽업정보
                    </Text>
                    <Block>
                      <Block style={styles.inputRow}>
                        <Text h3>픽업장소</Text>
                        <Text color={theme.colors.black} bold h3>
                          {todo.pickupLocation}
                        </Text>
                      </Block>
                      <Block style={styles.inputRow}>
                        <Text h3>픽업시간</Text>
                        <Text color={theme.colors.black} bold h3>
                          {todo.pickupTime}
                        </Text>
                      </Block>
                      <Block style={styles.inputRow}>
                        <Text h3>픽업차량</Text>
                        <Text color={theme.colors.black} bold h3>
                          {todo.pickupCar ? todo.pickupCar : '확인중'}
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                  <Divider />
                </Fragment>
              ) : null}
            </Fragment>
          ) : null}

          <Block style={styles.categories}>
            <Text h3 bold style={{...styles.content, marginBottom: 25}}>
              추천메뉴
            </Text>
            {shop.menus.map((item, idx) => (
              <CardMenu key={idx} item={item} />
            ))}
          </Block>
          <Divider />
          <Block style={styles.categories}>
            <Text h3 bold style={styles.content}>
              후기
            </Text>
            {renderReviews()}
            <Block row space="between" style={{marginTop: theme.sizes.padding}}>
              <TouchableOpacity onPress={() => setReviewVisible(true)}>
                <Text h3 bold color={theme.colors.accent}>
                  후기 모두 보기
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setNewReviewVisible(true)}>
                <Text h3 bold color={theme.colors.accent}>
                  후기 작성
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
          <Divider />
          <Block style={styles.categories}>
            <Text h3 bold style={styles.content}>
              업체정보
            </Text>
            <Block>
              <Block style={styles.inputRow}>
                <Text h3>한국어</Text>
                <Text color={theme.colors.black} bold h3>
                  {shop.korean ? '가능' : '불가'}
                </Text>
              </Block>
              <Block style={styles.inputRow}>
                <Text h3>픽업여부</Text>
                <Text color={theme.colors.black} bold h3>
                  {shop.pickup ? '가능' : '불가'}
                </Text>
              </Block>
              <Block style={styles.inputRow}>
                <Text h3>베이비시터</Text>
                <Text color={theme.colors.black} bold h3>
                  {shop.baby ? '가능' : '불가'}
                </Text>
              </Block>
              <Block style={styles.inputRow}>
                <Text h3>영업시간</Text>
                <Text color={theme.colors.black} bold h3>
                  {shop.openTime} ~ {shop.closeTime}
                </Text>
              </Block>
              <Block style={styles.inputRow}>
                <Text h3>주소</Text>
                <Text color={theme.colors.black} bold h3>
                  {shop.address}
                </Text>
              </Block>
              <Block style={styles.inputRow}>
                <Text h3>전화번호</Text>
                <Text color={theme.colors.black} bold h3>
                  {shop.phone}
                </Text>
              </Block>
            </Block>
          </Block>

          <Divider />
          <Block style={styles.categories}>
            <Text h3 bold>
              위치
            </Text>
            <Block row space="between" style={{marginTop: 10}}>
              <Text h3>{shop.address}</Text>
              <Text h3>{shop.engAddress}</Text>
            </Block>
            <MapView
              style={{
                flex: 1,
                height: 200,
                marginTop: theme.sizes.padding / 2,
              }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <MapView.Marker
                coordinate={{latitude: 37.78825, longitude: -122.4324}}
              />
            </MapView>
          </Block>
          <Divider
            style={{
              marginTop: 20,
            }}></Divider>
          <Block style={{...styles.categories, marginTop: 10}}>
            <Text h3 bold style={styles.content}>
              이 근처의 추천 장소
            </Text>
            <Text h4 style={{marginBottom: 10}}>
              {shop.name} 근처의 이런 곳은 어때요?
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}>
              {recommendList.map((item, idx) => (
                <Card key={idx} item={item} navigation={navigation}>
                  <Text
                    gray
                    caption
                    style={{
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    }}>
                    {item.beforePrice}원
                  </Text>
                  <Text h4 bold style={{marginTop: 5}}>
                    {item.afterPrice}원
                  </Text>
                </Card>
              ))}
            </ScrollView>
          </Block>
        </Block>
      </ScrollView>

      <Block
        row
        style={{
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: theme.colors.gray2,
          paddingHorizontal: theme.sizes.padding,
        }}>
        <Block flex={2}>
          <Block row center style={{marginTop: 2, marginBottom: -10}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={shop.review}
              starSize={16}
              fullStarColor={theme.colors.accent}
              containerStyle={{width: 70}}
            />
            <Text style={{marginLeft: 12, fontSize: 16}}>
              {shop.reviewCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                ' '}
              Reviews
            </Text>
          </Block>
          <Block row center>
            <Ionicons
              size={16}
              color={theme.colors.accent}
              name={'ios-heart'}
            />
            <Text style={{marginLeft: 10, fontSize: 16}}>
              {shop.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                ' '}
              Likes
            </Text>
          </Block>
        </Block>
        <Block flex={1}>
          {Object.keys(user.plans).length > 0 ? (
            <Button
              gradient
              onPress={() => {
                setVisible(true);
              }}>
              <Text white center bold>
                {todo && Object.entries(todo).length !== 0
                  ? '예약 변경'
                  : '예약 요청'}
              </Text>
            </Button>
          ) : (
            <Button
              gradient
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text white center bold>
                일정 등록
              </Text>
            </Button>
          )}
        </Block>
      </Block>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <ReservationModal
          shop={shop}
          navigation={navigation}
          setVisible={setVisible}
        />
      </Modal>
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
    </Block>
  ) : (
    <Block style={styles.full}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </Block>
  );
}

ShopScreen.defaultProps = {
  recommendList: mocks.recommendList,
  eventList: mocks.eventList,
};

ShopScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    paddingTop: theme.sizes.padding * 1.8,
    height: 85,
    width: width,
    paddingHorizontal: theme.sizes.padding,
    position: 'absolute',
    zIndex: 100,
  },
  categories: {
    marginVertical: 10,
  },
  content: {
    marginBottom: 15,
  },
  inputRow: {
    paddingBottom: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
