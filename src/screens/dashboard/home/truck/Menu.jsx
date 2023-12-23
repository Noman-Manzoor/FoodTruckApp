import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MenuItem from './components/MenuItem';
import {addOrder} from "../../../../api/user";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {showErrorSnackbar, showSuccessSnackbar} from "../../../../utils/Toaster";
import {normalize} from "../../../../style/responsive";
import main from "../../../../style/main";

const Menu = ({navigation, _id, name, menu = [], location}) => {
  const [state, setState] = useState({
    truckId: _id,
    truckName: name,
    truckLocation: location?.other?.address || "",
    status: 0,
    price: 0,
    deliveryFee: 5.99,
    serviceType: 'delivery',
    totalGst: 15.90,
    items: []
  })
  return (<View style={{
    flex: 1, position: 'relative'
  }}>
    <FlatList
      numColumns={2}
      data={menu}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (<MenuItem
        {...item}
        navigation={navigation}
        addToCart={() => {
          setState((prevState) => {
            const findIndex = prevState.items.findIndex((i) => i._id.toString() === item._id)
            const items = prevState.items;
            if (findIndex >= 0) {
              if (items[findIndex]["itemCount"] > item.quantity) {
                items[findIndex]["itemCount"] += 1
                prevState.price += parseInt(item.price);
              }
            } else {
              
              prevState.price += parseInt(item.price);
              items.push({
                ...item, itemCount: 1
              })
            }
            return ({
              ...prevState, items
            })
          })
        }}
      />)}
    />
    <View style={{
      position: 'absolute', bottom: 0, right: 0
    }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("myCart", {item: state})
        }}
        style={[main.shadow, {
          backgroundColor: 'red', padding: normalize(15), borderRadius: 100
        }]}>
        <MaterialCommunityIcons name="cart" size={normalize(20)} color="white"/>
      </TouchableOpacity>
    </View>
  </View>);
};

export default Menu;

const styles = StyleSheet.create({});
