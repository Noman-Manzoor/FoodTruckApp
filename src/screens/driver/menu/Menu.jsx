import {
  FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import {normalize} from '../../../style/responsive';
import MenuCard from './components/MenuCard';
import {getTruckMenu} from "../../../api/truck";
import {useFocusEffect} from "@react-navigation/native";

const Menu = ({navigation}) => {
  const [menu, setMenu] = useState([]);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchData()
    }, [])
  );
  
  useEffect(() => {
    
    fetchData()
  }, []);
  const fetchData = async () => {
    console.log("//////////////////// Working ///////////////////")
    const menu = await getTruckMenu()
    console.log(menu.data.data)
    setMenu((prevState) => {
      return menu.data.data.menu
    })
  }
  return (<View
    style={[main.container, {
      gap: normalize(10),
    },]}
  >
    <View
      style={{
        position: 'relative', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: normalize(16), textAlign: 'center', fontWeight: '900',
        }}
      >
        Menu Items
      </Text>
      <TouchableOpacity
        style={{
          position: 'absolute', right: 0,
        }}
        onPress={() => navigation.navigate('addMenu', {data: null})}
      >
        <Text>Add Menu</Text>
      </TouchableOpacity>
    </View>
    {menu.length > 0 ? <FlatList data={menu} keyExtractor={(item) => item._id}
                                 renderItem={({item}) => <MenuCard {...item} navigation={navigation} cb={fetchData}/> }/> :
      <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}><Text>No Record found</Text></View>}
  </View>);
};

export default Menu;

const styles = StyleSheet.create({});
