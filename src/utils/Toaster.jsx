import Snackbar       from 'react-native-snackbar';
import { StyleSheet } from 'react-native';
import React          from 'react';

// Define styles for different snackbar types
const styles = StyleSheet.create({
  success: '#4CAF50', error: '#F44336', warning: '#FF9800',
});
exports.showSuccessSnackbar = (message,) => {
  Snackbar.show({
    text: message, duration: Snackbar.LENGTH_SHORT, backgroundColor: styles.success,
  });
};

exports.showErrorSnackbar = (message) => {
  Snackbar.show({
    text: message, duration: Snackbar.LENGTH_LONG, backgroundColor: styles.error,
  });
};

exports.showWarningSnackbar = (message) => {
  Snackbar.show({
    text: message, duration: Snackbar.LENGTH_SHORT, backgroundColor: styles.warning,
  });
};
