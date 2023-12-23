import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../style/main';
import {EvilIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import {normalize} from '../../style/responsive';
import FoodCard from './home/components/FoodCard';
import {getAll} from "../../api/truck";
import useLocation from "../../customHook/useLocation";

const Find = ({navigation}) => {
  const {location, errorMsg, placeName} = useLocation()
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  
  useEffect(() => {
    if (location) {
      console.log(location)
      getAll({latitude: location.coords.latitude, longitude: location.coords.longitude}).then(res => {
        setList(res.data.data)
        setFilterList(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [location]);
  return (<View
    style={[main.container, {
      flexDirection: 'column',
    },]}
  >
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
        padding: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: 'white',
        margin: normalize(5),
        gap: normalize(10),
      }, main.shadow,]}
    >
      <AntDesign name='search1' size={24} color='#E51A27'/>
      <TextInput
        style={{
          flex: 1,
        }}
        placeholder='Search here'
        onChangeText={(e) => {
          if (e.trim()) {
            setFilterList((prevState) => {
              return list.filter((item) => item.name.toLowerCase().includes(e.toLowerCase()))
            })
          } else {
            setFilterList(list)
          }
        }}
      />
    </View>
    
    <FlatList
      data={filterList}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}
      renderItem={({item, index}) => (<FoodCard {...item} event={() => {
        
        navigation.navigate('truck', {id: item._id, away: item.away});
      }}/>)}
    />
  </View>);
};

export default Find;

const styles = StyleSheet.create({});
