import React, {useState} from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';

import {PlanModal, LoginModal} from 'app/src/components';
import {colors} from 'app/src/styles';
import {useSelector} from 'react-redux';
import {AntDesign} from '@expo/vector-icons';

import {default as Modal_} from 'react-native-modal';

export default FloatButton = ({navigation, shop}) => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  const {loggedIn, user} = useSelector(state => state.user);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        !loggedIn
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
        animationInTiming={200}
        useNativeDriver={true}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}>
        <LoginModal
          text="로그인이 필요합니다"
          subText="로그인 후 내 여행 정보에 저장하세요"
          setShowModal={setShowModal}
          navigation={navigation}></LoginModal>
      </Modal_>
      <Modal_
        backdropOpacity={0.1}
        animationInTiming={500}
        useNativeDriver={true}
        isVisible={showPlan}
        onBackdropPress={() => setShowPlan(false)}>
        <LoginModal
          text="여행정보 등록이 필요합니다"
          subText="나만의 여행 정보를 등록해보세요"
          setShowModal={setShowPlan}
          navigation={navigation}
          isTrip={true}></LoginModal>
      </Modal_>
    </TouchableOpacity>
  );
};

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
