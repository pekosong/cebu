import React, {useState} from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';

import {PlanModal} from 'app/src/components';
import {colors} from 'app/src/styles';

import {AntDesign} from '@expo/vector-icons';

export default BottomSection = ({navigation, shop, user}) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
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
    </TouchableOpacity>
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
