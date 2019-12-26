import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  Linking,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import {Block, Text, CachedImage, Divider} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';

import MapView from 'react-native-maps';

import {AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default ShopInfoSection = ({shop}) => {
  const [imageNum, setImageNum] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  handleScrollByX = e => {
    const xPosition = Platform.OS === 'android' ? 316 : 370;
    if (e.nativeEvent.contentOffset.x % xPosition == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / xPosition) + 1);
    }
  };

  return (
    <>
      <Block style={style.shop.categories}>
        <Text h1 bold style={[{marginBottom: 30}]}>
          업체 정보
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
          <Block center style={style.inputRow}>
            <Text h3>전화번호</Text>
            <Block row right>
              <Text darkgray h3 style={{marginRight: 10}}>
                {shop.phone}
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${shop.phone}`)}>
                <AntDesign size={20} name="phone"></AntDesign>
              </TouchableOpacity>
            </Block>
          </Block>
          <Block
            style={[
              style.inputRow,
              {flexDirection: 'column', alignItems: 'flex-start'},
            ]}>
            <Text h3>주소</Text>
            <Text darkgray style={{marginTop: 10}}>
              {shop.address}
            </Text>
          </Block>
        </Block>
      </Block>
      <Divider></Divider>
      <Block style={style.shop.categories}>
        <Block row space="between" style={{marginBottom: 30}}>
          <Text h1 bold>
            사진 정보
          </Text>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text accent h2 bold>
              크게보기
            </Text>
          </TouchableOpacity>
        </Block>
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
                width: width - sizes.padding * 2,
                borderRadius: 5,
                resizeMode: 'contain',
              }}
            />
          ))}
        </ScrollView>
        <Block style={styles.imageNum}>
          <Text white bold size={13}>
            {imageNum + ' / ' + shop.source.length}
          </Text>
        </Block>
      </Block>
      <Divider></Divider>
      <Block style={style.shop.categories}>
        <Text h1 bold style={{marginBottom: 20}}>
          위치
        </Text>
        <Block style={{marginBottom: 10}}>
          <Text h4>{shop.address}</Text>
        </Block>
        <MapView
          style={{
            width: width - sizes.padding * 2,
            height: 250,
            marginTop: sizes.padding / 2,
          }}
          initialRegion={{
            latitude: shop.latitude ? shop.latitude : 37.78825,
            longitude: shop.longitude ? shop.longitude : -122.4324,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <MapView.Marker
            coordinate={{latitude: shop.latitude, longitude: shop.longitude}}
          />
        </MapView>
      </Block>
      <Modal
        visible={isVisible}
        transparent={true}
        onRequestClose={() => setIsVisible(false)}>
        <ImageViewer
          onClick={() => setIsVisible(false)}
          imageUrls={shop.source.map(e => {
            return {url: e};
          })}
        />
      </Modal>
    </>
  );
};

ShopInfoSection.defaultProps = {};

ShopInfoSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageNum: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
