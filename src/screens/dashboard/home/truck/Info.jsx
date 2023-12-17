import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { normalize } from '../../../../style/responsive';
import GalleryImage from './components/GalleryImage';
import FeedbackCard from './components/FeedbackCard';
const Info = () => {
  const [feedback, setFeedback] = useState([
    {
      feedback:
        'Tasty Tacos on Wheels is a hidden gem when it comes to tamales. Their tamales are incredibly flavorful and moist, with a variety of fillings to choose from.',
      rate: '4.3',
      name: 'John Doe',
      timeAgo: '1 week ago',
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          gap: normalize(10),
        }}
      >
        <Text style={styles.title}>Description</Text>
        <Text
          style={{
            color: '#929292',
          }}
        >
          "Welcome to Tasty Tacos on Wheels, where flavor meets fun on wheels!
          We're your go-to destination for mouthwatering tacos that are bursting
          with authentic Mexican flavors. From savory street-style tacos to
          unique gourmet creations, our taco truck is here to satisfy your
          cravings with every bite.
        </Text>
        <Text style={styles.title}>Photos</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: normalize(10),
            flexWrap: 'wrap',
          }}
        >
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>User’s Feedback</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#E51A27',
                fontWeight: '900',
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={feedback}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
          }}
          horizontal
          renderItem={({ item, index }) => <FeedbackCard {...item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: normalize(14),
  },
});
