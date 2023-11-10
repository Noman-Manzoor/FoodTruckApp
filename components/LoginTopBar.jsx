import { Image, StyleSheet, Text, View } from 'react-native';
import food from '../assets/food-plat.png';
import React from 'react';
import { normalize } from '../style/responsive';

const LoginTopBar = ({ topMessage = '', hintMessage = '' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.platContainer}>
        <View style={styles.backLine} />
        <Image source={food} style={styles.platImage} />
      </View>
      <Text style={styles.topMessage}>{topMessage}</Text>
      <Text style={styles.hintMessage}>{hintMessage}</Text>
    </View>
  );
};

export default LoginTopBar;

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(15),
    height: normalize(230),
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  platContainer: {
    flex: 2,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(50),
  },
  platImage: {
    width: '70%',
    resizeMode: 'contain',
  },
  backLine: {
    backgroundColor: '#E51A27',
    height: normalize(100),
    position: 'absolute',
    left: normalize(-100),
    right: normalize(-100),
    transform: 'rotate(-18deg)',
  },
  topMessage: {
    fontSize: normalize(22),
    color: '#2F2D2D',
    fontWeight: '500',
    marginBottom: normalize(5),
  },
  hintMessage: {
    marginBottom: normalize(25),
    color: '#E51A27',
    fontWeight: '500',
    fontSize: normalize(16),
  },
});
