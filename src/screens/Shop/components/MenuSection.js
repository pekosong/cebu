import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Block, Button, Text, CachedImage, Divider} from 'app/src/components';
import CardMenu from './CardMenu';

import {sizes} from 'app/src/styles';
import {colors} from '../../../styles';

const {width} = Dimensions.get('window');

export default MenuSection = ({shop, isKorean}) => {
  const [imageNum, setImageNum] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [menuCnt, setMenuCnt] = useState(5);

  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % (width - sizes.padding * 2) == 0) {
      setImageNum(
        parseInt(e.nativeEvent.contentOffset.x / (width - sizes.padding * 2)) +
          1,
      );
    }
  };

  const itemSeparatorElement = () => (
    <Block
      style={{
        borderBottomWidth: 0.2,
        borderBottomColor: '#ddd',
        marginVertical: 15,
      }}></Block>
  );

  const headerElement = () => (
    <Block row space="between" style={{marginBottom: 30}}>
      <Text h1 bold>
        대표 메뉴
      </Text>
    </Block>
  );

  return (
    <Block style={{marginBottom: 80}}>
      <FlatList
        ItemSeparatorComponent={itemSeparatorElement}
        ListHeaderComponent={headerElement()}
        data={shop.menus.slice(0, menuCnt)}
        renderItem={({item, index}) => (
          <CardMenu
            shopId={shop.id}
            item={item}
            idx={index}
            isKorean={isKorean}
          />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <Block>
        <Button
          border
          onPress={() => setMenuCnt(menuCnt === 5 ? shop.menus.length : 5)}
          style={{marginTop: 20}}>
          <Text bold accent center>
            {menuCnt === 5 ? '더 보기' : '닫기'}
          </Text>
        </Button>
        {shop.menuImage.length !== 0 && (
          <Block style={{position: 'relative'}}>
            <Divider></Divider>
            <Block
              row
              space="between"
              style={{marginTop: 10, marginBottom: 30}}>
              <Text h1 bold>
                메뉴판
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
              {shop.menuImage.map((e, idx) => (
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
                {imageNum + ' / ' + shop.menuImage.length}
              </Text>
            </Block>
            <Modal
              visible={isVisible}
              transparent={true}
              onRequestClose={() => setIsVisible(false)}>
              <ImageViewer
                onClick={() => setIsVisible(false)}
                imageUrls={shop.menuImage.map(e => {
                  return {url: e};
                })}
              />
            </Modal>
          </Block>
        )}
      </Block>
    </Block>
  );
};

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageNum: {
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
