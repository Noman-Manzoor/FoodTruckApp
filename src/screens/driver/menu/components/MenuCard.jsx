import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import main from '../../../../style/main';
import Image from '../../../../components/Image';
import {normalize} from '../../../../style/responsive';
import {deleteTruckMenu} from "../../../../api/truck";
import showSuccessSnackbar, {showErrorSnackbar} from "../../../../utils/Toaster";

const MenuCard = ({_id, img, title, category, price, quantity, navigation, cb}) => {
  return (<View
    style={[main.shadow, {
      backgroundColor: '#fff',
      padding: normalize(15),
      margin: normalize(5),
      borderRadius: normalize(7),
      flexDirection: 'row',
      gap: normalize(10),
    },]}
  >
    <Image
      style={{
        width: normalize(60), height: normalize(60), borderRadius: 8, overflow: 'hidden',
      }}
      img={img}
    />
    <View
      style={{
        flex: 2, flexDirection: 'column', justifyContent: 'space-between',
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
          fontWeight: '900', fontSize: normalize(12),
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
        flex: 1, justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-end',
      }}
    >
      <View
        style={{
          flexDirection: 'row', gap: normalize(7), alignContent: 'center',
        }}
      >
        <TouchableOpacity onPress={() => {
          deleteTruckMenu(_id).then(async res => {
            showSuccessSnackbar(res.data.data.message)
            await cb()
          }).catch(err => {
            console.log(err)
            showErrorSnackbar(err.response.data.message)
          })
        }}>
          <MaterialIcons name='delete' size={normalize(17)} color='#E51A27'/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {
          navigation.navigate("addMenu", {
            data: {
              _id, img, title, category, price, quantity
            }
          })
        }}>
          <AntDesign name='edit' size={normalize(17)} color='#E51A27'/>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row', gap: normalize(5),
        }}
      >
        <Text
          style={{
            color: '#E51A27', fontWeight: '600', fontSize: normalize(12),
          }}
        >
          In Stock:
        </Text>
        <Text
          style={{
            color: '#000', fontWeight: '600', fontSize: normalize(12),
          }}
        >
          {quantity} Left
        </Text>
      </View>
    </View>
  </View>);
};

export default MenuCard;

const styles = StyleSheet.create({});
