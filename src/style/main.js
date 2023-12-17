import { StatusBar, StyleSheet, Platform } from 'react-native';
import { normalize } from './responsive';

const styles = StyleSheet.create({
  container: {
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight + normalize(10)
        : normalize(10),
    padding: normalize(20),
    flex: 1,
    backgroundColor: 'white',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default styles;
