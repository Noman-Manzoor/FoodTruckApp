import {
  FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../../style/main';
import {normalize} from '../../../../style/responsive';
import {Entypo} from '@expo/vector-icons';
import MyCartCard from './components/MyCartCard';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {addOrder} from "../../../../api/user";
import {showErrorSnackbar, showSuccessSnackbar} from "../../../../utils/Toaster";
import Button from "../../../../components/Button";

const MyCart = ({navigation, route}) => {
  const {item} = route.params
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    if (item) {
      setCart(item)
    }
  }, [item]);
  
  const [cart, setCart] = useState(item);
  return (<View
    style={[main.container, {
      gap: normalize(7), padding: 0,
    },]}
  >
    <Text
      style={{
        fontSize: normalize(16), textAlign: 'center',
      }}
    >
      My Cart
    </Text>
    <Text
      style={{
        fontSize: normalize(12), textAlign: 'center',
      }}
    >
      {cart.truckName || ""}
    </Text>
    <View
      style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: normalize(5),
      }}
    >
      <Entypo name='location' size={normalize(15)} color='#E51A27'/>
      <Text
        style={{
          color: '#929292', width: '60%', textAlign: 'center'
        }}
      >
        {cart.truckLocation || ""}
      </Text>
    </View>
    <FlatList
      style={{
        flex: 1, paddingHorizontal: normalize(20), marginTop: normalize(20),
      }}
      showsVerticalScrollIndicator={false}
      data={cart?.items || []}
      renderItem={({item, index}) => <MyCartCard
        {...item}
        increment={() => {
          setCart((prevState) => {
            const tempState = prevState.items;
            if (tempState[index].itemCount < tempState[index].quantity) {
              tempState[index].itemCount += 1;
              console.log(tempState[index], prevState.price)
              prevState.price += parseInt(tempState[index].price);
            }
            return ({
              ...prevState, items: tempState
            })
          })
        }}
        
        decrement={() => {
          setCart((prevState) => {
            const tempState = prevState.items;
            if (tempState[index].itemCount > 1) {
              tempState[index].itemCount -= 1;
              console.log(tempState[index], prevState.price)
              prevState.price -= parseInt(tempState[index].price);
            }
            return ({
              ...prevState, items: tempState
            })
          })
        }}
      />}
    />
    <View
      style={[main.shadow, {
        width: '100%',
        backgroundColor: '#fff',
        marginTop: normalize(20),
        padding: normalize(20),
        borderTopLeftRadius: normalize(30),
        borderTopRightRadius: normalize(30),
        gap: normalize(10),
      },]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          gap: normalize(5),
          padding: normalize(7),
          borderRadius: 50,
          borderColor: '#AEAEAE',
          borderWidth: 1,
        }}
      >
        <MaterialCommunityIcons
          name='brightness-percent'
          size={24}
          color='#E51A27'
        />
        <Text>Do you have any promo code?</Text>
      </View>
      <View
        style={{
          width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#2F2D2D',
          }}
        >
          Total Items:
        </Text>
        <Text
          style={{
            color: '#2F2D2D', fontWeight: '900',
          }}
        >
          ${cart.price || 0}
        </Text>
      </View>
      <View
        style={{
          width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#2F2D2D',
          }}
        >
          Delivery Fee:
        </Text>
        <Text
          style={{
            color: '#2F2D2D', fontWeight: '900',
          }}
        >
          ${cart.deliveryFee}
        </Text>
      </View>
      <View
        style={{
          width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#2F2D2D',
          }}
        >
          Total GST:
        </Text>
        <Text
          style={{
            color: '#2F2D2D', fontWeight: '900',
          }}
        >
          ${cart.totalGst}
        </Text>
      </View>
      <View
        style={{
          width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#000', fontWeight: '900', fontSize: normalize(14),
          }}
        >
          Grand Total:{' '}
        </Text>
        <Text
          style={{
            color: '#E51A27', fontWeight: '900', fontSize: normalize(16),
          }}
        >
          ${cart.price + cart.deliveryFee + cart.totalGst}
        </Text>
      </View>
      <Button
        onPress={() => {
          setIsLoading(true)
          addOrder(cart).then(res => {
            console.log(res.data.data)
            showSuccessSnackbar("Successfully add order to cart")
            setIsLoading(false)
            navigation.navigate('checkOut', {
              order: res.data.data,
            })
          }).catch((err) => {
            console.log(err.response)
            showErrorSnackbar(err.response.data.message)
            setIsLoading(false)
          })
        }}
        isLoading={isLoading}
        btnText={"Proceed to Checkout"}
      />
    </View>
  </View>);
};

export default MyCart;

const styles = StyleSheet.create({});
