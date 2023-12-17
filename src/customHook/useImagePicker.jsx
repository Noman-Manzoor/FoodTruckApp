import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';


const useImagePicker = () => {
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  
  const pickImage = async (cb) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true,
    });
    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
      cb(result)
    }
  };
  
  return {
    selectedImageUri, pickImage,
  };
};

export default useImagePicker;
