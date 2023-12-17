import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import {normalize} from '../../../style/responsive';
import Image from '../../../components/Image';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {showSuccessSnackbar} from '../../../utils/Toaster';
import {uploadImage} from "../../../utils/img";

const Truck = ({navigation}) => {
  
  const [state, setState] = useState({
    name: "",
    thumbnail: "",
    category: "",
    startTime: new Date().toString(),
    endTime: new Date().toString(),
    description: "",
    photos: []
  })
  
  const setValue = (key, value) => {
    setState((prevState) => ({
      ...prevState, [key]: value
    }))
  }
  
  return (<View
    style={[main.container, {
      gap: normalize(15),
    },]}
  >
    <Text
      style={{
        fontSize: normalize(16), textAlign: 'center', fontWeight: '900',
      }}
    >
      Truck
    </Text>
    
    <ScrollView>
      <View style={{
        flexDirection: 'column', gap: normalize(15),
      }}>
        <Image
          isPicker={true}
          style={{
            width: normalize(100),
            height: normalize(100),
            borderRadius: 500,
            overflow: 'hidden',
            marginTop: normalize(15),
            alignSelf: 'center',
          }}
        />
        
        <Input label={'Title'} text={state.name} setText={(e) => setValue("name", e)} required={true}/>
        <Input label={'Category'} text={state.category}
               setText={(e) => setValue("category", e.toString().toLowerCase())}
               required={true}/>
        <Input label={'Start At'} isDateTime={true} text={state.startTime} setText={(e) => setValue("startTime", e)}
               required={true}/>
        <Input label={'End At'} isDateTime={true} text={state.endTime} setText={(e) => setValue("endTime", e)}
               required={true}/>
        
        <Input label={'Description'} text={state.description} setText={(e) => setValue("description", e)}
               required={true}
               multiline={true} numberOfLines={4}/>
        <View style={{
          display: 'flex', flexDirection: 'row', gap: normalize(10)
        }}>
          {state.photos.map((item, index) => {
            return <Image style={[styles.img, {
              padding: 0
            }]} img={item}/>
          })}
          <Image isPicker={true} showPreview={false} style={styles.img} img={require("../../../../assets/add.png")}
                 cb={async (results) => {
                   try {
                     console.log(results.assets[0].uri)
                     const response = await uploadImage(results.assets[0].uri)
                     setState((prevState) => ({
                       ...prevState, photos: [...prevState.photos, response.data[0]]
                     }))
                   } catch (e) {
                     console.error(e)
                   }
                 }}/>
        </View>
        
        <Button
          btnText={'Submit'}
          onPress={() => {
            showSuccessSnackbar("Successfully created Truck")
          }}
        
        />
      </View>
    </ScrollView>
  </View>);
};

export default Truck;

const styles = StyleSheet.create({
  img: {
    width: normalize(40),
    height: normalize(40),
    backgroundColor: "#ededed",
    padding: normalize(10),
    borderRadius: normalize(5),
    borderColor: "#cecece",
    borderWidth: 1
  }
});
