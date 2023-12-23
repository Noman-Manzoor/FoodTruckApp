import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import {normalize} from '../../../style/responsive';
import Image from '../../../components/Image';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {addTruckMenu, getTruckMenu, updateTruckMenu} from "../../../api/truck";
import {showSuccessSnackbar, showErrorSnackbar} from "../../../utils/Toaster";
import {uploadImage} from "../../../utils/img";

const AddMenu = ({navigation, route}) => {
  const {data} = route.params;
  
  useEffect(() => {
    if (data) {
      console.log(data)
      setState(data)
    }
  }, [data]);
  
  const [state, setState] = useState({
    img: "", title: "", category: "", price: 0, quantity: 0, noOfTimeOrdered: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  
  const setValue = (key, value) => {
    setState((prevState) => ({
      ...prevState, [key]: value
    }))
  }
  const uploadData = () => {
    setIsLoading(true)
    if (data) {
      console.log("//////////////// WORKING ////////////////")
      updateTruckMenu(data._id, state).then(res => {
        console.log(res)
        showSuccessSnackbar("Successfully added menu ")
        setIsLoading(false)
        navigation.goBack()
      }).catch(e => {
        console.error(e.response.data)
        setIsLoading(false)
        showErrorSnackbar(e.response.data.message)
      })
    } else {
      addTruckMenu(state).then((res) => {
        showSuccessSnackbar("Successfully added menu ")
        setIsLoading(false)
        navigation.goBack()
      }).catch(e => {
        console.error(e.response.data)
        setIsLoading(false)
        showErrorSnackbar(e.response.data.message)
      })
    }
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
      {data ? "Edit" : "Add"} Menu
    </Text>
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
      img={state.img}
      cb={async (results) => {
        try {
          console.log(results.assets[0].uri)
          const response = await uploadImage(results.assets[0].uri)
          console.log(response.data[0])
          setState((prevState) => ({
            ...prevState, img: response.data[0]
          }))
        } catch (e) {
          console.error(e)
        }
      }}
    />
    <Input label={'Title'} text={state.title} setText={(e) => setValue("title", e)} required={true}/>
    <Input label={'Category'} text={state.category} setText={(e) => setValue("category", e)} required={true}/>
    <Input label={'Price'} type={"decimal-pad"} text={state.price} setText={(e) => setValue("price", e)}
           required={true}/>
    <Input label={'Stock'} type={"decimal-pad"} text={state.quantity} setText={(e) => setValue("quantity", e)}
           required={true}/>
    
    <Button
      isLoading={isLoading}
      btnText={data ? "Edit" : 'Submit'}
      onPress={() => uploadData()}
    />
  </View>);
};

export default AddMenu;

const styles = StyleSheet.create({});
