import React, {useState, useEffect, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  Switch,
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
} from '../../components';
import {theme} from '../../styles';
import {Ionicons} from '@expo/vector-icons';
import firebase from '../../constants/store';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

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

const ReservationScreen = props => {
  const {navigation} = props;
  const user = useSelector(state => state.user, shallowEqual);
  const [dates, setDates] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState({});
  const [selectedReservations, setSelectedReservations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  const tabs = ['전체', '예약요청', '예약확정', '예약불가', '종료'];

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('shops')
      .doc(user.shops[0])
      .onSnapshot(doc => {
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
                                  ? theme.colors.primary
                                  : theme.colors.accent,
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
                        borderBottomColor: theme.colors.gray2,
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

  return isLoaded ? (
    <SafeAreaView>
      <Block
        style={{
          flex: 0,
          ...styles.header,
        }}>
        <Button onPress={() => navigation.goBack()} style={{width: 30}}>
          <Ionicons
            size={30}
            color={theme.colors.black}
            name="ios-arrow-back"
          />
        </Button>
        <Text h1 bold>
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
    </SafeAreaView>
  ) : (
    <Block style={styles.full}>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}></ActivityIndicator>
    </Block>
  );
};

ReservationScreen.navigationOptions = {
  header: null,
};
ReservationScreen.defaultProps = {};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: Platform.OS === 'ios' ? null : theme.sizes.base * 3,
    marginBottom: theme.sizes.base * 2,
    paddingHorizontal: theme.sizes.padding,
  },
  inputRow: {
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray,
  },
  inputs: {
    paddingHorizontal: theme.sizes.padding,
    paddingTop: 20,
  },

  avatarChat: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    borderRadius: theme.sizes.base * 1.5,
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
});

export default ReservationScreen;
