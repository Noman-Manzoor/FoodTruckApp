import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { normalize } from '../style/responsive';
import { ActivityIndicator } from 'react-native-paper';

const Button = ({ btnText, onPress = () => {}, isLoading = false }) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={styles.btnContainer}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator animating={true} color={'white'} />
      ) : (
        <Text style={styles.btnText}>{btnText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#E51A27',
    padding: normalize(15),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: normalize(14),
  },
});
