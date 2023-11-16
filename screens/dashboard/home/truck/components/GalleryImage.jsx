import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { normalize } from '../../../../../style/responsive';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const GalleryImage = () => {
  return (
    <View
      style={{
        width: '30%',
        height: normalize(60),
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10,
      }}
    >
      <Image
        style={styles.card}
        source={'https://placehold.co/600x400/000000/FFF'}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
      />
    </View>
  );
};

export default GalleryImage;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
