import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../../../../style/responsive';
import main from '../../../../style/main';
import {Entypo, MaterialIcons, AntDesign} from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper';
import MapView, {Marker} from "react-native-maps";
import {updateTruckOrderRequests} from "../../../../api/truck";
import {showSuccessSnackbar} from "../../../../utils/Toaster";

const ItemView = ({itemCount, title, price}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(10),
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: normalize(10),
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: normalize(12),
            color: '#000',
            fontWeight: '600',
          }}
        >
          {itemCount}
        </Text>
        <Text
          style={{
            fontSize: normalize(12),
            color: '#000',
            fontWeight: '600',
          }}
        >
          x
        </Text>
        <Text
          style={{
            fontSize: normalize(12),
            color: '#000',
            fontWeight: '600',
          }}
        >
          {title}
        </Text>
      </View>
      
      <Text
        style={{
          fontSize: normalize(12),
          color: '#E51A27',
          fontWeight: '900',
        }}
      >
        ${price}
      </Text>
    </View>
  );
};

const OrderRequest = ({id, name, date, deliveryAddress: address, items = [], status, ...item}) => {
  const [show, setShow] = useState(false);
  return (
    <View
      style={[
        main.shadow,
        {
          gap: normalize(10),
          backgroundColor: '#fff',
          margin: normalize(5),
          padding: normalize(15),
          borderRadius: 10,
          position: 'relative',
          overflow: 'hidden'
        },
      ]}
    >
      <Text style={{
        position: 'absolute',
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
        color: 'white',
        backgroundColor: status === 2 ? 'green' : status === -1 ? "red" : "blue",
      }}>
        {status === 0 ? "Pending" : status == 1 ? "Checkout" : status == 2 ? "Accept" : status == 3 ? "Processing" : status == 4 ? "Delivered" : "Rejected"}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#2F2D2D',
            fontWeight: '900',
            fontSize: normalize(12),
            fontStyle: 'italic',
          }}
        >
          {id}
        </Text>
        <Text
          style={{
            color: '#929292',
            fontWeight: '600',
            fontSize: normalize(12),
          }}
        >
          {date}
        </Text>
      </View>
      <Text
        style={{
          color: '#E51A27',
          textAlign: 'center',
          fontWeight: '900',
          fontSize: normalize(14),
        }}
      >
        New Order From {name}
      </Text>
      
      <TouchableRipple
        onPress={() => {
          setShow((prev) => !prev);
        }}
      >
        <Text
          style={{
            padding: normalize(5),
            textAlign: 'center',
          }}
        >
          {show ? 'Order Details' : 'View Details'}
        </Text>
      </TouchableRipple>
      {show ? (
        <>
          <View>
            {items.map((item) => (
              <ItemView {...item} />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Entypo name='location' size={normalize(15)} color='black'/>
            
            <Text>Delivery Address</Text>
          </View>
          <MapView style={{
            height: normalize(150),
            width: '100%'
          }} initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
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
            {address}
          </Text>
        </>
      ) : (
        <></>
      )}
      
      {status == 1 ? <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: normalize(10),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            updateTruckOrderRequests(item._id, {
              status: -1
            }).then(res => {
              console.log(res.data.data)
              item.cb()
              showSuccessSnackbar("Order rejected")
            }).catch((err) => {
              console.log(err.response.data)
            })
          }}
          style={[
            main.shadow,
            {
              backgroundColor: '#fff',
              padding: normalize(7),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              gap: normalize(10),
              flex: 1,
              borderColor: '#E51A27',
              borderWidth: 2,
            },
          ]}
        >
          <Text
            style={{
              color: '#E51A27',
              fontWeight: '600',
              fontSize: normalize(14),
            }}
          >
            Reject
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            updateTruckOrderRequests(item._id, {
              status: 2
            }).then(res => {
              console.log(res.data.data)
              item.cb()
              showSuccessSnackbar("Order accepted")
            }).catch((err) => {
              console.log(err.response.data)
            })
          }}
          style={[
            main.shadow,
            {
              backgroundColor: '#E51A27',
              padding: normalize(7),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              gap: normalize(10),
              flex: 1,
            },
          ]}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: normalize(14),
            }}
          >
            Accept
          </Text>
        </TouchableOpacity>
      </View> : <></>}
    </View>
  );
};

export default OrderRequest;

const styles = StyleSheet.create({});
