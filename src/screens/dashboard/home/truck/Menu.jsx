import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MenuItem from './components/MenuItem';

const Menu = ({ navigation }) => {
  const [menu, setMenu] = useState([
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
    },
  ]);
  return (
    <FlatList
      numColumns={2}
      data={menu}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <MenuItem {...item} navigation={navigation} />
      )}
    />
  );
};

export default Menu;

const styles = StyleSheet.create({});
