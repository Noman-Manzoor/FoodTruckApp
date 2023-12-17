import {
  Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,
}                                                 from 'react-native';
import { registration }                           from '../../api/auth';
import main                                       from '../../style/main';
import React, { useState }                        from 'react';
import LoginTopBar                                from '../../components/LoginTopBar';
import Input                                      from '../../components/Input';
import email                                      from '../../../assets/email.png';
import password                                   from '../../../assets/password.png';
import google                                     from '../../../assets/google.png';
import facebook                                   from '../../../assets/facebook.png';
import { AntDesign, Ionicons }                    from '@expo/vector-icons';
import { normalize }                              from '../../style/responsive';
import Button                                     from '../../components/Button';
import SocialButton                               from '../../components/SocialButton';
import { Entypo }                                 from '@expo/vector-icons';
import { showErrorSnackbar, showSuccessSnackbar } from '../../utils/Toaster';

const Registration = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    userType: 'user',
    contactNo: '',
    address: '',
    medium: 'email',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const setText = (key, value) => {
    setCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (<ScrollView>
    <SafeAreaView style={ [main.container, styles.container] }>
      <LoginTopBar
        topMessage='Welcome to Taco Truck'
        hintMessage='Sign up for your Account'
      />
      <View style={ {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: normalize(15),
        alignItems: 'center'
      } }>
        <TouchableOpacity style={ [styles.toggleBtn, {
          backgroundColor: credentials.userType === "user" ? "#E51A27" : "#fff",
          borderColor: credentials.userType === "user" ? "#E51A27" : '#C6C6C6',
        }] } onPress={ () => setText("userType", "user") }>
          <Text style={ {
            color: credentials.userType === "user" ? "#fff" : "#000"
          } }>User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ [styles.toggleBtn, {
          backgroundColor: credentials.userType === "driver" ? "#E51A27" : "#fff",
          borderColor: credentials.userType === "driver" ? "#E51A27" : '#C6C6C6',
        }] } onPress={ () => setText("userType", "driver") }>
          <Text style={ {
            color: credentials.userType === "driver" ? "#fff" : "#000"
          } }>Diver</Text>
        </TouchableOpacity>
      </View>
      <Input
        label={ 'First Name' }
        text={ credentials.firstName }
        setText={ (e) => {
          setText('firstName', e);
        } }
        left={ <AntDesign name='user' size={ normalize(20) } color='#E51A27'/> }
      />
      <Input
        label={ 'Last Name' }
        text={ credentials.lastName }
        setText={ (e) => {
          setText('lastName', e);
        } }
        left={ <AntDesign name='user' size={ normalize(20) } color='#E51A27'/> }
      />
      <Input
        label={ 'User Name' }
        text={ credentials.userName }
        setText={ (e) => {
          setText('userName', e);
        } }
        left={ <AntDesign name='user' size={ normalize(20) } color='#E51A27'/> }
      />
      <Input
        label={ 'Email' }
        text={ credentials.email }
        setText={ (e) => {
          setText('email', e);
        } }
        left={ <Image
          source={ email }
          style={ {
            width: normalize(20), height: normalize(20),
          } }
          resizeMode='contain'
        /> }
      />
      <Input
        label={ 'Address' }
        text={ credentials.address }
        setText={ (e) => {
          setText('address', e);
        } }
        left={ <Entypo name='address' size={ normalize(20) } color='#E51A27'/> }
      />
      <Input
        label={ 'Phone No' }
        text={ credentials.contactNo }
        setText={ (e) => {
          setText('contactNo', e);
        } }
        left={ <Entypo name='phone' size={ normalize(20) } color='#E51A27'/> }
      />
      <Input
        label={ 'Password' }
        text={ credentials.password }
        setText={ (e) => {
          setText('password', e);
        } }
        left={ <Image
          source={ password }
          style={ {
            width: normalize(20), height: normalize(20),
          } }
          resizeMode='contain'
        /> }
        right={ <TouchableOpacity
          onPress={ () => {
            setShowPassword(!showPassword);
          } }
        >
          { showPassword ? (<Ionicons
            name='ios-eye-off-outline'
            size={ normalize(20) }
            color='#E51A27'
          />) : (<Ionicons
            name='eye-outline'
            size={ normalize(20) }
            color='#E51A27'
          />) }
        </TouchableOpacity> }
      />
      <Input
        label={ 'Confirm Password' }
        text={ credentials.password }
        setText={ (e) => {
          setText('password', e);
        } }
        left={ <Image
          source={ password }
          style={ {
            width: normalize(20), height: normalize(20),
          } }
          resizeMode='contain'
        /> }
        right={ <TouchableOpacity
          onPress={ () => {
            setShowPassword(!showPassword);
          } }
        >
          { showPassword ? (<Ionicons
            name='ios-eye-off-outline'
            size={ normalize(20) }
            color='#E51A27'
          />) : (<Ionicons
            name='eye-outline'
            size={ normalize(20) }
            color='#E51A27'
          />) }
        </TouchableOpacity> }
      />
      <Button
        btnText={ 'Sign Up' }
        isLoading={ loading }
        onPress={ () => {
          setLoading(true)
          if (Object.values(credentials).every(i => i)) {
            registration(credentials).then(res => {
              showSuccessSnackbar("Successfully registered")
              navigation.navigate('login');
              setLoading(false)
            }).catch(e => {
              console.error(e);
              showErrorSnackbar(e.response.data.data.message)
            })
            setLoading(false)
          }
          else {
            setLoading(false)
            showErrorSnackbar("All fields are required")
          }
        } }
      />
      <Text
        style={ {
          textAlign: 'center', fontWeight: 'bold', fontSize: normalize(14),
        } }
      >
        Or
      </Text>
      <SocialButton
        title={ 'Continue With Google' }
        left={ <Image
          source={ google }
          style={ {
            width: normalize(20), height: normalize(20),
          } }
          resizeMode='contain'
        /> }
      />
      <SocialButton
        title={ 'Continue With Facebook' }
        left={ <Image
          source={ facebook }
          style={ {
            width: normalize(20), height: normalize(20),
          } }
          resizeMode='contain'
        /> }
      />
    </SafeAreaView>
  </ScrollView>);
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  }, forgetPassword: {
    fontSize: normalize(14), color: '#E51A27', fontWeight: '500', textAlign: 'right',
  }, toggleBtn: {
    padding: normalize(10),
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
