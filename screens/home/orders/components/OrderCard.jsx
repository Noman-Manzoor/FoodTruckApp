import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import main from '../../../../style/main';
import { Image } from 'expo-image';
import { TouchableRipple } from 'react-native-paper';
import { normalize } from '../../../../style/responsive';
import { Fontisto } from '@expo/vector-icons';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const OrderCard = ({
  orderId,
  url,
  title,
  date,
  price,
  status,
  restaurant,
}) => {
  return (
    <View
      style={[
        main.shadow,
        {
          flexDirection: 'column',
          backgroundColor: '#fff',
          margin: normalize(7),
          padding: normalize(15),
          gap: normalize(7),
          borderRadius: normalize(7),
        },
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: normalize(10),
        }}
      >
        <Image
          source={url}
          placeholder={blurhash}
          contentFit='cover'
          style={{
            flex: 1,
            borderRadius: normalize(7),
          }}
        />
        <View
          style={{
            flex: 2,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: '#2F2D2D',
                  fontWeight: '500',
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  color: '#2F2D2D',
                  fontSize: normalize(10),
                }}
              >
                {date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: '#E51A27',
                  fontWeight: '500',
                  fontSize: normalize(12),
                }}
              >
                {price}
              </Text>
              <Text
                style={{
                  color: '#34A853',
                  fontWeight: '500',
                }}
              >
                {status}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#929292',
              fontWeight: '500',
            }}
          >
            {restaurant}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: normalize(10),
          backgroundColor: '#f5f6fa',
          borderRadius: normalize(7),
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: '#CFCFCF',
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: '#929292',
          }}
        >
          {orderId}
        </Text>
        <TouchableRipple>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <Fontisto name='share-a' size={normalize(10)} color='#E51A27' />
            <Text
              style={{
                fontSize: normalize(12),
                color: '#E51A27',
              }}
            >
              Reorder
            </Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
