import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import FeaturedCard from './components/FeaturedCard';
import {normalize} from '../../../style/responsive';
import {getTruckFav} from "../../../api/user";
import {useFocusEffect} from "@react-navigation/native";

const Featured = () => {
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
    
    getTruckFav().then((res) => {
      console.log(res.data.data)
      setList(res.data.data.fav)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (<View
    style={[main.container, {
      gap: normalize(10),
    },]}
  >
    <Text
      style={{
        textAlign: 'center', fontSize: normalize(16), fontWeight: '500',
      }}
    >
      Featured
    </Text>
    {list.length > 0 ? <FlatList
      data={list}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}
      keyExtractor={(_, index) => index}
      renderItem={({item, index}) => <FeaturedCard key={index} {...item} />}
    /> : <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center'
    }}><Text>No Record found</Text></View>}
  </View>);
};

export default Featured;

const styles = StyleSheet.create({});
