import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import Block from './Block';
import Text from './Text';
import Favorite from './Favorite';
import {colors, sizes} from 'app/styles';
import StarRating from 'react-native-star-rating';

const {width} = Dimensions.get('window');

export default CardRect = props => {
  const {style, item, navigation, idx} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Shop', {
          shopId: item.shopCode,
        });
      }}>
      <Block
        style={[
          styles.container,
          {paddingRight: idx % 2 == 0 ? 16 : 0},
          {marginBottom: idx == 1 || idx == 0 ? 30 : 0},
          {
            width:
              idx % 2 == 0
                ? width / 2 - sizes.padding + 8
                : width / 2 - sizes.padding - 8,
          },
        ]}>
        <Block flex={2}>
          <Image style={styles.imageStyle} source={item.src}></Image>
          <Favorite
            shop={{
              id: item.shopCode,
              name: item.shop,
              preview: item.url,
            }}></Favorite>
          <Block style={styles.overlap}></Block>
        </Block>
        <Block style={{marginTop: 6}}>
          <Block flex={3} middle>
            <Text
              primary
              caption
              style={{marginBottom: Platform.OS == 'ios' ? 5 : 0}}>
              {item.tag}
            </Text>
            <Text bold style={{marginBottom: Platform.OS == 'ios' ? 0 : 5}}>
              {item.shop}
            </Text>
            <Block center row style={{alignItems: 'center'}}>
              <Text accent bold style={{paddingBottom: 3, marginRight: 5}}>
                {item.star}
              </Text>

              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.star}
                starSize={12}
                fullStarColor={colors.accent}
                containerStyle={{width: 12}}
              />
              <Text accent bold style={{marginLeft: 50}}>
                123
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    height: width / 2 - sizes.padding,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 3,
  },
  overlap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 3,
  },
});
