import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import {Block, Text, Divider} from 'app/src/components';
import {sizes, style} from 'app/src/styles';

export default function ShopInfoSection(props) {
  const {shop} = props;

  return (
    <Fragment>
      <Block style={[style.shop.categories, {maxHeight: 400}]}>
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
            <Text darkgray bold h3>
              {shop.phone}
            </Text>
          </Block>
        </Block>
      </Block>
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
            width: 600,
            height: 600,
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

const styles = StyleSheet.create({});
