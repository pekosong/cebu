import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import {Block, Text, Divider} from '../../../components';
import {theme} from '../../../styles';

export default function ShopInfoSection(props) {
  const {shop} = props;

  return (
    <Fragment>
      <Block style={styles.categories}>
        <Text h3 bold style={styles.content}>
          업체정보
        </Text>
        <Block>
          <Block style={styles.inputRow}>
            <Text h3>한국어</Text>
            <Text color={theme.colors.darkgray} h3>
              {shop.korean ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={styles.inputRow}>
            <Text h3>픽업여부</Text>
            <Text color={theme.colors.darkgray} h3>
              {shop.pickup ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={styles.inputRow}>
            <Text h3>베이비시터</Text>
            <Text color={theme.colors.darkgray} h3>
              {shop.baby ? '가능' : '불가'}
            </Text>
          </Block>
          <Block style={styles.inputRow}>
            <Text h3>영업시간</Text>
            <Text color={theme.colors.darkgray} h3>
              {shop.openTime} ~ {shop.closeTime}
            </Text>
          </Block>
          <Block style={styles.inputRow}>
            <Text h3>주소</Text>
            <Text color={theme.colors.darkgray} h3>
              {shop.address}
            </Text>
          </Block>
          <Block style={styles.inputRow}>
            <Text h3>전화번호</Text>
            <Text color={theme.colors.darkgray} bold h3>
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
        <Block
          style={{
            marginLeft: -theme.sizes.padding,
            marginRight: -theme.sizes.padding,
          }}>
          <MapView
            style={{
              flex: 1,
              height: 240,
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
      </Block>
    </Fragment>
  );
}

ShopInfoSection.defaultProps = {};

ShopInfoSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  categories: {
    marginVertical: 10,
  },
  content: {
    marginBottom: 15,
  },
  inputRow: {
    paddingBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.6,
    borderBottomColor: theme.colors.gray2,
  },
});
