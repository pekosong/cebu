import React, {useState, useEffect, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Button, Block, Text, CachedImage, Divider} from '../../components';
import {theme} from '../../constants';
import {Ionicons} from '@expo/vector-icons';
import firebase from '../../constants/store';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

const MAP = {
  wait: '예약중',
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
  const [notifications, setNotifications] = useState(true);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('shops')
      .doc(user.shops[0])
      .get()
      .then(doc => {
        const shop = doc.data();
        let reservations = shop.reservations;
        reservations.sort(function(a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(a.date) - new Date(b.date);
        });
        setReservations(reservations);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Block style={styles.header}>
          <Block row center space="between">
            <Button onPress={() => navigation.goBack()}>
              <Block center row>
                <Ionicons
                  size={30}
                  color={theme.colors.black}
                  name="ios-arrow-back"
                />
              </Block>
            </Button>
          </Block>
          <Text h1 bold style={{marginTop: 10, marginBottom: 10}}>
            예약 관리
          </Text>
        </Block>

        <Block style={styles.inputs}>
          <Divider></Divider>
          {reservations.length > 0 ? (
            reservations.map((e, idx) => (
              <Fragment key={idx}>
                <TouchableOpacity>
                  <Block row>
                    <Block center flex={false}>
                      <Text h4 bold>
                        {`${new Date(e.date).getMonth() + 1}월 ${new Date(
                          e.date,
                        ).getDate() + 1}일`}
                      </Text>
                      <Text h4 bold style={{marginTop: 5}}>
                        {`(${WEEKMAP[new Date(e.date).getDay()]})`}
                      </Text>
                    </Block>
                    <Block style={{paddingHorizontal: 10}}>
                      <Text bold>{e.name}</Text>
                      <Text style={{marginTop: 5}}>
                        TIME : {e.time}, PEOPLE : {e.people}
                      </Text>
                      <Text style={{marginTop: 5}}>{e.phone}</Text>
                      <Text style={{marginTop: 5}}>{e.email}</Text>
                    </Block>
                    <Block flex={false}>
                      <Text bold h4 accent>
                        {MAP[e.status]}
                      </Text>
                    </Block>
                  </Block>
                </TouchableOpacity>
                <Divider></Divider>
              </Fragment>
            ))
          ) : (
            <ActivityIndicator></ActivityIndicator>
          )}
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

ReservationScreen.navigationOptions = {
  header: null,
};
ReservationScreen.defaultProps = {};
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? null : theme.sizes.base * 3,
    marginBottom: theme.sizes.base,
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
  },

  avatarChat: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    borderRadius: theme.sizes.base * 1.5,
  },
});

export default ReservationScreen;
