import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import qs from 'qs';
import {Linking} from 'react-native';

import {Block, Text, Button} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';

async function sendEmail(to, subject, body, options = {}) {
  const {cc, bcc} = options;

  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    body: body,
    cc: cc,
    bcc: bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}

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
        <Text darkgray h4 center style={{marginTop: 30}}>
          불편하신 점 등
        </Text>
        <Text darkgray h4 center style={{marginTop: 5, marginBottom: 30}}>
          소중한 의견을 남겨주세요
        </Text>
        <Button
          style={{
            height: 60,
            backgroundColor: colors.accent,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
          onPress={() =>
            sendEmail('pekopeko11@gmail.com', '', '').then(() => {
              console.log('Your message was successfully sent!');
            })
          }>
          <Text h4 white bold center>
            메일
          </Text>
        </Button>
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
