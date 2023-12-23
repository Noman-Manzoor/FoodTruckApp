import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Entypo} from '@expo/vector-icons';
import main from '../../../../style/main';
import {normalize} from '../../../../style/responsive';
import MapView, {Marker} from "react-native-maps";
import {getPlaceName} from "../../../../utils/place";

const Location = ({location}) => {
  useEffect(() => {
    (async () => {
      if (location && location?.longitude && location.latitude) {
        await getPlaceName(location.latitude, location.longitude)
      }
    })()
  }, [location]);
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
          <Entypo name='location' size={normalize(15)} color='black'/>
          
          <Text>Truck Address</Text>
        </View>
        <MapView style={styles.map} initialRegion={{
          latitude: location.latitude || 37.78825,
          longitude: location.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{latitude: location.latitude || 37.78825, longitude: location.longitude || -122.4324}}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
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
          {location?.other?.address || ""}
        </Text>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  map: {
    height: normalize(150),
    width: '100%'
  }
});
