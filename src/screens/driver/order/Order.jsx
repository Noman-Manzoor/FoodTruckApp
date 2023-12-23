import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import OrderRequest from './components/OrderRequest';
import {normalize} from '../../../style/responsive';
import {getTruckOrders} from "../../../api/truck";

const Order = () => {
  const [request, setRequest] = useState([]);
  
  useEffect(() => {
    fetchData()
  }, []);
  
  const fetchData = () => {
    getTruckOrders().then(res => {
      console.log(res.data.data)
      setRequest(res.data.data)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
  
  return (<View
    style={[main.container, {
      gap: normalize(5),
    },]}
  >
    <Text
      style={{
        fontSize: normalize(16), textAlign: 'center', fontWeight: '900',
      }}
    >
      Order
    </Text>
    {request.length > 0 ? <FlatList
      data={request}
      renderItem={({item}) => <OrderRequest {...item} date={new Date(item.createdAt).toLocaleTimeString()}
                                            name={item.userId.firstName} cb={fetchData}/>}
    /> : <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}><Text>No Record found</Text></View>}
  </View>);
};

export default Order;

const styles = StyleSheet.create({});
