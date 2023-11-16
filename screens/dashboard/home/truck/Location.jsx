import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import main from '../../../../style/main';
import { normalize } from '../../../../style/responsive';

const Location = () => {
  return (
    <View style={[]}>
      <View
        style={[
          main.shadow,
          {
            flexDirection: 'column',
            padding: normalize(20),
            margin: normalize(10),
            backgroundColor: '#fff',
            borderRadius: normalize(10),
            gap: normalize(10),
          },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Entypo name='location' size={normalize(15)} color='black' />

          <Text>Truck Address</Text>
        </View>
        <View
          style={{
            height: normalize(60),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ededed',
          }}
        >
          <Text>MAP WILL BE HERE</Text>
        </View>
        {/* <MapView style={styles.map} /> */}
        <Text
          style={{
            color: '#E51A27',
            fontWeight: '800',
          }}
        >
          Home Address
        </Text>
        <Text
          style={{
            fontWeight: '600',
          }}
        >
          House No 67, James ST, 4th Avenue , Texas
        </Text>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
