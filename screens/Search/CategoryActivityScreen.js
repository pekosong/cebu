import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import {Block, Text} from '../../components';
import {theme} from '../../constants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const activityList = [
  {
    src: 'http://thecebu.co.kr/wp-content/uploads/2019/01/005.jpg',
    category: '호핑',
    title: '물고기들과 교감',
    sub: 'Cebu',
  },
  {
    src:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30884/194557_large_1525764053.jpg',
    category: '투어',
    title: '상어 투어',
    sub: 'Cebu',
  },
  {
    src:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/7979/44910_large_1525337841.jpg',
    category: '시티투어',
    title: '전망대, 카지노',
    sub: 'Cebu',
  },
];

export default function CategoryActivityScreen(props) {
  const {navigation} = props;

  const [fadeAnim] = useState(new Animated.Value(0));

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

  renderActivityList = (e, idx) => {
    return (
      <TouchableWithoutFeedback
        key={idx}
        onPress={() => {
          navigation.navigate('Activity');
        }}>
        <Block
          style={{
            marginTop: 40,
            marginBottom: 20,
            marginLeft: idx != 0 ? 20 : 0,
            marginRight: idx == 2 ? 40 : 0,
          }}>
          <CachedImage
            key={e.src}
            uri={e.src}
            style={{
              borderRadius: 5,
              height: 200,
              width: 160,
              resizeMode: 'cover',
            }}
          />
          <Block
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0, 0,0, 0.3)',
            }}>
            <Text center h4 white style={{marginTop: 20}}>
              {e.category}
            </Text>
            <Text center h3 white bold style={{marginTop: 100}}>
              {e.title}
            </Text>
            <Text center h3 white bold>
              {e.sub}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Block style={{backgroundColor: 'black'}}>
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
            라라호핑
          </Animated.Text>
        </Block>
      </Animated.View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 65, zIndex: -1}}
        scrollEventThrottle={360}>
        <Block
          style={{
            paddingTop: 120,
            paddingBottom: 40,
            backgroundColor: 'black',
          }}>
          <Text primary h4 bold center style={{marginBottom: 20}}>
            헬로우 세부 체험
          </Text>
          <Text white bold center style={{fontSize: 35, marginBottom: 10}}>
            현지인이 운영하는
          </Text>
          <Text white bold center style={{fontSize: 35}}>
            하나뿐인 특별한 Activity
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              paddingLeft: theme.sizes.padding,
              paddingRight: theme.sizes.padding * 2,
            }}>
            {activityList.map((e, idx) => renderActivityList(e, idx))}
          </ScrollView>
        </Block>
      </ScrollView>
    </Block>
  );
}

CategoryActivityScreen.defaultProps = {};

CategoryActivityScreen.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.sizes.padding * 1.8,
    height: 85,
    width: width,
    paddingHorizontal: theme.sizes.padding,
    position: 'absolute',
    zIndex: 100,
  },
});
