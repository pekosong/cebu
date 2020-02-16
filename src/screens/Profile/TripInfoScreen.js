import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from 'react-native';

import {Button, Block, Text} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import moment from 'moment';

import {useSelector, useDispatch} from 'react-redux';
import allActions from 'app/src/redux/actions';

const {width} = Dimensions.get('window');

LocaleConfig.locales['kor'] = {
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

  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

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
        color: colors.accent,
        textColor: colors.white,
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
        option['color'] = colors.accent;
        option['textColor'] = colors.white;
        newDate[e] = option;
      });
      setDate(newDate);
      setDates([]);
    }
  };

  handleTripSave = () => {
    Keyboard.dismiss();
    let plans = date;
    Object.keys(plans).forEach((key, idx) => {
      plans[key] = {nDay: idx};
    });
    const newUser = {...user, plans};
    dispatch(allActions.userActions.updateUser(newUser));
    navigation.goBack();
  };

  renderSignUp = () => {
    return (
      <Block>
        <Block bottom padding={[0, sizes.padding]}>
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
            arrowColor: colors.accent,
            todayTextColor: colors.accent,
            mondayTextColor: colors.accent,
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

        <Block top padding={[0, sizes.padding]}>
          <Button normal onPress={() => handleTripSave()}>
            <Text white center>
              등록
            </Text>
          </Button>
          <Button border style={styles.shadow}>
            <Text center accent onPress={() => navigation.goBack()}>
              뒤로
            </Text>
          </Button>
        </Block>
      </Block>
    );
  };
  return (
    <KeyboardAvoidingView style={style.full} behavior="padding">
      {renderSignUp()}
    </KeyboardAvoidingView>
  );
};

TripInfoScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: colors.accent,
  },
});

export default TripInfoScreen;
