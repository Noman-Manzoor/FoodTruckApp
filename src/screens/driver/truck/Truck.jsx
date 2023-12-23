import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import main from '../../../style/main';
import {normalize} from '../../../style/responsive';
import Image from '../../../components/Image';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {showErrorSnackbar, showSuccessSnackbar} from '../../../utils/Toaster';
import {uploadImage} from "../../../utils/img";
import {getMyTruck, updateTruck} from "../../../api/truck";
import {Entypo} from '@expo/vector-icons';
import useLocation from "../../../customHook/useLocation";
import {ActivityIndicator} from "react-native-paper";

const Truck = ({navigation}) => {
  const {placeName, location} = useLocation()
  const [state, setState] = useState({
    name: "",
    thumbnails: "",
    category: "",
    startTime: new Date().toString(),
    endTime: new Date().toString(),
    description: "",
    photos: [],
    location: {
      longitude: 0,
      latitude: 0,
      other: {
        address: ""
      }
    }
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [locationLoading, setLocationLoading] = useState(false)
  
  const setValue = (key, value) => {
    if (key === "location") {
      setState((prevState) => ({
        ...prevState,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          other: {
            address: value,
          }
        }
      }))
    } else {
      setState((prevState) => ({
        ...prevState, [key]: value
      }))
    }
  }
  
  useEffect(() => {
    (async () => {
      const myData = await getMyTruck()
      if (myData.startTime) {
        setState((prevState) => {
          return myData.data.data
        })
      }
    })()
  }, []);
  
  useEffect(() => {
    setLocationLoading(true)
    if (location) {
      console.log(location)
      setLocationLoading(false)
    }
  }, [location]);
  
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
    
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        flexDirection: 'column', gap: normalize(15),
      }}>
        <Image
          isPicker={true}
          style={{
            width: '80%',
            height: normalize(100),
            borderRadius: 10,
            overflow: 'hidden',
            marginTop: normalize(15),
            alignSelf: 'center',
          }}
          img={state.thumbnails}
          cb={async (results) => {
            try {
              console.log(results.assets[0].uri)
              const response = await uploadImage(results.assets[0].uri)
              console.log(response.data[0])
              setState((prevState) => ({
                ...prevState, thumbnails: response.data[0]
              }))
            } catch (e) {
              console.error(e)
            }
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
        <Input
          label={'Address'}
          text={state?.location?.other?.address}
          isDisabled={true}
          setText={(e) => setValue("location", e)}
          required={true}
          right={
            <TouchableOpacity
              onPress={() => {
                setValue("location", placeName)
              }}
              style={[{
                backgroundColor: '#E51A27', padding: normalize(10), borderRadius: 10,
              }, main.shadow,]}
            >
              {locationLoading ? <ActivityIndicator animating={true} color={'white'}/> :
                <Entypo name="location-pin" size={24} color="white"/>}
            </TouchableOpacity>
            
          }
        />
        
        <Input label={'Description'} text={state.description} setText={(e) => setValue("description", e)}
               required={true}
               multiline={true} numberOfLines={6}/>
        <View style={{
          display: 'flex', flexDirection: 'row', gap: normalize(10)
        }}>
          {state.photos.map((item, index) => {
            console.log(item)
            return <Image
              key={index}
              style={[styles.img, {
                padding: 0
              }]}
              img={item}
            />
          })}
          <Image
            isPicker={true}
            showPreview={false}
            style={styles.img}
            img={require("../../../../assets/add.png")}
            cb={async (results) => {
              try {
                console.log(results.assets[0].uri)
                const response = await uploadImage(results.assets[0].uri)
                console.log(response.data[0])
                setState((prevState) => ({
                  ...prevState, photos: [...prevState.photos, response.data[0]]
                }))
              } catch (e) {
                console.error(e)
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
    <Button
      isLoading={isLoading}
      btnText={'Save'}
      onPress={() => {
        setIsLoading(true)
        updateTruck(state).then(async (res) => {
          showSuccessSnackbar("Successfully created Truck")
          const myData = await getMyTruck()
          setIsLoading(false)
          setState((prevState) => {
            return myData.data.data
          })
        }).catch((e) => {
          console.error(e.response.data)
          showErrorSnackbar(e.response.data.message)
        })
      }}
    />
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
