import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Info from './Info';
import Menu from './Menu';
import Location from './Location';
import Popular from './Popular';
import main from '../../../../style/main';
import { Image } from 'expo-image';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { normalize } from '../../../../style/responsive';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Tab from './components/Tab';

const Truck = () => {
  const [active, setActive] = useState('Info');
  return (
    <View
      style={[
        main.container,
        {
          flexDirection: 'column',
          gap: normalize(15),
        },
      ]}
    >
      <Banner />
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
        <Tab
          title='Popular'
          event={() => setActive((prev) => 'Popular')}
          active={active === 'Popular'}
        />
        <Tab
          title='Location'
          event={() => setActive((prev) => 'Location')}
          active={active === 'Location'}
        />
      </Tabs>
      {active === 'Info' ? (
        <Info />
      ) : active === 'Menu' ? (
        <Menu />
      ) : active === 'Popular' ? (
        <Popular />
      ) : active === 'Location' ? (
        <Location />
      ) : (
        <></>
      )}
    </View>
  );
};

export default Truck;

const styles = StyleSheet.create({});
