import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Block, Text} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
const ProposalScreen = observer(props => {
  const {navigation} = props;

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={style.appBar}>
        <Block style={{backgroundColor: colors.white}}>
          <Block center row space="between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons size={30} color={colors.black} name="ios-arrow-back" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveNotice()}>
              <Text bold h3>
                저장
              </Text>
            </TouchableOpacity>
          </Block>
          <Text h1 bold style={{marginTop: 10, marginBottom: 20}}>
            의견 남기기
          </Text>
        </Block>
      </ScrollView>
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
