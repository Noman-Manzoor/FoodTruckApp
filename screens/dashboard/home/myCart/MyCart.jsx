import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import main from '../../../../style/main';
import { normalize } from '../../../../style/responsive';
import { Entypo } from '@expo/vector-icons';
import MyCartCard from './components/MyCartCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MyCart = ({ navigation }) => {
  const [cart, setCart] = useState([
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
      itemCount: 3,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
      itemCount: 3,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
      itemCount: 3,
    },
    {
      img: 'https://placehold.co/600x400.png',
      title: 'Tacos De Birria',
      category: 'Hot & Spicy',
      price: 4.99,
      itemCount: 3,
    },
  ]);
  return (
    <View
      style={[
        main.container,
        {
          gap: normalize(7),
          padding: 0,
        },
      ]}
    >
      <Text
        style={{
          fontSize: normalize(16),
          textAlign: 'center',
        }}
      >
        My Cart
      </Text>
      <Text
        style={{
          fontSize: normalize(12),
          textAlign: 'center',
        }}
      >
        The Taco of Zorro
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: normalize(5),
        }}
      >
        <Entypo name='location' size={normalize(15)} color='#E51A27' />
        <Text
          style={{
            color: '#929292',
          }}
        >
          Green Street, 4th Avenue
        </Text>
      </View>
      <FlatList
        style={{
          flex: 1,
          paddingHorizontal: normalize(20),
          marginTop: normalize(20),
        }}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({ item, index }) => <MyCartCard {...item} />}
      />
      <View
        style={[
          main.shadow,
          {
            width: '100%',
            backgroundColor: '#fff',
            marginTop: normalize(20),
            padding: normalize(20),
            borderTopLeftRadius: normalize(30),
            borderTopRightRadius: normalize(30),
            gap: normalize(10),
          },
        ]}
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
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
              color: '#2F2D2D',
              fontWeight: '900',
            }}
          >
            $141.86
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
              color: '#2F2D2D',
              fontWeight: '900',
            }}
          >
            $5.99
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
              color: '#2F2D2D',
              fontWeight: '900',
            }}
          >
            $15.96
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              color: '#000',
              fontWeight: '900',
              fontSize: normalize(14),
            }}
          >
            Grand Total:{' '}
          </Text>
          <Text
            style={{
              color: '#E51A27',
              fontWeight: '900',
              fontSize: normalize(16),
            }}
          >
            $163.81
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('checkOut')}
          style={{
            backgroundColor: '#E51A27',
            padding: normalize(17),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: '900',
              fontSize: normalize(14),
            }}
          >
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({});
