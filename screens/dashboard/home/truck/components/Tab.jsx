import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { normalize } from '../../../../../style/responsive';

const Tab = ({ title = 'Info', event = () => {}, active = false }) => {
  return (
    <TouchableRipple
      style={{
        borderBottomColor: active ? '#E51A27' : 'transparent',
        borderBottomWidth: 4,
      }}
      onPress={() => event()}
    >
      <Text
        style={{
          color: active ? '#E51A27' : '#000',
          fontWeight: '600',
          fontSize: normalize(14),
        }}
      >
        {title}
      </Text>
    </TouchableRipple>
  );
};

export default Tab;

const styles = StyleSheet.create({});
