import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../../style/main';
import {normalize} from '../../../../style/responsive';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo, MaterialIcons, AntDesign} from '@expo/vector-icons';
import {getPlaceName} from "../../../../utils/place";
import useLocation from "../../../../customHook/useLocation";
import MapView, {Marker} from "react-native-maps";
import {orderCheckout} from "../../../../api/user";
import Button from "../../../../components/Button";
import {showErrorSnackbar, showSuccessSnackbar} from "../../../../utils/Toaster";

const CheckOut = ({navigation, route}) => {
  const {order} = route.params;
  const [isLoading, setIsLoading] = useState(false)
  const [finalOrder, setFinalOrder] = useState({})
  const {
    placeName, location
  } = useLocation()
  useEffect(() => {
    if (order) {
      console.log(order)
      setFinalOrder(order)
    }
  }, []);
  
  useEffect(() => {
    console.log(location)
    if (location) {
      setFinalOrder((prevState) => ({
        ...prevState,
        deliveryAddress: placeName
      }))
    }
  }, [location])
  
  return (
    <View
      style={[main.container,]}
    >
      <Text
        style={{
          fontSize: normalize(16), textAlign: 'center',
        }}
      >
        Checkout
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{paddingHorizontal: normalize(5)}}
        >
          <View
            style={{
              flexDirection: 'row', gap: normalize(10), marginTop: normalize(20),
            }}
          >
            <TouchableOpacity
              
              onPress={() => {
                setFinalOrder((prevState) => ({
                  ...finalOrder,
                  serviceType: 'delivery'
                }))
              }}
              style={[main.shadow, {
                backgroundColor: finalOrder.serviceType === "delivery" ? '#E51A27' : "#fff",
                padding: normalize(17),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                gap: normalize(10),
                flex: 1,
              },]}
            >
              <MaterialCommunityIcons
                name='truck-delivery'
                size={normalize(20)}
                color={finalOrder.serviceType === "delivery" ? '#fff' : 'black'}
              />
              <Text
                style={{
                  color: finalOrder.serviceType === "delivery" ? '#fff' : 'black',
                  fontWeight: '600',
                  fontSize: normalize(14),
                }}
              >
                Delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFinalOrder((prevState) => ({
                  ...finalOrder,
                  serviceType: 'pickup'
                }))
              }}
              style={[main.shadow, {
                backgroundColor: finalOrder.serviceType === "pickup" ? '#E51A27' : "#fff",
                padding: normalize(17),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                gap: normalize(10),
                flex: 1,
              },]}
            >
              <Image
                source={require('../../../../../assets/pickup.png')}
                style={{
                  tintColor: finalOrder.serviceType === "pickup" ? '#fff' : "black",
                  width: normalize(20),
                  height: normalize(20),
                }}
              />
              <Text
                style={{
                  color: finalOrder.serviceType === "pickup" ? '#fff' : "black",
                  fontWeight: '600',
                  fontSize: normalize(14),
                }}
              >
                Pickup
              </Text>
            </TouchableOpacity>
          </View>
          
          {finalOrder.serviceType === "pickup" ? <View style={{
            marginBottom: normalize(10),
          }}></View> : <View
            style={[main.shadow, {
              flexDirection: 'column',
              padding: normalize(20),
              marginVertical: normalize(10),
              backgroundColor: '#fff',
              borderRadius: normalize(10),
              gap: normalize(10),
            },]}
          >
            <View
              style={{
                flexDirection: 'row', alignItems: 'center', gap: 10, position: 'relative',
              }}
            >
              <Entypo name='location' size={normalize(15)} color='black'/>
              
              <Text>Delivery Address</Text>
              <Image
                source={require('../../../../../assets/location-edit.png')}
                style={{
                  width: normalize(17), height: normalize(17), right: 0, position: 'absolute',
                }}
              />
            </View>
            <MapView style={{
              height: normalize(150),
              width: '100%'
            }} initialRegion={{
              latitude: location?.coords?.latitude || 37.78825,
              longitude: location?.coords?.longitude || -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
              <Marker
                coordinate={{
                  latitude: location?.coords?.latitude || 37.78825,
                  longitude: location?.coords?.longitude || -122.4324
                }}
                title="Marker Title"
                description="Marker Description"
              />
            </MapView>
            <Text
              style={{
                color: '#E51A27', fontWeight: '800',
              }}
            >
              Home Address
            </Text>
            <Text
              style={{
                fontWeight: '600',
              }}
            >
              {placeName || "Loading ...."}
            </Text>
          </View>}
          
          <View
            style={[main.shadow, {
              padding: normalize(15),
              marginBottom: normalize(10),
              backgroundColor: '#fff',
              borderRadius: 10,
              gap: normalize(10),
              position: 'relative',
            },]}
          >
            <View
              style={{
                flexDirection: 'row', alignItems: 'center', gap: normalize(10),
              }}
            >
              <MaterialIcons name='payments' size={24} color='black'/>
              <Text
                style={{
                  fontSize: normalize(16), fontWeight: '600',
                }}
              >
                Payment Method
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row', alignItems: 'center', gap: normalize(10),
              }}
            >
              <MaterialIcons name='payment' size={24} color='black'/>
              <Text
                style={{
                  fontSize: normalize(13),
                }}
              >
                Online Payment
              </Text>
            </View>
            <AntDesign
              name='edit'
              size={normalize(20)}
              color='#E51A27'
              style={{
                position: 'absolute', right: 20, top: 20,
              }}
            />
          </View>
          <View
            style={[main.shadow, {
              padding: normalize(15),
              marginBottom: normalize(10),
              backgroundColor: '#fff',
              borderRadius: 10,
              gap: normalize(10),
              position: 'relative',
            },]}
          >
            <View
              style={{
                flexDirection: 'row', alignItems: 'center', gap: normalize(10),
              }}
            >
              <MaterialCommunityIcons
                name='file-document'
                size={24}
                color='black'
              />
              <Text
                style={{
                  fontSize: normalize(16), fontWeight: '600',
                }}
              >
                Order Summary
              </Text>
            </View>
            {finalOrder?.items ? finalOrder.items.map(item => <View
              style={{
                flexDirection: 'row', alignItems: 'center', gap: normalize(10), justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flexDirection: 'row', gap: normalize(5), alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: normalize(12), color: '#929292',
                  }}
                >
                  {item.itemCount} x
                </Text>
                <Text
                  style={{
                    fontSize: normalize(12), color: '#929292',
                  }}
                >
                  {item.title}
                </Text>
              </View>
              
              <Text
                style={{
                  fontSize: normalize(12), color: '#929292',
                }}
              >
                ${item.price}
              </Text>
            </View>) : <></>}
            
            <AntDesign
              name='edit'
              size={normalize(20)}
              color='#E51A27'
              style={{
                position: 'absolute', right: 20, top: 20,
              }}
            />
          </View>
          <Button
            isLoading={isLoading}
            btnText={"Confirm Order"}
            onPress={() => {
              setIsLoading(true)
              orderCheckout(finalOrder).then((res) => {
                console.log(res.data.data)
                setIsLoading(false)
                showSuccessSnackbar("Successfully submitted order")
                navigation.navigate("Orders")
                
              }).catch(err => {
                setIsLoading(false)
                console.log(err.response)
                showErrorSnackbar(err.response.data.message)
              })
            }}/>
        </View>
      </ScrollView>
    </View>)
};

export default CheckOut;
