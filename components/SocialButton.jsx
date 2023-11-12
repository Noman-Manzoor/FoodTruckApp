import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { normalize } from '../style/responsive';

const SocialButton = ({ title, left, event }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => event()}>
      {left}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderColor: '#C6C6C6',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(15),
    gap: normalize(10),
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    fontWeight: '500',
    color: '#2F2D2D',
  },
});
