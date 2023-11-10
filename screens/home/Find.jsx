import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import main from '../../style/main';
import { EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { normalize } from '../../style/responsive';
import FoodCard from './dashboard/components/FoodCard';

const Find = () => {
  const [list, setList] = useState([
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tasty Tacos on Wheels',
      tag: 'American',
      startIn: '10 min',
      rate: 4.5,
      awayKm: 2,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Curbside Taco Delights',
      tag: 'American',
      startIn: '10 min',
      rate: 4.5,
      awayKm: 2.5,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Curbside Taco Delights yummy',
      tag: 'American',
      startIn: '10 min',
      rate: 4.5,
      awayKm: 5,
    },
  ]);
  return (
    <View
      style={[
        main.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            padding: normalize(10),
            borderRadius: normalize(10),
            backgroundColor: 'white',
            margin: normalize(5),
            gap: normalize(10),
          },
          main.shadow,
        ]}
      >
        <AntDesign name='search1' size={24} color='#E51A27' />
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder='Search here'
        />
      </View>

      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        renderItem={({ item, index }) => (
          <FoodCard {...item} event={() => {}} />
        )}
      />
    </View>
  );
};

export default Find;

const styles = StyleSheet.create({});
