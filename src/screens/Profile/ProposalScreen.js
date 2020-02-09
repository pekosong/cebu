import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Block, Text} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
const ProposalScreen = observer(props => {
  const {navigation} = props;

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
          의견 남기기
        </Text>
        <Text darkgray h4 center style={{marginTop: 20}}>
          저장 정보가 없습니다
        </Text>
      </Block>
    </SafeAreaView>
  );
});

ProposalScreen.navigationOptions = {
  header: null,
};
ProposalScreen.defaultProps = {};
const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
  inputs: {
    paddingHorizontal: sizes.padding,
  },
});

export default ProposalScreen;
