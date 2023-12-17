import {
  StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image as ExpoImage} from 'expo-image';
import useImagePicker from "../customHook/useImagePicker";
import * as ImagePicker from "expo-image-picker";

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Image = ({img = 'https://placehold.co/600x400.png', style, isPicker, cb, showPreview = true}) => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  
  const {selectedImageUri, pickImage} = useImagePicker();
  useEffect(() => {
    (async () => {
      const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
      if (!status.granted) {
        await requestPermission();
      }
      console.log("////////////////////////////////////r")
      setPermissionGranted(status.granted);
    })();
  }, [])
  return (
    <TouchableWithoutFeedback onPress={() => isPicker && pickImage(cb)}>
      <View style={style}>
        <ExpoImage
          style={{
            width: '100%', height: '100%',
          }}
          source={showPreview ? selectedImageUri || img : img}
          placeholder={blurhash}
          contentFit='cover'
          transition={1000}
        />
      </View>
    </TouchableWithoutFeedback>);
};

export default Image;

const styles = StyleSheet.create({});
