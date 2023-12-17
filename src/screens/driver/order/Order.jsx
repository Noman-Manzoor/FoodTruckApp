import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import main                from '../../../style/main';
import OrderRequest        from './components/OrderRequest';
import { normalize }       from '../../../style/responsive';

const Order = () => {
  const [request, setRequest] = useState([// {
    //   id: '#4758864',
    //   name: 'John Doe',
    //   date: 'Oct 10, 2023 9:15 PM',
    //   address: 'House No 67, James ST, 4th Avenue , Texas',
    //   item: [
    //     {
    //       count: 3,
    //       title: 'Tasty Tacos',
    //       price: '14.50',
    //     },
    //     {
    //       count: 2,
    //       title: 'Cheesy Nachos',
    //       price: '20.50',
    //     },
    //   ],
    // },
  ]);
  return (<View
      style={ [main.container, {
        gap: normalize(5),
      },] }
    >
      <Text
        style={ {
          fontSize: normalize(16), textAlign: 'center', fontWeight: '900',
        } }
      >
        Order
      </Text>
      { request.length > 0 ? <FlatList
        data={ request }
        renderItem={ ({ item }) => <OrderRequest { ...item } /> }
      /> : <View style={ {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      } }><Text>No Record found</Text></View> }
    </View>);
};

export default Order;

const styles = StyleSheet.create({});
