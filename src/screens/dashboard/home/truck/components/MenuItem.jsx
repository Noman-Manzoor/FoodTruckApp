import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { normalize } from '../../../../../style/responsive';
import main from '../../../../../style/main';
import { Entypo } from '@expo/vector-icons';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const MenuItem = ({ img, title, category, price, navigation }) => {
  return (
    <View
      style={[
        main.shadow,
        {
          margin: normalize(10),
          paddingHorizontal: normalize(20),
          paddingVertical: normalize(15),
          backgroundColor: '#fff',
          alignItems: 'center',
          gap: normalize(10),
          borderRadius: normalize(20),
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
        },
      ]}
    >
      <Image
        style={{
          width: normalize(90),
          height: normalize(90),
          borderRadius: normalize(500),
        }}
        source={img}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
      />
      <Text
        style={{
          color: '#2F2D2D',
          fontSize: normalize(14),
          fontWeight: '900',
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: '#929292',
          fontWeight: '600',
          fontSize: normalize(12),
        }}
      >
        {category}
      </Text>
      <Text
        style={{
          fontWeight: '900',
        }}
      >
        <Text
          style={{
            color: '#E51A27',
            fontWeight: '900',
          }}
        >
          ${' '}
        </Text>
        {price}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('myCart')}
        style={{
          backgroundColor: '#E51A27',
          padding: normalize(10),
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      >
        <Entypo name='plus' size={normalize(20)} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
