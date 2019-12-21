import React, {useState, useEffect, useContext, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {
  Button,
  Block,
  Text,
  CachedImage,
  Divider,
  ReservationConfirmModal,
} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
import {streamShop} from 'app/src/api/shop';
import {UserStoreContext} from 'app/src/store/user';

const MAP = {
  wait: '예약요청',
  confirm: '예약확정',
  end: '종료',
  not: '예약불가',
};

const WEEKMAP = {
  0: '월',
  1: '화',
  2: '수',
  3: '목',
  4: '금',
  5: '토',
  7: '일',
};

const ReservationScreen = observer(props => {
  const {navigation} = props;

  const {user} = useContext(UserStoreContext);

  const [dates, setDates] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState({});
  const [selectedReservations, setSelectedReservations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  const tabs = ['전체', '예약요청', '예약확정', '예약불가', '종료'];

  useEffect(() => {
    let unsubscribe = streamShop(user.shops[0]).onSnapshot(doc => {
      const shop = doc.data();
      let reservations = shop.reservations;
      reservations.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      const days = new Set(reservations.map(e => e.date));
      setDates(Array.from(days));
      setReservations(reservations);
      setSelectedReservations(reservations);
      setIsLoaded(true);
      setActive('전체');
    });
    return () => unsubscribe();
  }, []);

  renderReservationTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleReservationTap(tab)}
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  handleReservationTap = tab => {
    if (tab == '전체') {
      setSelectedReservations(reservations);
    } else {
      setSelectedReservations(reservations.filter(e => MAP[e.status] == tab));
    }
    setActive(tab);
  };

  renderReservaiton = () =>
    dates.map((day, idx) => {
      const days = selectedReservations.map(e => e.date);
      const reservation = selectedReservations.filter(e => e.date == day);
      const maxLength = reservation.length - 1;

      return days.indexOf(day) != -1 ? (
        <Fragment key={idx}>
          <Block row>
            <Block center flex={false}>
              <Text h4 bold>
                {`${new Date(day).getMonth() + 1}월 ${new Date(
                  day,
                ).getDate()}일`}
              </Text>
              <Text h4 bold style={{marginTop: 3}}>
                {`(${WEEKMAP[new Date(day).getDay()]})`}
              </Text>
            </Block>
            <Block>
              {reservation.map((e, eIdx) => {
                return (
                  <Fragment key={eIdx}>
                    <TouchableOpacity
                      onPress={() => {
                        setReservation(e);
                        setVisible(true);
                      }}>
                      <Block row>
                        <Block style={{paddingHorizontal: 10}}>
                          <Block row>
                            <CachedImage
                              uri={e.image}
                              style={styles.avatarChat}></CachedImage>
                            <Block style={{marginLeft: 10}}>
                              <Text bold accent style={{marginBottom: 3}}>
                                {e.name}
                              </Text>
                              <Text bold>{e.phone}</Text>
                            </Block>
                          </Block>
                          <Text bold style={{marginTop: 5}}>
                            예약시간: {e.time}, 예약인원: {e.people}명
                          </Text>
                        </Block>
                        <Block flex={false}>
                          <Text
                            bold
                            h4
                            style={{
                              color:
                                e.status == 'not'
                                  ? colors.primary
                                  : colors.accent,
                            }}>
                            {MAP[e.status]}
                          </Text>
                        </Block>
                      </Block>
                    </TouchableOpacity>
                    <Block
                      style={{
                        marginBottom: maxLength == eIdx ? 0 : 10,
                        borderBottomWidth: maxLength == eIdx ? 0 : 0.5,
                        borderBottomColor: colors.gray2,
                        paddingBottom: maxLength == eIdx ? 0 : 10,
                      }}></Block>
                  </Fragment>
                );
              })}
            </Block>
          </Block>
          <Divider style={{marginLeft: 0, marginRight: 0}}></Divider>
        </Fragment>
      ) : null;
    });

  if (!isLoaded) {
    return (
      <Block style={style.full}>
        <ActivityIndicator
          size="large"
          color={colors.accent}></ActivityIndicator>
      </Block>
    );
  }

  return (
    <>
      <Block
        style={{
          flex: 0,
          ...style.header,
        }}>
        <Button onPress={() => navigation.goBack()} style={{width: 30}}>
          <Ionicons size={30} color={colors.black} name="ios-arrow-back" />
        </Button>
        <Text h1 bold style={{marginBottom: 20}}>
          예약 관리
        </Text>
      </Block>

      <Block flex={false} row style={{...styles.tabs, marginBottom: 10}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}>
          {tabs.map(tab => renderReservationTab(tab))}
        </ScrollView>
      </Block>

      <ScrollView>
        <Block style={{...styles.inputs}}>{renderReservaiton()}</Block>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <ReservationConfirmModal
          reservation={reservation}
          setVisible={setVisible}
        />
      </Modal>
    </>
  );
});

ReservationScreen.navigationOptions = {
  header: null,
};
ReservationScreen.defaultProps = {};
const styles = StyleSheet.create({
  inputRow: {
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
  },
  inputs: {
    paddingHorizontal: sizes.padding,
    paddingTop: 20,
  },

  avatarChat: {
    width: sizes.base * 3,
    height: sizes.base * 3,
    borderRadius: sizes.base * 1.5,
  },
  tabs: {
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: Platform.OS === 'ios' ? sizes.base * 0.8 : sizes.base,
    marginHorizontal: sizes.padding,
  },
  tab: {
    marginRight: sizes.base,
    paddingBottom: sizes.base,
  },
  active: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 3,
  },
});

export default ReservationScreen;
