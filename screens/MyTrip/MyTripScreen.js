import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';

import {Block, Text, Button, Divider, CachedImage} from '../../components';
import {theme, mocks} from '../../constants';

import {useSelector, shallowEqual} from 'react-redux';

const MAP = {
  wait: '예약확인중',
  confirm: '예약확정',
  end: '종료',
  not: '예약불가',
};

function MyTripScreen(props) {
  const {navigation} = props;
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState('');
  const [plans, setPlans] = useState({});
  const [reservations, setReservations] = useState([]);

  const [dates, setDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      let myPlans = user.plans;
      let days = {};

      Object.keys(myPlans).forEach((key, idx) => {
        days[`${idx + 1}일차`] = key;
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

  renderTripTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTripTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  handleTripTab = tab => {
    if (tab == '전체') {
      setSelectedDates(dates);
    } else {
      setSelectedDates({tab: dates[tab]});
    }
    setActive(tab);
  };

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

  renderList = (day, lastItem) => {
    let items = reservations.filter(e => e.date == day);

    let korDay = makeMonDay(day);
    let item = plans[day];

    return (
      <Block key={day} style={styles.categories}>
        <Block center row space="between" style={{marginBottom: 10}}>
          <Text h3 bold>
            {korDay}
            <Text>{'   '}</Text>
            <Text>{`Day ${item.nDay + 1}`}</Text>
            <Text>{'  '}</Text>
          </Text>
          <Text h4 bold color={theme.colors.accent}>
            {'in ' + item.hotel}
          </Text>
        </Block>
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
                  <Block left flex={1}>
                    <CachedImage uri={shop.src} style={styles.avatarChat} />
                  </Block>
                  <Block flex={2.2} style={{marginTop: 5, height: 48}}>
                    <Block middle row space="between">
                      <Text h3 bold>
                        {shop.name}
                      </Text>
                      <Text h4>{todo.time}</Text>
                    </Block>
                    <Block middle row space="between" style={{marginTop: 5}}>
                      <Text>{shop.engName}</Text>
                      <Text
                        h3
                        style={{
                          color:
                            todo.status == 'not'
                              ? theme.colors.primary
                              : theme.colors.accent,
                        }}>
                        {MAP[todo.status]}
                      </Text>
                    </Block>
                  </Block>
                </Block>
              </TouchableOpacity>
            );
          })
        ) : (
          <Button border onPress={() => navigation.navigate('Search')}>
            <Text accent center>
              새로운 일정을 등록하세요
            </Text>
          </Button>
        )}
        {lastItem ? null : <Divider style={{marginHorizontal: 0}}></Divider>}
      </Block>
    );
  };

  return (
    <Block>
      <Block flex={false} style={styles.header}>
        <Text h1 bold>
          내 일정
        </Text>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTripTab(tab))}
      </Block>
      {isLoaded ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={{marginTop: 20, marginBottom: 40}}>
            {Object.values(selectedDates).map((day, idx) => {
              lastItem =
                Object.values(selectedDates).length == idx + 1 ? true : false;
              return renderList(day, lastItem);
            })}
          </Block>
        </ScrollView>
      ) : (
        <Block style={styles.full}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
}

MyTripScreen.navigationOptions = {
  header: null,
};

MyTripScreen.defaultProps = {
  profiles: mocks.profiles,
  lists: mocks.lists,
  myplans: mocks.plans,
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: theme.sizes.base * 4,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding,
  },
  avatarChat: {
    width: theme.sizes.base * 6,
    height: theme.sizes.base * 4,
    borderRadius: 3,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical:
      Platform.OS === 'ios' ? theme.sizes.base * 0.8 : theme.sizes.base,
    marginHorizontal: theme.sizes.padding,
  },
  tab: {
    marginRight: theme.sizes.base,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    paddingHorizontal: theme.sizes.padding,
  },
});

export default MyTripScreen;
