import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
}                          from 'react-native';
import React, { useState } from 'react';
import main                from '../../../style/main';
import { normalize }       from '../../../style/responsive';
import MenuCard            from './components/MenuCard';

const Menu = ({ navigation }) => {
  const [menu, setMenu] = useState([
    // {
    //   img: 'https://placehold.co/600x400.png',
    //   title: 'Tacos De Birria',
    //   category: 'Hot & Spicy',
    //   price: 4.99,
    //   itemCount: 3,
    // },
  ]);
  return (
    <View
      style={ [
        main.container,
        {
          gap: normalize(10),
        },
      ] }
    >
      <View
        style={ {
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <Text
          style={ {
            fontSize: normalize(16),
            textAlign: 'center',
            fontWeight: '900',
          } }
        >
          Menu Items
        </Text>
        <TouchableOpacity
          style={ {
            position: 'absolute',
            right: 0,
          } }
          onPress={ () => navigation.navigate('addMenu') }
        >
          <Text>Add Menu</Text>
        </TouchableOpacity>
      </View>
      { menu.length > 0 ? <FlatList data={ menu } renderItem={ ({ item }) => <MenuCard { ...item } /> }/> :
        <View style={ {
          flex: 1, alignItems: 'center', justifyContent: 'center'
        } }><Text>No Record found</Text></View> }
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
