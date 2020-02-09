import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, TextInput} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import AppBar from './components/AppBar';
import {Button, Block, Text} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
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
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={style.scrollTab}>
        <AppBar title={'내 여행 정보'} goBack={navigation.goBack} />
        {Object.entries(plans).length != 0 ? (
          <Block>
            {Object.keys(plans).map((key, idx) => {
              return (
                <Block key={idx} style={styles.plan}>
                  <Text h2 darkgray>
                    {key}
                    {' (' + NUMTOWEEK[moment(key).day()] + ')'}
                  </Text>
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
        style={{
          flex: 0,
          marginHorizontal: sizes.padding,
          marginBottom: 10,
        }}>
        <Button normal onPress={() => navigation.navigate('TripInfo')}>
          <Text white center>
            {Object.entries(plans).length != 0
              ? '여행 정보 변경'
              : '새로운 여행 등록'}
          </Text>
        </Button>
      </Block>
    </SafeAreaView>
  );
});

TripInfosScreen.navigationOptions = {
  header: null,
};
TripInfosScreen.defaultProps = {};

const styles = StyleSheet.create({
  plan: {
    paddingTop: 10,
    paddingBottom: 8,
    marginBottom: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
});

export default TripInfosScreen;
