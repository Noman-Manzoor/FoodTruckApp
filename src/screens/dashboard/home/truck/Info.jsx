import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {normalize} from '../../../../style/responsive';
import GalleryImage from './components/GalleryImage';
import FeedbackCard from './components/FeedbackCard';

const Info = ({
                description,
                photos = [],
                feedbacks = []
              }) => {
  const [feedback, setFeedback] = useState([
    {
      feedback:
        'Tasty Tacos on Wheels is a hidden gem when it comes to tamales. Their tamales are incredibly flavorful and moist, with a variety of fillings to choose from.',
      rate: '4.3',
      name: 'John Doe',
      timeAgo: '1 week ago',
    },
  ]);
  
  useEffect(() => {
    if (feedback.length > 0) {
      setFeedback(feedbacks)
    }
  }, [feedback]);
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
          {description}
        </Text>
        <Text style={styles.title}>Photos</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: normalize(10),
            flexWrap: 'wrap',
          }}
        >
          {photos.map((item, index) => {
            return <GalleryImage key={index} img={item}/>
          })
          }
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
              {feedbacks.length?  "View all": "No Feedback"}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={feedbacks}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
          }}
          horizontal
          renderItem={({item, index}) => <FeedbackCard {...item} />}
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
