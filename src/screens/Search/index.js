import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, FlatList, SafeAreaView, TextInput} from 'react-native';
import {Block, Loader, Text, CardRecommend} from 'app/src/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons, AntDesign} from '@expo/vector-icons';

import {sizes, style, colors} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

import FilterButton from './components/FilterButton';

export default SearchScreen = observer(props => {
  const {navigation} = props;

  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('reviewCnt');

  const shops = useContext(ShopStoreContext).shopList;

  useEffect(() => {
    setSelectedLists(shops);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1, paddingHorizontal: sizes.padding}}
        disableVirtualization={false}
        contentContainerStyle={[{flexGrow: 1}]}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <Block
            style={{
              marginVertical: 8,
            }}
          />
        )}
        ListEmptyComponent={
          <Block middle>
            <Block flex={false}>
              <Text h2 bold center>
                검색어를 입력하세요
              </Text>
              <Block middle row style={{marginTop: 20}}>
                <FilterButton text="업체명"></FilterButton>
                <FilterButton text="장소명"></FilterButton>
                <FilterButton text="배달"></FilterButton>
                <FilterButton text="한식"></FilterButton>
                <FilterButton text="비비큐"></FilterButton>
                <FilterButton text="중식"></FilterButton>
              </Block>
            </Block>
          </Block>
        }
        ListHeaderComponent={
          <Block
            style={[style.scrollTab, {paddingHorizontal: 0, marginBottom: 20}]}>
            <Block center row space="between">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons size={30} name="ios-arrow-back" />
              </TouchableOpacity>
              <Block
                center
                middle
                style={[styles.search, {paddingLeft: search === '' ? 40 : 15}]}>
                <TextInput
                  value={search}
                  onChangeText={text => setSearch(text)}
                  style={{fontSize: 16, width: '100%'}}
                  placeholder="여기는 어떠세요?"
                  onSubmitEditing={() => {
                    setSearchText(search);
                  }}></TextInput>
                {search === '' && (
                  <Block style={{position: 'absolute', left: 10, top: 6}}>
                    <AntDesign
                      size={18}
                      name="search1"
                      style={{
                        color: colors.gray,
                      }}
                    />
                  </Block>
                )}
                {search !== '' && (
                  <Block style={{position: 'absolute', right: 20, top: 2}}>
                    <TouchableOpacity
                      style={{zIndex: 1000}}
                      onPress={() => {
                        setSearch('');
                      }}>
                      <Ionicons size={30} name="ios-close" />
                    </TouchableOpacity>
                  </Block>
                )}
              </Block>
            </Block>
          </Block>
        }
        ListFooterComponent={<Block style={{marginBottom: 50}}></Block>}
        data={
          searchText !== ''
            ? selectedLists.filter(e =>
                searchText ? e.tags.includes(searchText) : e,
              )
            : null
        }
        renderItem={({item}) => (
          <CardRecommend
            item={{shop: item}}
            navigation={navigation}></CardRecommend>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
});

SearchScreen.navigationOptions = {
  header: null,
};
SearchScreen.defaultProps = {};

const styles = StyleSheet.create({
  tabs: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: -sizes.padding,
    paddingHorizontal: sizes.padding,
  },
  search: {
    height: 30,
    position: 'relative',
    marginBottom: 2,
    marginLeft: 12,
    marginRight: 2,
    paddingVertical: 3,

    borderRadius: 20,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
