import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Image from '../../../../../components/Image';
import {normalize} from '../../../../../style/responsive';
import main from '../../../../../style/main';
import {AntDesign} from '@expo/vector-icons';

const MyCartCard = ({img, title, category, price, itemCount, increment, decrement}) => {
  return (
    <View
      style={[
        main.shadow,
        {
          backgroundColor: '#fff',
          padding: normalize(15),
          margin: normalize(5),
          borderRadius: normalize(7),
          flexDirection: 'row',
          gap: normalize(10),
        },
      ]}
    >
      <Image
        img={img}
        style={{
          width: normalize(60),
          height: normalize(60),
          borderRadius: 500,
          overflow: 'hidden',
        }}
      />
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Text>{title}</Text>
        <Text
          style={{
            color: '#929292',
          }}
        >
          {category}
        </Text>
        <Text
          style={{
            fontWeight: '900',
            fontSize: normalize(12),
          }}
        >
          <Text
            style={{
              color: '#E51A27',
            }}
          >
            $
          </Text>{' '}
          {price}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: '#E51A27',
            fontWeight: '900',
            fontSize: normalize(14),
          }}
        >
          $ {price * itemCount}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: normalize(7),
            alignContent: 'center',
          }}
        >
          <TouchableOpacity onPress={increment}>
            <AntDesign name='pluscircle' size={normalize(17)} color='#E51A27'/>
          </TouchableOpacity>
          
          <Text>{itemCount}</Text>
          <TouchableOpacity onPress={decrement}>
            <AntDesign
              name='minuscircle'
              size={normalize(17)}
              color='#E51A27'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyCartCard;
