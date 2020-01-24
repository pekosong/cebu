import React, {useState} from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';

import {Text, PlanModal} from 'app/src/components';
import {colors} from 'app/src/styles';

import {AntDesign} from '@expo/vector-icons';

export default BottomSection = ({navigation, shop, user}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {Object.keys(user.plans).length > 0 ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() => setVisible(true)}>
          <AntDesign color={colors.accent} size={30} name="plus"></AntDesign>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Profile')}>
          <Text accent center bold>
            일정 등록
          </Text>
        </TouchableOpacity>
      )}
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
    </>
  );
};

BottomSection.defaultProps = {};

BottomSection.navigationOptions = {
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
