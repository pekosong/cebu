import React, {useState, useEffect} from 'react';
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

import {
  Button,
  Block,
  Text,
  Divider,
  Reviews,
  FullImageSlider,
  ReservationModal,
  ReviewModal,
} from '../../components';
import {theme, mocks} from '../../constants';

import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {updateFavorite} from '../../redux/action';

const {height, width} = Dimensions.get('window');

const items = [
  {
    name: '전신마사지',
    desc: '전신을 마사지',
    src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
  },
  {
    name: '전신마사지',
    desc: '전신을 마사지',
    src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
  },
  {
    name: '전신마사지',
    desc: '전신을 마사지',
    src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
  },
  {
    name: '전신마사지',
    desc: '전신을 마사지',
    src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
  },
];

export default function ShopScreen(props) {
  const {navigation, recommendList} = props;
  const [shop, setShop] = useState({});
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);
  const shops = useSelector(state => state.shops, shallowEqual);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    let shopCode = navigation.getParam('shopCode');
    if (shopCode) {
      let myShop = shops.filter(e => e.id == shopCode);
      setShop(myShop[0]);
      setIsLoaded(true);
    } else {
      setShop(navigation.getParam('shop'));
      setIsLoaded(true);
    }
  }, [user, shops]);

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
    let newfavorites = user.myfavorites;
    if (newfavorites.includes(shop)) {
      const idx = newfavorites.indexOf(shop);
      newfavorites.splice(idx, 1);
    } else {
      newfavorites.push(shop);
    }
    dispatch(updateFavorite(newfavorites));
  };

  return (
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

            <TouchableOpacity onPress={() => handleAddHeart(shop.id)}>
              <Animated.Text
                style={{
                  color: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange:
                      user.myfavorites.indexOf(shop.id) == -1
                        ? ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
                        : ['rgb(255, 0, 0)', 'rgb(255, 0, 0)'],
                  }),
                }}>
                <Ionicons
                  size={30}
                  name={
                    user.myfavorites.indexOf(shop.id) == -1
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
            recusandae voluptate numquam consectetur quibusdam
          </Text>
        </Block>
        <Divider />
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            업체정보
          </Text>
          <Block>
            <Block style={styles.inputRow}>
              <Text h3>언어</Text>
              <Text color={theme.colors.black} bold h3>
                한국어, 영어
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
                가능
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
          <Text h3 bold style={styles.content}>
            추천메뉴
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}>
            {items.map((item, idx) => (
              <CardMenu key={idx} item={item}>
                <Block middle>
                  <Text right bold>
                    30,000원
                  </Text>
                </Block>
              </CardMenu>
            ))}
          </ScrollView>
        </Block>
        <Divider />
        <Block style={styles.categories}>
          <Text h3 bold style={styles.content}>
            후기
          </Text>
          {shop.reviews
            ? shop.reviews.map((review, idx) => (
                <Reviews key={idx} review={review} />
              ))
            : null}
          <TouchableOpacity
            style={{marginTop: theme.sizes.padding}}
            onPress={() => setReviewVisible(true)}>
            <Text h3 bold color={theme.colors.accent}>
              후기 모두 보기
            </Text>
          </TouchableOpacity>
        </Block>
        <Divider />
        <Block style={styles.categories}>
          <Block row space="between">
            <Text h3 bold>
              위치
            </Text>
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
      </ScrollView>

      <Block
        row
        style={{
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: theme.colors.gray2,
        }}>
        <Block
          flex={2}
          left
          style={{
            marginLeft: theme.sizes.padding,
          }}>
          <Block row center style={{marginTop: 5, marginBottom: -5}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={shop.review}
              starSize={16}
              fullStarColor={theme.colors.accent}
              containerStyle={{width: 70}}
            />
            <Text style={{marginLeft: 12, fontSize: 16}}>
              {shop.reviewCnt
                ? shop.reviewCnt
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' '
                : null}
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
              {shop.likes
                ? shop.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                  ' '
                : null}
              Likes
            </Text>
          </Block>
        </Block>
        <Block flex={1} style={{marginRight: theme.sizes.padding}}>
          {Object.keys(user.plans).length > 0 ? (
            <Button
              gradient
              onPress={() => {
                setVisible(true);
              }}>
              <Text white center bold>
                예약 요청
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
    paddingHorizontal: theme.sizes.padding,
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
