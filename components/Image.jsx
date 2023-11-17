import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image as ExpoImage } from 'expo-image';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Image = ({ img = 'https://placehold.co/600x400.png', style }) => {
  return (
    <View style={style}>
      <ExpoImage
        style={{
          width: '100%',
          height: '100%',
        }}
        source={img}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
      />
    </View>
  );
};

export default Image;

const styles = StyleSheet.create({});
