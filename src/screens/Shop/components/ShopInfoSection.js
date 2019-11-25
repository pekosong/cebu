import React, {useState, Fragment} from 'react';
import {StyleSheet, Dimensions, ScrollView, Platform} from 'react-native';
import MapView from 'react-native-maps';

import {Block, Text, CachedImage, Divider} from 'app/src/components';
import {sizes, style} from 'app/src/styles';
const {width} = Dimensions.get('window');

export default function ShopInfoSection(props) {
  const {shop} = props;
  const [imageNum, setImageNum] = useState(1);

  handleScrollByX = e => {
    const xPosition = Platform.OS === 'android' ? 360 : 414;
    if (e.nativeEvent.contentOffset.x % xPosition == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / xPosition) + 1);
    }
  };

  return (
    <Fragment>
      <Block style={{maxHeight: 300}}>
        <Text
          h3
          bold
          style={[style.shop.content, {paddingHorizontal: sizes.padding}]}>
          사진정보
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={360}
          pagingEnabled
          onScroll={handleScrollByX}>
          {shop.source.map(e => (
            <CachedImage
              key={e}
              uri={e}
              style={{
                height: 260,
                width: width,
                resizeMode: 'contain',
              }}
            />
          ))}
        </ScrollView>
        <Block style={styles.imageNum}>
          <Text white bold size={11}>
            {imageNum + ' / ' + shop.source.length}
          </Text>
        </Block>
      </Block>
      <Divider></Divider>
      <Block
        style={[
          style.shop.categories,
          {flex: 0, width: width, marginTop: 0, height: 360},
        ]}>
        <Text h3 bold style={style.shop.content}>
          업체정보
        </Text>
        <Block>
          <Block style={style.inputRow}>
            <Text h3>한국어</Text>
            <Text darkgray h3>
              {shop.korean ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>픽업여부</Text>
            <Text darkgray h3>
              {shop.pickup ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>베이비시터</Text>
            <Text darkgray h3>
              {shop.baby ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>영업시간</Text>
            <Text darkgray h3>
              {shop.openTime} ~ {shop.closeTime}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>주소</Text>
            <Text darkgray h3>
              {shop.address}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h3>전화번호</Text>
            <Text darkgray h3>
              {shop.phone}
            </Text>
          </Block>
        </Block>
      </Block>
      <Divider></Divider>

      <Block style={[style.shop.categories, {maxHeight: 450}]}>
        <Text h3 bold>
          위치
        </Text>
        <Block row space="between" style={{marginTop: 10}}>
          <Text h3>{shop.address}</Text>
          <Text h3>{shop.engAddress}</Text>
        </Block>
        <MapView
          style={{
            position: 'absolute',
            top: 50,
            width: width,
            height: 300,
            marginTop: sizes.padding / 2,
            marginLeft: -sizes.padding,
            marginRight: -sizes.padding,
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
    </Fragment>
  );
}

ShopInfoSection.defaultProps = {};

ShopInfoSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageNum: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
