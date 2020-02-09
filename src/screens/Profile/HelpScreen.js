import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Block, Text} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
import {updateUser} from 'app/src/api/user';
import {UserStoreContext} from 'app/src/store/user';

const HeloScreen = observer(props => {
  const {navigation} = props;

  const [messageEmail, setMessageEmail] = useState(false);
  const [messagePush, setMessagePush] = useState(false);
  const [messageSms, setMessageSms] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState(false);
  const [noticePush, setNoticePush] = useState(false);
  const [noticeSms, setNoticeSms] = useState(false);

  const [promotionEmail, setPromotionEmail] = useState(false);
  const [promotionPush, setPromotionPush] = useState(false);
  const [promotionSms, setPromotionSms] = useState(false);

  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    const {notice} = user;

    setMessageEmail(notice.message.email);
    setMessagePush(notice.message.push);
    setMessageSms(notice.message.sms);

    setNoticeEmail(notice.notice.email);
    setNoticePush(notice.notice.push);
    setNoticeSms(notice.notice.sms);

    setPromotionEmail(notice.promotion.email);
    setPromotionPush(notice.promotion.push);
    setPromotionSms(notice.promotion.sms);
  }, []);

  saveNotice = () => {
    let newUser = {
      ...user,
      notice: {
        message: {
          email: messageEmail,
          push: messagePush,
          sms: messageSms,
        },
        notice: {
          email: noticeEmail,
          push: noticePush,
          sms: noticeSms,
        },
        promotion: {
          email: promotionEmail,
          push: promotionPush,
          sms: promotionSms,
        },
      },
    };

    updateUser(user.email, newUser)
      .then(() => {
        console.log('done');
      })
      .catch(err => {
        console.log(err);
      });
  };

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
          저장 정보가 없습니다
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
