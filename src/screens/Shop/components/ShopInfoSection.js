import React, {useState} from 'react';
import {StyleSheet, Dimensions, ScrollView, Linking, Modal} from 'react-native';
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
    if (e.nativeEvent.contentOffset.x % (width - sizes.padding * 2) == 0) {
      setImageNum(
        parseInt(e.nativeEvent.contentOffset.x / (width - sizes.padding * 2)) +
          1,
      );
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
            <Text h2>한국어</Text>
            <Text darkgray h2>
              {shop.korean ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h2>픽업여부</Text>
            <Text darkgray h2>
              {shop.pickup ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h2>베이비시터</Text>
            <Text darkgray h2>
              {shop.baby ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={style.inputRow}>
            <Text h2>영업시간</Text>
            <Text darkgray h2>
              {shop.openTime} ~ {shop.closeTime}
            </Text>
          </Block>
          {shop.kakao !== '' && (
            <Block style={style.inputRow}>
              <Text h2>카카오톡</Text>
              <Text darkgray h2>
                {shop.kakao}
              </Text>
            </Block>
          )}
          <Block
            style={[
              style.inputRow,
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            ]}>
            <Text h3 style={{marginBottom: 6}}>
              전화번호
            </Text>
            {shop.phone.map((e, idx) => (
              <Block
                key={idx}
                row
                middle
                center
                space="between"
                style={{marginTop: 16}}>
                <Text darkgray h3 style={{marginRight: 10}}>
                  {e}
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${e}`)}>
                  <AntDesign
                    size={20}
                    name="phone"
                    style={{color: colors.darkgray}}></AntDesign>
                </TouchableOpacity>
              </Block>
            ))}
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
      <Block style={[style.shop.categories]}>
        <Block row space="between" style={{marginBottom: 20}}>
          <Text h1 bold>
            사진 정보
          </Text>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text accent h3 bold>
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
          {shop.source.map((e, idx) => (
            <CachedImage
              key={idx}
              uri={e}
              style={{
                borderRadius: 6,
                height: 260,
                width: width - sizes.padding * 2,
                resizeMode: 'cover',
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
      {shop.latitude !== '' && (
        <Block style={[style.shop.categories, {marginBottom: 50}]}>
          <Block style={{marginBottom: 10}}>
            <Text h1 bold style={{marginBottom: 20}}>
              위치
            </Text>
            <Text h4>{shop.address}</Text>
          </Block>
          <MapView
            style={{
              borderRadius: 6,
              width: width - sizes.padding * 2,
              height: 260,
              marginTop: sizes.padding / 2,
            }}
            initialRegion={{
              latitude: parseFloat(shop.latitude),
              longitude: parseFloat(shop.longitude),
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: parseFloat(shop.latitude),
                longitude: parseFloat(shop.longitude),
              }}
            />
          </MapView>
        </Block>
      )}
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
