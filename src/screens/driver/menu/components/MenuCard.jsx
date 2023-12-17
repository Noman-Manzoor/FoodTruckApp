import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import main from '../../../../style/main';
import Image from '../../../../components/Image';
import { normalize } from '../../../../style/responsive';

const MenuCard = ({ img, title, category, price, itemCount }) => {
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
        <View
          style={{
            flexDirection: 'row',
            gap: normalize(7),
            alignContent: 'center',
          }}
        >
          <TouchableOpacity>
            <MaterialIcons name='delete' size={normalize(17)} color='#E51A27' />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name='edit' size={normalize(17)} color='#E51A27' />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: normalize(5),
          }}
        >
          <Text
            style={{
              color: '#E51A27',
              fontWeight: '600',
              fontSize: normalize(12),
            }}
          >
            In Stock:
          </Text>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: normalize(12),
            }}
          >
            {itemCount} Left
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({});
