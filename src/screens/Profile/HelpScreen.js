import React, {useEffect, useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Block, Text} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

const HeloScreen = observer(props => {
  const {navigation} = props;

  const {user} = useContext(UserStoreContext);

  useEffect(() => {}, []);

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <Block style={style.scrollTab}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={30} color={colors.black} name="ios-arrow-back" />
        </TouchableOpacity>
      </Block>
      <Block center middle>
        <Text size={40} bold center>
          도움
        </Text>
        <Text darkgray h4 center style={{marginTop: 20}}>
          준비 중입니다.
        </Text>
      </Block>
    </SafeAreaView>
  );
});

HeloScreen.navigationOptions = {
  header: null,
};
HeloScreen.defaultProps = {};
const styles = StyleSheet.create({});

export default HeloScreen;
