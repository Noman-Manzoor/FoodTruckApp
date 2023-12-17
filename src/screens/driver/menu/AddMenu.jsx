import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import main from '../../../style/main';
import { normalize } from '../../../style/responsive';
import Image from '../../../components/Image';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const AddMenu = ({ navigation }) => {
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
        Add Menu
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
      <Input label={'Category'} />
      <Input label={'Price'} />
      <Input label={'Stock'} />

      <Button
        btnText={'Submit'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AddMenu;

const styles = StyleSheet.create({});
