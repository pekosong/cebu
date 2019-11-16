import React, {useState, useRef} from 'react';
import {StyleSheet, Animated, ScrollView} from 'react-native';

import {Block, Divider} from '../../components';
import {mocks} from '../../constants';
import {theme} from '../../styles';
import AppBar from './components/AppBar';
import HeaderSection from './components/HeaderSection';
import TabBarSection from './components/TabBarSection';

import MenuSection from './components/MenuSection';
import ProgramSection from './components/ProgramSection';

import ReviewSection from './components/ReviewSection';
import ShopInfoSection from './components/ShopInfoSection';
import BottomSection from './components/BottomSection';
import RecommendSection from './components/RecommendSection';

import {useSelector, shallowEqual} from 'react-redux';

export default function ActivityScreen(props) {
  const {navigation} = props;

  const [show, setShow] = useState('menu');

  const shop = mocks.ActivityList[0];
  const shopScroll = useRef(null);

  const user = useSelector(state => state.user, shallowEqual);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [yAnim] = useState(new Animated.Value(0));
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  goTop = () => {
    shopScroll.current.scrollTo({x: 0, y: 210});
  };

  handleScrollByY = e => {
    if (e.nativeEvent.contentOffset.y > 130) {
      Animated.timing(yAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 130) {
      Animated.timing(yAnim, {
        toValue: 0,
        duration: 80,
      }).start();
    }

    if (e.nativeEvent.contentOffset.y > 80) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (e.nativeEvent.contentOffset.y < 80) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 25,
      }).start();
    }
  };

  return (
    <Block>
      <AppBar
        navigation={navigation}
        user={user}
        shop={shop}
        fadeAnim={fadeAnim}></AppBar>
      <HeaderSection
        top={animatedScrollYValue}
        shop={shop}
        yAnim={yAnim}></HeaderSection>
      <TabBarSection
        category={shop.category}
        top={animatedScrollYValue}
        setShow={setShow}
        goTop={goTop}></TabBarSection>
      <ScrollView
        ref={shopScroll}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginBottom: 10,
          zIndex: 10,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedScrollYValue}}}],
          {
            listener: event => {
              handleScrollByY(event);
            },
          },
        )}
        scrollEventThrottle={360}>
        <Animated.View
          style={{
            marginTop: 360,
            paddingTop: animatedScrollYValue.interpolate({
              inputRange: [0, 210],
              outputRange: [70, 0],
              extrapolate: 'clamp',
              useNativeDriver: true,
            }),
            paddingHorizontal: theme.sizes.padding,
            backgroundColor: theme.colors.white,
          }}>
          {shop.category != 'Activity' && show === 'menu' ? (
            <MenuSection shop={shop}></MenuSection>
          ) : null}
          {shop.category == 'Activity' && show === 'menu' ? (
            <ProgramSection shop={shop}></ProgramSection>
          ) : null}
          {show === 'review' ? (
            <ReviewSection
              user={user}
              shop={shop}
              navigation={navigation}></ReviewSection>
          ) : null}
          {show === 'info' ? (
            <ShopInfoSection shop={shop}></ShopInfoSection>
          ) : null}
          <Divider></Divider>
          <RecommendSection
            navigation={navigation}
            shop={shop}></RecommendSection>
        </Animated.View>
      </ScrollView>
      <BottomSection
        navigation={navigation}
        shop={shop}
        user={user}></BottomSection>
    </Block>
  );
}

ActivityScreen.defaultProps = {};

ActivityScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
});
