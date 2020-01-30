import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import {
  Block,
  Text,
  Button,
  Divider,
  CachedImage,
  Loader,
} from 'app/src/components';

import {mocks} from 'app/src/constants';
import {colors, sizes, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

const MAP = {
  wait: '예약확인중',
  confirm: '예약확정',
  end: '종료',
  not: '예약불가',
};

const WEEKMAP = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

const {height} = Dimensions.get('window');

const MyTripScreen = observer(props => {
  const {navigation} = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState('');
  const [plans, setPlans] = useState({});
  const [reservations, setReservations] = useState([]);

  const [dates, setDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      let myPlans = user.plans;
      let days = {};

      Object.keys(myPlans).forEach((key, idx) => {
        days[idx + 1] = key;
      });

      setActive('전체');
      setDates(days);
      setSelectedDates(days);
      setTabs(['전체'].concat(Object.keys(days)));
      setReservations(user.reservations);
      setPlans(myPlans);
      setIsLoaded(true);
    }
  }, [user]);

  makeMonDay = day => {
    const week = new Date(day).getDay();
    let _month = day.slice(5, 7);
    let _day = day.slice(8, 10);

    if (_month.slice(0, 1) == '0') {
      _month = _month.slice(1, 2);
    }
    if (_day.slice(0, 1) == '0') {
      _day = _day.slice(1, 2);
    }

    return `${_month}월 ${_day}일 (${WEEKMAP[week]})`;
  };

  handleTripTab = tab => {
    if (tab == '전체') {
      setSelectedDates(dates);
    } else {
      setSelectedDates({tab: dates[tab]});
    }
    setActive(tab);
  };

  renderTripTab = (tab, isLast) => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTripTab(tab)}
        style={[
          styles.tab,
          isActive && styles.active,
          {marginRight: isLast ? sizes.base * 3 : sizes.base * 0.8},
        ]}>
        {
          <>
            {tab != '전체' && (
              <Text bold gray={!isActive} white={isActive}>
                Day
              </Text>
            )}
            <Text bold size={17} gray={!isActive} white={isActive}>
              {tab}
            </Text>
          </>
        }
      </TouchableOpacity>
    );
  };

  renderList = (day, idx) => {
    const isLast =
      Object.values(selectedDates).length == idx + 1 ? true : false;
    let items = reservations.filter(e => e.date == day);
    let korDay = makeMonDay(day);
    let item = plans[day];
    return (
      <Block key={day} style={styles.categories}>
        {(items.length != 0 || active == '전체') && (
          <Text h4 darkgray style={{marginBottom: 10}}>
            {`${korDay} - Day ${item.nDay + 1}  `}
          </Text>
        )}
        {items.length != 0 ? (
          items
            .sort(
              (a, b) =>
                parseInt(a.time.substring(0, 2)) >
                parseInt(b.time.substring(0, 2)),
            )
            .map((item, idx) => {
              const {time, shop} = item;
              return (
                <TouchableOpacity
                  key={shop.id + idx}
                  onPress={() =>
                    navigation.navigate('Shop', {
                      shopId: shop.id,
                      todo: item,
                    })
                  }>
                  <Block
                    row
                    style={{
                      marginVertical: 5,
                      paddingBottom: 5,
                    }}>
                    <CachedImage
                      uri={
                        typeof shop.src === 'string' ? shop.src : shop.src[0]
                      }
                      style={styles.avatarChat}
                    />
                    <Block style={{marginLeft: 10, marginTop: 5, height: 48}}>
                      <Block row space="between">
                        <Text h4 bold>
                          {shop.name}
                        </Text>
                        <Text h4 darkgray>
                          {time}
                        </Text>
                      </Block>
                      <Block center row space="between">
                        <Text primary>{shop.tags.join(', ')}</Text>
                        <Block
                          style={[
                            styles.tag,
                            {backgroundColor: colors.accent},
                          ]}>
                          <Text size={11} white>
                            {shop.location}
                          </Text>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </TouchableOpacity>
              );
            })
        ) : (
          <Block style={active != '전체' && {marginTop: height / 5}}>
            {active != '전체' && (
              <>
                <Text h2 bold center style={{marginBottom: 10}}>
                  등록된 일정이 없습니다.
                </Text>
                <Text center h4 darkgray style={{marginBottom: 20}}>
                  {`일정을 등록하세요.`}
                </Text>
              </>
            )}
            <Button
              style={{
                borderWidth: 1,
                borderColor: colors.gray,
                marginHorizontal: 60,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text darkgray center>
                일정 등록하기
              </Text>
            </Button>
          </Block>
        )}
        {!isLast && <Divider></Divider>}
      </Block>
    );
  };

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <Block style={style.scrollTab}>
          <Block style={{flex: 0, height: 40}}>
            <Text h1 bold>
              내일정
            </Text>
          </Block>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            style={styles.tabs}>
            {tabs.map((tab, idx) =>
              renderTripTab(tab, tabs.length - 1 === idx),
            )}
          </ScrollView>
        </Block>
        <Block
          style={{paddingTop: sizes.base * 2, marginBottom: 40, zIndex: -1}}>
          {Object.values(selectedDates).map((day, idx) => renderList(day, idx))}
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
});

MyTripScreen.navigationOptions = {
  header: null,
};

MyTripScreen.defaultProps = {
  profiles: mocks.profiles,
  lists: mocks.lists,
  myplans: mocks.plans,
};

const styles = StyleSheet.create({
  avatarChat: {
    width: sizes.base * 6,
    height: sizes.base * 4,
    borderRadius: 3,
  },
  tag: {
    flex: 0,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: -sizes.padding,
    paddingHorizontal: sizes.padding,
  },
  tab: {
    flex: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.gray,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  categories: {
    paddingHorizontal: sizes.padding,
  },
});

export default MyTripScreen;
