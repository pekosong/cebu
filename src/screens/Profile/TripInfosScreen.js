import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Block, Text} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

const TripInfosScreen = observer(props => {
  const {navigation} = props;
  const [editing, setEditing] = useState(null);
  const [plans, setPlans] = useState({});
  const {user} = useContext(UserStoreContext);

  const NUMTOWEEK = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  };

  useEffect(() => {
    setPlans(user.plans);
  }, [user]);

  handleEdit = (name, text) => {
    profile[name] = text;
    setProfile(profile);
  };
  renderEdit = () => {
    <TextInput
      defaultValue={name}
      placeholder="song"
      onChangeText={() => setName(name)}
      style={{fontSize: 20}}
    />;
  };

  toggleEdit = name => {
    setEditing(!editing ? name : null);
  };

  return (
    <>
      <ScrollView>
        <Block style={style.header}>
          <Block row center space="between">
            <Button onPress={() => navigation.goBack()}>
              <Block center row>
                <Ionicons
                  size={30}
                  color={colors.black}
                  name="ios-arrow-back"
                />
              </Block>
            </Button>
            <TouchableOpacity onPress={() => {}}>
              <Text bold h3>
                저장
              </Text>
            </TouchableOpacity>
          </Block>
          <Text h1 bold style={{marginTop: 10, marginBottom: 30}}>
            내 여행 정보
          </Text>
        </Block>
        {Object.entries(plans).length != 0 ? (
          <Block style={styles.inputs}>
            <Block
              space="between"
              row
              style={{...styles.plan, borderBottomWidth: 0}}>
              <Text h2 bold>
                일정
              </Text>
              <Text h2 bold>
                호텔
              </Text>
            </Block>
            {Object.keys(plans).map((key, idx) => {
              return (
                <Block space="between" row key={idx} style={styles.plan}>
                  <Text h3>
                    {key}
                    {' (' + NUMTOWEEK[moment(key).day()] + ')'}
                  </Text>
                  <Text h3>{plans[key].hotel}</Text>
                </Block>
              );
            })}
          </Block>
        ) : (
          <Block center style={{marginTop: 200}}>
            <Text h1 bold>
              여행 정보를 등록하세요
            </Text>
          </Block>
        )}
      </ScrollView>
      <Block
        flex={false}
        style={{marginHorizontal: sizes.padding, marginBottom: 10}}>
        <Button normal onPress={() => navigation.navigate('TripInfo')}>
          <Text white center>
            {Object.entries(plans).length != 0
              ? '여행 정보 변경'
              : '새로운 여행 등록'}
          </Text>
        </Button>
      </Block>
    </>
  );
});

TripInfosScreen.navigationOptions = {
  header: null,
};
TripInfosScreen.defaultProps = {};
const styles = StyleSheet.create({
  inputs: {
    paddingHorizontal: sizes.padding,
    marginVertical: 10,
  },
  plan: {
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
});

export default TripInfosScreen;
