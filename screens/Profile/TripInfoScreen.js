import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {Button, Block, Input, Text} from '../../components';
import {theme} from '../../styles';
import firebase from '../../constants/store';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

import moment from 'moment';

const {height, width} = Dimensions.get('window');

LocaleConfig.locales['kor'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],

  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kor';

const TripInfoScreen = props => {
  const {navigation} = props;
  const [date, setDate] = useState({});
  const [dates, setDates] = useState([]);
  const [hotel, setHotel] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const user = useSelector(state => state.user, shallowEqual);

  _getDates = (start, stop) => {
    let startDate = new Date(start.year, start.month - 1, start.day);
    let stopDate = new Date(stop.year, stop.month - 1, stop.day);
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  };

  handleDate = day => {
    let myDates = dates;
    myDates.push(day);

    if (myDates.length == 1) {
      newDate = new Object();
      newDate[day.dateString] = {
        startingDay: true,
        color: theme.colors.primary,
        textColor: theme.colors.white,
        endingDay: true,
      };
      setDate(newDate);
      setDates(myDates);
    }

    if (myDates.length == 2) {
      newDates = _getDates(myDates[0], myDates[1]);
      newDate = new Object();
      newDates.forEach((e, idx) => {
        option = new Object();
        if (idx == 0) {
          option['startingDay'] = true;
        } else if (idx == newDates.length - 1) {
          option['endingDay'] = true;
        } else {
          option['selected'] = true;
        }
        option['color'] = theme.colors.primary;
        option['textColor'] = theme.colors.white;

        newDate[e] = option;
      });
      setDate(newDate);
      setDates([]);
    }
  };

  handleSignUp = async () => {
    setLoading(true);
    Keyboard.dismiss();

    let myPlans = date;

    Object.keys(myPlans).forEach((key, idx) => {
      myPlans[key] = {hotel: hotel, nDay: idx};
    });
    const newCus = {
      hotel: hotel,
      date: new Date(),
      plans: myPlans,
    };

    await firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .update(newCus)
      .then(() => {
        console.log('Document successfully written!');
        setLoading(false);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  renderSignUp = () => {
    if (step == 1) {
      return (
        <Block>
          <Block bottom padding={[0, theme.sizes.padding]}>
            <Text bold style={{fontSize: 40, paddingBottom: 40}}>
              일정
            </Text>
          </Block>
          <Calendar
            style={{
              width,
              overflow: 'hidden',
            }}
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={width}
            onVisibleMonthsChange={months => {
              console.log('now these months are visible', months);
            }}
            onDayPress={day => handleDate(day)}
            monthFormat={'yyyy MM'}
            hideExtraDays={true}
            disableMonthChange={true}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            markedDates={date}
            markingType="period"
            theme={{
              arrowColor: theme.colors.primary,
              todayTextColor: theme.colors.primary,
              mondayTextColor: theme.colors.primary,
              'stylesheet.day.period': {
                base: {
                  overflow: 'hidden',
                  height: 34,
                  alignItems: 'center',
                  width: 38,
                },
              },
            }}
          />

          <Block top padding={[0, theme.sizes.padding]}>
            <Button
              gradient
              onPress={() => {
                setStep(step + 1);
                setLoading(false);
              }}>
              <Text bold white center>
                다음
              </Text>
            </Button>
            <Button shadow style={styles.shadow}>
              <Text center semibold onPress={() => navigation.goBack()}>
                뒤로
              </Text>
            </Button>
          </Block>
        </Block>
      );
    } else {
      return (
        <Block padding={[0, theme.sizes.padding]}>
          <Block middle>
            <Text bold style={{fontSize: 40, paddingBottom: 40}}>
              숙박
            </Text>
            <Input
              label="Hotel"
              style={[styles.input]}
              defaultValue={hotel}
              onChangeText={text => {
                setHotel(text);
              }}
            />
            <Button
              gradient
              onPress={() => {
                handleSignUp();
              }}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  등록
                </Text>
              )}
            </Button>
            <Button shadow style={styles.shadow}>
              <Text center semibold onPress={() => setStep(step - 1)}>
                뒤로
              </Text>
            </Button>
          </Block>
        </Block>
      );
    }
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      {renderSignUp()}
    </KeyboardAvoidingView>
  );
};

TripInfoScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default TripInfoScreen;
