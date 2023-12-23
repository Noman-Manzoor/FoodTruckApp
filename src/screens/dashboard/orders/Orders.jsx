import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import {normalize} from '../../../style/responsive';
import OrderCard from './components/OrderCard';
import {getMyOrders} from "../../../api/user";
import {useFocusEffect} from "@react-navigation/native";

const Orders = () => {
  const [list, setList] = useState([
    // {
    //   url: 'https://placehold.co/600x400.png',
    //   title: 'Curbside Taco Delights',
    //   price: '$12.95',
    //   date: 'October 3rd at 7pm',
    //   restaurant: 'Tacos De Birra, Nachos, Pizza',
    //   status: 'Completed',
    //   orderId: '#657b056589820bfab57be713',
    // },
  ]);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchData()
    }, [])
  );
  
  useEffect(() => {
    fetchData()
  }, []);
  
  const fetchData = () => {
    
    getMyOrders().then(res => {
      console.log(res.data.data)
      setList(res.data.data)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
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
      {list.length > 0 ? <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) =>
          <OrderCard
            key={index}
            orderId={item._id}
            title={item.truckId.name}
            status={item.status}
            date={new Date(item.createdAt).toLocaleString()}
            price={item.price}
            url={item.truckId.thumbnails}
            
            {...item.items}
          />
        }
      /> : <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}><Text>No Record found</Text></View>}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
