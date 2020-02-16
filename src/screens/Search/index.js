import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, TextInput} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {
  Block,
  Loader,
  Text,
  CardRecommend,
  FilterTab,
} from 'app/src/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons, AntDesign} from '@expo/vector-icons';

import {sizes, style, colors} from 'app/src/styles';

import {useSelector} from 'react-redux';

import FilterButton from './components/FilterButton';

export default SearchScreen = props => {
  const {navigation} = props;

  const [selectedLists, setSelectedLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');

  const [isKorean, setIsKorean] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [isBaby, setIsBaby] = useState(false);

  const [isMak, setIsMak] = useState(true);
  const [isCebu, setIsCebu] = useState(true);

  const shops = useSelector(state => state.shop);

  useEffect(() => {
    setSelectedLists(shops);
    setIsLoaded(true);
  }, []);

  const filterList = [
    {
      isActive: isKorean,
      setActive: setIsKorean,
      title: '한국어',
    },
    {isActive: isPickup, setActive: setIsPickup, title: '픽업'},
    {
      isActive: isBaby,
      setActive: setIsBaby,
      title: '애기',
    },
    {
      isActive: isMak,
      setActive: setIsMak,
      title: '막탄',
    },
    {isActive: isCebu, setActive: setIsCebu, title: '세부시티'},
  ];

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
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
              <Text h4 gray center style={{marginTop: 10, marginBottom: 20}}>
                이런 검색어는 어떠세요?
              </Text>
              <Block middle row>
                {['치킨', '삼겹살', '한식', '비비큐', '중식'].map(
                  (text, idx) => (
                    <FilterButton
                      key={idx}
                      text={text}
                      setSearch={setSearch}
                      setSearchText={setSearchText}
                    />
                  ),
                )}
              </Block>
            </Block>
          </Block>
        }
        ListHeaderComponent={
          <Block style={[style.scrollTab, {paddingHorizontal: 0}]}>
            <Block center row space="between">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons size={30} name="ios-arrow-back" />
              </TouchableOpacity>
              <Block center middle style={[styles.search, {paddingLeft: 35}]}>
                <TextInput
                  value={search}
                  onChangeText={text => setSearch(text)}
                  style={{fontSize: 16, width: '100%'}}
                  placeholder="여기는 어떠세요?"
                  onSubmitEditing={() => {
                    setSearchText(search);
                  }}></TextInput>
                <Block style={{position: 'absolute', left: 10, top: 6}}>
                  <AntDesign
                    size={18}
                    name="search1"
                    style={{
                      color: colors.gray,
                    }}
                  />
                </Block>
                {search !== '' && (
                  <Block style={{position: 'absolute', right: 20}}>
                    <TouchableOpacity
                      style={{zIndex: 1000}}
                      onPress={() => {
                        setSearch('');
                      }}>
                      <Ionicons size={34} name="ios-close" />
                    </TouchableOpacity>
                  </Block>
                )}
              </Block>
            </Block>
            <Block center style={{marginTop: 10}}>
              <FilterTab filterList={filterList} />
            </Block>
          </Block>
        }
        ListFooterComponent={<Block style={{marginBottom: 50}}></Block>}
        data={
          searchText.toUpperCase() !== ''
            ? selectedLists
                .filter(e =>
                  searchText.toUpperCase()
                    ? e.tags
                        .map(e => e.toUpperCase())
                        .includes(searchText.toUpperCase()) ||
                      e.name.toUpperCase().includes(searchText.toUpperCase()) ||
                      (e.menus &&
                        e.menus
                          .map(e => e.name.toUpperCase())
                          .join()
                          .includes(searchText.toUpperCase()))
                    : e,
                )
                .filter(e => (isKorean ? e.korean : e))
                .filter(e => (isBaby ? e.baby : e))
                .filter(e => (isPickup ? e.pickup : e))
                .filter(e => (!isMak ? e.location !== '막탄' : e))
                .filter(e => (!isCebu ? e.location !== '세부시티' : e))
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
};

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
    borderRadius: 6,
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
