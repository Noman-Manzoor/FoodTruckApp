import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import main from '../../../../../style/main';
import { Image } from 'expo-image';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { normalize } from '../../../../../style/responsive';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Banner = () => {
  return (
    <View
      style={[
        main.shadow,
        {
          flexDirection: 'column',
          position: 'relative',
          padding: 20,
          overflow: 'hidden',
          borderRadius: normalize(10),
        },
      ]}
    >
      <Image
        style={styles.foodCardIcon}
        source={'https://placehold.co/600x400/000000/FFF'}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
      />
      <View
        style={{
          flexDirection: 'column',
          gap: normalize(7),
          alignItems: 'flex-end',
        }}
      >
        <AntDesign
          name='heart'
          size={normalize(15)}
          color='#E51A27'
          style={styles.icon}
        />
        <AntDesign
          name='sharealt'
          size={normalize(15)}
          color='black'
          style={styles.icon}
        />
        <Feather
          name='more-vertical'
          size={normalize(15)}
          color='black'
          style={styles.icon}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            gap: normalize(5),
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: '900',
              fontSize: normalize(13),
            }}
          >
            Tasty Tacos on Wheels
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                color: '#fff',
              }}
            >
              Mexican{'   '}
            </Text>
            <Text
              style={{
                color: '#fff',
              }}
            >
              (Starting In 10 min)
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            gap: normalize(5),
            alignItems: 'flex-end',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: normalize(5),
            }}
          >
            <AntDesign name='star' size={normalize(15)} color='#E51A27' />
            <Text
              style={{
                color: '#E51A27',
                fontWeight: '900',
              }}
            >
              4.5
            </Text>
            <Text
              style={{
                color: '#fff',
              }}
            >
              1000+ ratings
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: normalize(5),
            }}
          >
            <Entypo name='location' size={normalize(15)} color='#E51A27' />
            <Text
              style={{
                color: '#fff',
              }}
            >
              2.5 km away
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  foodCardIcon: {
    margin: 0,
    backgroundColor: 'black',
    contentFit: 'cover',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  icon: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});
