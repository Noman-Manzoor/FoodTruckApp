import * as ImagePicker from 'expo-image-picker';
import api from '../api';
import React from 'react'

exports.pickImage = async (cb) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  });
  
  if (!result.canceled) {
    cb(result.uri);
  }
};
exports.uploadImage = async (imageUri) => {
  const formData = new FormData();
  formData.append('files', {
    uri: imageUri,
    type: 'image/jpeg', // adjust based on image type
    name: 'photo.jpg', // adjust filename
  });
  
  try {
    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    },);
    
    console.log('Image uploaded successfully!', response.data);
    return response.data
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error("Error While uploading image")
  }
};
