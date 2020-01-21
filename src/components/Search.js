import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Block from './Block';
import Text from './Text';
import {colors, sizes} from 'app/src/styles';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';

export default Search = props => {
  const {style, children, navigation} = props;
  const [showSearch, setShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const searchRef = useRef(null);

  renderSearch = () => {
    return (
      <Modal
        animationType="slide"
        visible={showSearch}
        onRequestClose={() => setShowSearch(false)}>
        <Block padding={[sizes.padding, sizes.padding]}>
          <TouchableOpacity
            onPress={() => {
              setSearchResult([]);
              setShowSearch(false);
            }}>
            <Ionicons size={50} color={colors.black} name="ios-close" />
          </TouchableOpacity>
          <Text h1 bold>
            세부의 모든게 있어요
          </Text>
          <Block flex={false} row>
            <TextInput
              autoFocus={true}
              style={{fontSize: 20, width: '100%'}}
              placeholder="여기는 어떠세요?"
              onFocus={() => {
                setShowSearch(true);
              }}
              onSubmitEditing={() => {
                handleSearch();
              }}></TextInput>
          </Block>
          <FlatList
            data={searchResult}
            keyExtractor={item => item.name}
            renderItem={item => renderSearchResult(item)}></FlatList>
        </Block>
      </Modal>
    );
  };

  renderSearchResult = ({item}) => {
    return (
      <TouchableOpacity
        key={item.name}
        onPress={() =>
          navigation.navigate('Shop', {
            title: cateMap[navigation.getParam('category')],
            shop: list,
          })
        }>
        <Block row middle shadow style={{paddingVertical: 10}}>
          <Block flex={false}>
            <Image
              style={{width: 20, height: 20, resizeMode: 'cover'}}
              source={{uri: item.icon}}
            />
          </Block>
          <Block middle style={{paddingLeft: 10}}>
            <Text h4 bold height={25}>
              {item.name}
            </Text>
            <Text caption h4>
              {item.types.join(', ')}
            </Text>
            <Text caption h4>
              {item.vicinity}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  handleSearch = () => {
    location = '10.31672,123.89071';
    key = 'AIzaSyCo1nymGnZzH-3XzzmPV_UiNqfT4JbEWZQ';
    rankby = 'distance';
    type = 'food';
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=${rankby}&type=${type}&key=${key}`,
      )
      .then(Response => {
        setSearchResult(Response.data.results);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
      <Block flex={false} row center style={styles.header}>
        <Block row center style={styles.search}>
          <AntDesign size={24} name="search1" />
          <Text style={{marginLeft: 10}}>여기는 어떠세요?</Text>
        </Block>
        {renderSearch()}
      </Block>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  header: {
    marginTop: sizes.padding * 2.5,
    marginBottom: 5,
    paddingHorizontal: sizes.padding,
  },
  search: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
