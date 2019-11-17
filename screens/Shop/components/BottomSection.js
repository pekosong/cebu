import React, {useState, Fragment} from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';

import {AntDesign} from '@expo/vector-icons';
import {Block, Text, ReservationModal} from 'app/components';
import {colors} from 'app/styles';

export default function BottomSection(props) {
  const {navigation, shop, user} = props;
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <Block center middle style={styles.container}>
        {Object.keys(user.plans).length > 0 ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <AntDesign color={colors.white} size={30} name="plus"></AntDesign>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Text white center bold>
              일정 등록
            </Text>
          </TouchableOpacity>
        )}
      </Block>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <ReservationModal
          shop={shop}
          navigation={navigation}
          setVisible={setVisible}
        />
      </Modal>
    </Fragment>
  );
}

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
    backgroundColor: colors.accent,
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
  },
});
