import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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
    let _month = day.slice(5, 7);
    let _day = day.slice(8, 10);

    if (_month.slice(0, 1) == '0') {
      _month = _month.slice(1, 2);
    }
    if (_day.slice(0, 1) == '0') {
      _day = _day.slice(1, 2);
    }

    return `${_month}월 ${_day}일`;
  };

  handleTripTab = tab => {
    if (tab == '전체') {
      setSelectedDates(dates);
    } else {
      setSelectedDates({tab: dates[tab]});
    }
    setActive(tab);
  };

  renderTripTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTripTab(tab)}
        style={[styles.tab, isActive && styles.active]}>
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
    lastItem = Object.values(selectedDates).length == idx + 1 ? true : false;
    let items = reservations.filter(e => e.date == day);
    let korDay = makeMonDay(day);
    let item = plans[day];
    return (
      <Block key={day} style={styles.categories}>
        {(items.length != 0 || active == '전체') && (
          <Block center row space="between" style={{marginBottom: 10}}>
            <Text h4 bold>
              {`${korDay}   Day ${item.nDay + 1}  `}
            </Text>
            <Text bold>{'in ' + item.hotel}</Text>
          </Block>
        )}
        {items.length != 0 ? (
          items.map((item, idx) => {
            const todo = item;
            const shop = item.shop;
            return (
              <TouchableOpacity
                key={shop.id + idx}
                onPress={() =>
                  navigation.navigate('Shop', {
                    shopId: shop.id,
                    todo: todo,
                  })
                }>
                <Block
                  row
                  style={{
                    marginVertical: 5,
                    paddingBottom: 5,
                  }}>
                  <CachedImage uri={shop.src} style={styles.avatarChat} />
                  <Block style={{marginLeft: 10, marginTop: 5, height: 48}}>
                    <Block row space="between">
                      <Text h4 bold>
                        {shop.name}
                      </Text>
                      <Text h4 darkgray>
                        {todo.time}
                      </Text>
                    </Block>
                    <Block center row space="between">
                      <Text darkgray>{shop.engName}</Text>
                      <Block
                        style={[
                          styles.tag,
                          {
                            backgroundColor:
                              todo.status == 'not'
                                ? colors.primary
                                : colors.accent,
                          },
                        ]}>
                        <Text size={11} white>
                          {MAP[todo.status]}
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
                  {`${korDay}의 일정을 등록하세요.`}
                </Text>
              </>
            )}
            <Button border onPress={() => navigation.navigate('Home')}>
              <Text accent center>
                새로운 일정 등록
              </Text>
            </Button>
          </Block>
        )}
        {!lastItem && <Divider></Divider>}
      </Block>
    );
  };

  if (!isLoaded) return <Loader></Loader>;

  return (
    <>
      <Block style={[style.appBar, styles.shadow, {height: 165}]}>
        <Block style={{flex: 0, height: 30}}>
          <Text h1 bold>
            내일정
          </Text>
        </Block>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          style={styles.tabs}>
          {tabs.map(tab => renderTripTab(tab))}
        </ScrollView>
      </Block>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={{paddingTop: sizes.base * 2, marginBottom: 40}}>
          {Object.values(selectedDates).map((day, idx) => renderList(day, idx))}
        </Block>
      </ScrollView>
    </>
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
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
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
    marginRight: sizes.base * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: colors.accent,
    borderColor: colors.black,
  },
  categories: {
    paddingHorizontal: sizes.padding,
  },
});

export default MyTripScreen;
