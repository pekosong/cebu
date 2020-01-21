import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {CardShop, Block, Loader, Text} from 'app/src/components';
import CardRecommend from 'app/src/screens/Shop/components/CardRecommend';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons, AntDesign} from '@expo/vector-icons';

import {sizes, style, colors} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {ShopStoreContext} from 'app/src/store/shop';

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
              <Text h1 bold center>
                검색 결과가 없습니다.
              </Text>
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
              <Block style={styles.search}>
                <TextInput
                  value={search}
                  onChangeText={text => setSearch(text)}
                  style={{marginLeft: 10, fontSize: 16, width: '100%'}}
                  placeholder="여기는 어떠세요?"
                  onSubmitEditing={() => {
                    setSearchText(search);
                  }}></TextInput>
                {search !== '' && (
                  <Block style={{position: 'absolute', right: 20, top: 2}}>
                    <TouchableOpacity
                      style={{zIndex: 1000}}
                      onPress={() => {
                        setSearchText('');
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
        data={selectedLists.filter(e =>
          searchText ? e.tags.includes(searchText) : e,
        )}
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
    position: 'relative',
    marginBottom: 2,
    marginLeft: 16,
    marginRight: 2,
    paddingVertical: 4,
    paddingLeft: 8,
    borderRadius: 20,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
