import React, {useState, Fragment} from 'react';
import {StyleSheet, Modal} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

import {Button, Block, Text, ReservationModal} from '../../components';
import {theme} from '../../constants';

export default function BottomSection(props) {
  const {navigation, shop, todo, user} = props;
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <Block
        row
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          paddingHorizontal: theme.sizes.padding,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
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
              border
              onPress={() => {
                setVisible(true);
              }}>
              <Text accent center bold>
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
    </Fragment>
  );
}

BottomSection.defaultProps = {};

BottomSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
