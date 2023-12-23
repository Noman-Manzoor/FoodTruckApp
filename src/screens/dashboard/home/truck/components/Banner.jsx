import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import main from '../../../../../style/main';
import {Image} from 'expo-image';
import {AntDesign, Feather, Entypo} from '@expo/vector-icons';
import {normalize} from '../../../../../style/responsive';
import {addTruckFav} from "../../../../../api/user";
import {showErrorSnackbar, showSuccessSnackbar} from "../../../../../utils/Toaster";

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Banner = ({name, thumbnails, category, startTime, away = "--", rating, _id}) => {
  return (<View
    style={[main.shadow, {
      flexDirection: 'column',
      position: 'relative',
      padding: 20,
      overflow: 'hidden',
      borderRadius: normalize(10),
      minHeight: normalize(140),
      justifyContent: 'space-between'
    },]}
  >
    <Image
      style={styles.foodCardIcon}
      source={thumbnails}
      placeholder={blurhash}
      contentFit='cover'
      transition={1000}
    />
    <View style={styles.overlay}/>
    <View
      style={{
        flexDirection: 'column',
        gap: normalize(10),
        alignItems: 'flex-end',
        height: normalize(50),
        marginBottom: normalize(10)
      }}
    >
      <TouchableOpacity onPress={() => {
        addTruckFav({id: _id}).then((res) => {
          showSuccessSnackbar("Successfully added to fav")
        }).catch((err) => {
          console.log(err.response.data.data)
          showErrorSnackbar(err.response.data.data.message)
        })
      }}>
        <AntDesign
          name='heart'
          size={normalize(15)}
          color='#E51A27'
          style={styles.icon}
        />
      </TouchableOpacity>
      {/*<AntDesign*/}
      {/*  name='sharealt'*/}
      {/*  size={normalize(15)}*/}
      {/*  color='black'*/}
      {/*  style={styles.icon}*/}
      {/*/>*/}
      {/*<Feather*/}
      {/*  name='more-vertical'*/}
      {/*  size={normalize(15)}*/}
      {/*  color='transparent'*/}
      {/*  style={styles.icon}*/}
      {/*/>*/}
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1, flexDirection: 'column', gap: normalize(5),
        }}
      >
        <Text
          style={{
            color: '#fff', fontWeight: '900', fontSize: normalize(13),
          }}
        >
          {name || "No Name"}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              color: '#fff', textTransform: 'capitalize'
            }}
          >
            {category}{'   '}
          </Text>
          <Text
            style={{
              color: '#fff',
            }}
          >
            (Starting In {startTime})
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1, flexDirection: 'column', gap: normalize(5), alignItems: 'flex-end',
        }}
      >
        <View
          style={{
            flexDirection: 'row', alignItems: 'center', gap: normalize(5),
          }}
        >
          <AntDesign name='star' size={normalize(15)} color='#E51A27'/>
          <Text
            style={{
              color: '#E51A27', fontWeight: '900',
            }}
          >
            {rating || "0"}
          </Text>
          <Text
            style={{
              color: '#fff',
            }}
          >
            ratings
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row', gap: normalize(5),
          }}
        >
          <Entypo name='location' size={normalize(15)} color='#E51A27'/>
          <Text
            style={{
              color: '#fff',
            }}
          >
            {away} km away
          </Text>
        </View>
      </View>
    </View>
  </View>);
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
  }, icon: {
    padding: 10, backgroundColor: 'white', borderRadius: 100,
  }, overlay: {
    ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change the opacity value as needed
  },
});
