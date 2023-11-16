import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import main from '../../../style/main';
import { normalize } from '../../../style/responsive';
import OrderCard from './components/OrderCard';

const Orders = () => {
  const [list, setList] = useState([
    {
      url: 'https://placehold.co/600x400.png',
      title: 'Curbside Taco Delights',
      price: '$12.95',
      date: 'October 3rd at 7pm',
      restaurant: 'Tacos De Birra, Nachos, Pizza',
      status: 'Completed',
      orderId: '#BH64Gh44',
    },
  ]);
  return (
    <View
      style={[
        main.container,
        {
          gap: normalize(10),
        },
      ]}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: normalize(16),
          fontWeight: '500',
        }}
      >
        Order History
      </Text>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        keyExtractor={(_, index) => index}
        renderItem={({ item, index }) => <OrderCard key={index} {...item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
