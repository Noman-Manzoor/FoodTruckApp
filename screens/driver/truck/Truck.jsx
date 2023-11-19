import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import main from '../../../style/main';
import { normalize } from '../../../style/responsive';
import Image from '../../../components/Image';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Truck = ({ navigation }) => {
  return (
    <View
      style={[
        main.container,
        {
          gap: normalize(15),
        },
      ]}
    >
      <Text
        style={{
          fontSize: normalize(16),
          textAlign: 'center',
          fontWeight: '900',
        }}
      >
        Truck
      </Text>
      <Image
        style={{
          width: normalize(100),
          height: normalize(100),
          borderRadius: 500,
          overflow: 'hidden',
          marginTop: normalize(15),
          alignSelf: 'center',
        }}
      />
      <Input label={'Title'} />
      <Input label={'City'} />
      <Input label={'Start Time'} />
      <Input label={'End Time'} />

      <Button
        btnText={'Submit'}
        onPress={() => {
          // navigation.navigate('home');
        }}
      />
    </View>
  );
};

export default Truck;

const styles = StyleSheet.create({});
