import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { normalize } from '../../../../../style/responsive';
import main from '../../../../../style/main';
import { AntDesign } from '@expo/vector-icons';

const FeedbackCard = ({ feedback, rate, name, timeAgo, event = () => {} }) => {
  return (
    <View
      style={[
        main.shadow,
        {
          width: normalize(200),
          backgroundColor: '#fff',
          padding: normalize(10),
          margin: normalize(10),
          marginLeft: normalize(5),
          borderRadius: normalize(10),
          gap: normalize(5),
        },
      ]}
    >
      <Text>{feedback}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: normalize(10),
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <AntDesign name='star' size={normalize(20)} color='#E51A27' />
          <Text>{rate}</Text>
        </View>
        <Text>{name}</Text>
        <Text>{timeAgo}</Text>
      </View>
    </View>
  );
};

export default FeedbackCard;

const styles = StyleSheet.create({});
