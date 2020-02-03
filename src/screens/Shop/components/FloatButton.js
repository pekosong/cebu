import React, {useState, useContext} from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';

import {PlanModal, LoginModal} from 'app/src/components';
import {colors} from 'app/src/styles';
import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';
import {AntDesign} from '@expo/vector-icons';
import {default as Modal_} from 'react-native-modal';

export default FloatButton = observer(({navigation, shop}) => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  const {isLogin, user} = useContext(UserStoreContext);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        !isLogin
          ? setShowModal(true)
          : Object.entries(user.plans).length != 0
          ? setVisible(true)
          : setShowPlan(true)
      }>
      <AntDesign color={colors.accent} size={30} name="plus"></AntDesign>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <PlanModal
          shop={shop}
          navigation={navigation}
          setVisible={setVisible}
        />
      </Modal>
      <Modal_
        backdropOpacity={0.1}
        animationInTiming={500}
        useNativeDriver={true}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}>
        <LoginModal text="로그인이 필요합니다"></LoginModal>
      </Modal_>
      <Modal_
        backdropOpacity={0.1}
        animationInTiming={500}
        useNativeDriver={true}
        isVisible={showPlan}
        onBackdropPress={() => setShowPlan(false)}>
        <LoginModal text="여행정보를 등록하세요"></LoginModal>
      </Modal_>
    </TouchableOpacity>
  );
});

FloatButton.defaultProps = {};

FloatButton.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 15,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
