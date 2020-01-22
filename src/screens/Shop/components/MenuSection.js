import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import {Block, Text, CachedImage, Divider} from 'app/src/components';
import CardMenu from './CardMenu';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {style, sizes, colors} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default MenuSection = ({shop, isKorean}) => {
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
    <Block style={style.shop.categories}>
      {shop.menuImage.length !== 0 && (
        <Block>
          <Block row space="between" style={{marginBottom: 20}}>
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
          <Divider></Divider>
        </Block>
      )}
      <FlatList
        key={'MenuList'}
        ItemSeparatorComponent={() => (
          <Block
            style={{
              borderBottomWidth: 0.2,
              borderBottomColor: '#ddd',
              marginVertical: 15,
            }}></Block>
        )}
        contentContainerStyle={{paddingBottom: 50}}
        ListHeaderComponent={
          <Block row space="between" style={{marginBottom: 30}}>
            <Text h1 bold>
              대표 메뉴
            </Text>
          </Block>
        }
        ListFooterComponent={<Block style={{marginBottom: 50}}></Block>}
        data={shop.menus}
        renderItem={({item}) => <CardMenu item={item} isKorean={isKorean} />}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </Block>
  );
};

MenuSection.defaultProps = {};

MenuSection.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageNum: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
