import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../../../../style/responsive';
import main from '../../../../style/main';
import {TouchableRipple} from 'react-native-paper';
import {Image} from 'expo-image';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const FoodCard = ({
                    thumbnails: img, name: title, category: tag, startTime: startIn, rating: rate, away: awayKm, event
                  }) => {
  const styles = StyleSheet.create({
    foodCardContainer: {
      flexDirection: 'column', gap: normalize(5),
      
      margin: 10, borderRadius: normalize(30),
    }, foodCardIcon: {
      width: '100%', height: '100%', margin: 0, backgroundColor: 'black', contentFit: 'cover', objectFit: 'cover',
    }, foodCardTitle: {
      color: '#929292', fontWeight: '500', fontSize: normalize(12),
    },
  });
  
  return (<TouchableRipple onPress={() => event()}>
    <View style={styles.foodCardContainer}>
      <View
        style={[main.shadow, {
          width: '100%', height: normalize(120), borderRadius: 15, overflow: 'hidden',
        },]}
      >
        <Image
          style={styles.foodCardIcon}
          source={img}
          placeholder={blurhash}
          contentFit='cover'
          transition={1000}
        />
      </View>
      <View
        style={{
          marginTop: normalize(10), flexDirection: 'row', justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: normalize(14), fontWeight: '500',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: normalize(14), fontWeight: '900', color: '#E51A27',
          }}
        >
          ({rate})
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row', alignItems: 'center',
          }}
        >
          <Text style={styles.foodCardTitle}>{tag}: </Text>
          <Text
            style={{
              fontSize: normalize(11), color: '#2F2D2D', fontWeight: '500',
            }}
          >
            (Starting {startIn})
          </Text>
        </View>
        <Text
          style={{
            fontSize: normalize(11), color: '#2F2D2D', fontWeight: '500',
          }}
        >
          {awayKm} km away
        </Text>
      </View>
    </View>
  </TouchableRipple>);
};

export default FoodCard;
