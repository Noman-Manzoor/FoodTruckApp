import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import main from '../../../../style/main';
import { normalize } from '../../../../style/responsive';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';

const CheckOut = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={[
          main.container,
          {
            gap: normalize(7),
          },
        ]}
      >
        <Text
          style={{
            fontSize: normalize(16),
            textAlign: 'center',
          }}
        >
          Checkout
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: normalize(10),
            marginTop: normalize(20),
          }}
        >
          <TouchableOpacity
            style={[
              main.shadow,
              {
                backgroundColor: '#E51A27',
                padding: normalize(17),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                gap: normalize(10),
                flex: 1,
              },
            ]}
          >
            <MaterialCommunityIcons
              name='truck-delivery'
              size={normalize(20)}
              color='white'
            />
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: normalize(14),
              }}
            >
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              main.shadow,
              {
                backgroundColor: '#fff',
                padding: normalize(17),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                gap: normalize(10),
                flex: 1,
              },
            ]}
          >
            <Image
              source={require('../../../../assets/pickup.png')}
              style={{
                tintColor: 'black',
                width: normalize(20),
                height: normalize(20),
              }}
            />
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: normalize(14),
              }}
            >
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            main.shadow,
            {
              flexDirection: 'column',
              padding: normalize(20),
              marginVertical: normalize(10),
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
              position: 'relative',
            }}
          >
            <Entypo name='location' size={normalize(15)} color='black' />

            <Text>Delivery Address</Text>
            <Image
              source={require('../../../../assets/location-edit.png')}
              style={{
                width: normalize(17),
                height: normalize(17),
                right: 0,
                position: 'absolute',
              }}
            />
          </View>
          <View
            style={{
              height: normalize(70),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ededed',
              borderRadius: 10,
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

        <View
          style={[
            main.shadow,
            {
              padding: normalize(15),
              marginBottom: normalize(10),
              backgroundColor: '#fff',
              borderRadius: 10,
              gap: normalize(10),
              position: 'relative',
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: normalize(10),
            }}
          >
            <MaterialIcons name='payments' size={24} color='black' />
            <Text
              style={{
                fontSize: normalize(16),
                fontWeight: '600',
              }}
            >
              Payment Method
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: normalize(10),
            }}
          >
            <MaterialIcons name='payment' size={24} color='black' />
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
              position: 'absolute',
              right: 20,
              top: 20,
            }}
          />
        </View>
        <View
          style={[
            main.shadow,
            {
              padding: normalize(15),
              marginBottom: normalize(10),
              backgroundColor: '#fff',
              borderRadius: 10,
              gap: normalize(10),
              position: 'relative',
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: normalize(10),
            }}
          >
            <MaterialCommunityIcons
              name='file-document'
              size={24}
              color='black'
            />
            <Text
              style={{
                fontSize: normalize(16),
                fontWeight: '600',
              }}
            >
              Order Summary
            </Text>
          </View>
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
                gap: normalize(5),
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                3x
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                Tacos De Birria
              </Text>
            </View>

            <Text
              style={{
                fontSize: normalize(12),
                color: '#929292',
              }}
            >
              $14.97
            </Text>
          </View>
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
                gap: normalize(5),
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                3x
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                Tacos De Birria
              </Text>
            </View>

            <Text
              style={{
                fontSize: normalize(12),
                color: '#929292',
              }}
            >
              $14.97
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#929292',
            }}
          />

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
                gap: normalize(5),
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                3x
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                Tacos De Birria
              </Text>
            </View>

            <Text
              style={{
                fontSize: normalize(12),
                color: '#929292',
              }}
            >
              $14.97
            </Text>
          </View>
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
                gap: normalize(5),
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                3x
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#929292',
                }}
              >
                Tacos De Birria
              </Text>
            </View>

            <Text
              style={{
                fontSize: normalize(12),
                color: '#929292',
              }}
            >
              $14.97
            </Text>
          </View>
          <AntDesign
            name='edit'
            size={normalize(20)}
            color='#E51A27'
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
            }}
          />
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
    </ScrollView>
  );
};

export default CheckOut;
