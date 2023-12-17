import * as SecureStore from 'expo-secure-store';

exports.storeValue = async (token, key) => {
  try {
    await SecureStore.setItemAsync(key, token);
    console.log('Token stored successfully!');
  }
  catch (error) {
    console.error('Error storing token:', error);
  }
};

exports.getValue = async (key) => {
  try {
    const token = await SecureStore.getItemAsync(key);
    if (token) {
      console.log('Token retrieved:', token);
      return token
    }
    else {
      console.log('No token found');
      return ""
    }
  }
  catch (error) {
    console.error('Error retrieving token:', error);
  }
};
