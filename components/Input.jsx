import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { normalize } from '../style/responsive';

const Input = ({ label, text, setText, left, right }) => {
  return (
    <View style={styles.textInput}>
      {left}
      <TextInput
        style={{
          flex: 1,
          padding: normalize(10),
        }}
        mode='outlined'
        placeholder={label}
        value={text}
        onChangeText={(text) => setText(text)}
        outlineColor={'transparent'}
        activeOutlineColor={'transparent'}
      />
      {right}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    paddingStart: normalize(10),
    paddingEnd: normalize(10),
  },
});
