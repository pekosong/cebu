import React from 'react';
import {TouchableWithoutFeedback, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Block, Text} from 'app/src/components';
import {sizes, colors} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default SortModal = ({sort, setSort, setShowSort}) => {
  return (
    <Block
      style={{
        flex: 0,
        bottom: 0,
        position: 'absolute',
        width: width - sizes.padding * 1.9,
      }}>
      <Block
        style={{
          flex: 0,
          backgroundColor: 'white',
          marginHorizontal: -sizes.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Block
          onPress={() => {
            setShowSort(false);
          }}
          style={{
            flex: 0,
            paddingVertical: 16,
            borderBottomWidth: 0.8,
            borderBottomColor: colors.gray2,
            position: 'relative',
          }}>
          <Text h3 bold center>
            정렬 순서
          </Text>
          <Block
            style={{
              flex: 0,
              position: 'absolute',
              right: 20,
              top: 7,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setShowSort(false);
              }}>
              <Ionicons size={40} color={colors.black} name="ios-close" />
            </TouchableWithoutFeedback>
          </Block>
        </Block>
        {[
          {label: '리뷰 많은 순', value: 'reviewCnt'},
          {label: '평점 좋은 순', value: 'review'},
          {label: '저장 많은 순', value: 'like'},
        ].map((item, idx) => (
          <Block
            key={idx}
            row
            style={{
              flex: 0,
              borderBottomWidth: 0.3,
              borderBottomColor: colors.gray2,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setSort(item.value);
                setShowSort(false);
              }}>
              <Block
                row
                middle
                center
                style={{
                  height: 50,
                }}>
                {sort === item.value && (
                  <Ionicons
                    style={{marginRight: 10}}
                    size={40}
                    color={colors.primary}
                    name="ios-checkmark"
                  />
                )}
                <Text h4 center>
                  {item.label}
                </Text>
              </Block>
            </TouchableWithoutFeedback>
          </Block>
        ))}
      </Block>
      <Block
        style={{
          flex: 0,
          height: 20,
          width: width,
          marginLeft: -20,
          marginBottom: -20,
          backgroundColor: 'white',
        }}></Block>
    </Block>
  );
};
