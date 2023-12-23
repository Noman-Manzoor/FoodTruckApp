import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Info from './Info';
import Menu from './Menu';
import Location from './Location';
import Popular from './Popular';
import main from '../../../../style/main';
import {Image} from 'expo-image';
import {AntDesign, Feather, Entypo} from '@expo/vector-icons';
import {normalize} from '../../../../style/responsive';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import {getTruckById} from "../../../../api/truck";
import {showErrorSnackbar} from "../../../../utils/Toaster";

const Truck = ({navigation, route}) => {
  const {id, away} = route.params
  const [active, setActive] = useState('Info');
  const [truck, setTruck] = useState(null)
  useEffect(() => {
    getTruckById(id).then(res => {
      console.log(res.data.data)
      setTruck(res.data.data)
    }).catch(e => {
      console.log(e.response.data.message)
      showErrorSnackbar(e.response.data.message)
    })
  }, []);
  return (<View
    style={[main.container, {
      flexDirection: 'column', gap: normalize(15),
    },]}
  >
    <Banner {...truck} away={away}/>
    <Tabs>
      <Tab
        title='Info'
        event={() => setActive((prev) => 'Info')}
        active={active === 'Info'}
      />
      <Tab
        title='Menu'
        event={() => setActive((prev) => 'Menu')}
        active={active === 'Menu'}
      />
      {/*<Tab*/}
      {/*  title='Popular'*/}
      {/*  event={() => setActive((prev) => 'Popular')}*/}
      {/*  active={active === 'Popular'}*/}
      {/*/>*/}
      <Tab
        title='Location'
        event={() => setActive((prev) => 'Location')}
        active={active === 'Location'}
      />
    </Tabs>
    {active === 'Info' ? (
        <Info {...truck} />) :
      active === 'Menu' ?
        (<Menu {...truck} navigation={navigation}/>)
        //   : active === 'Popular' ? (
        //   <Popular navigation={navigation}/>
        // )
        : active === 'Location' ?
          (<Location {...truck}/>) : (<></>)}
  </View>);
};

export default Truck;

const styles = StyleSheet.create({});
