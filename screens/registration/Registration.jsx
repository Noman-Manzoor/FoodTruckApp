import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import main from '../../style/main';
import React, { useState } from 'react';
import LoginTopBar from '../../components/LoginTopBar';
import Input from '../../components/Input';
import email from '../../assets/email.png';
import password from '../../assets/password.png';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import { Ionicons } from '@expo/vector-icons';
import { normalize } from '../../style/responsive';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';

const Registration = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const setText = (key, value) => {
    setCredentials({
      [key]: value,
    });
  };
  return (
    <ScrollView>
      <SafeAreaView style={[main.container, styles.container]}>
        <LoginTopBar
          topMessage='Welcome to Taco Truck'
          hintMessage='Sign up for your Account'
        />
        <Input
          label={'Email'}
          text={credentials.email}
          setText={(e) => {
            setText('email', e);
          }}
          left={
            <Image
              source={email}
              style={{
                width: normalize(20),
                height: normalize(20),
              }}
              resizeMode='contain'
            />
          }
        />
        <Input
          label={'Password'}
          text={credentials.password}
          setText={(e) => {
            setText('password', e);
          }}
          left={
            <Image
              source={password}
              style={{
                width: normalize(20),
                height: normalize(20),
              }}
              resizeMode='contain'
            />
          }
          right={
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <Ionicons
                  name='ios-eye-off-outline'
                  size={normalize(20)}
                  color='#E51A27'
                />
              ) : (
                <Ionicons
                  name='eye-outline'
                  size={normalize(20)}
                  color='#E51A27'
                />
              )}
            </TouchableOpacity>
          }
        />
        <Input
          label={'Confirm Password'}
          text={credentials.password}
          setText={(e) => {
            setText('password', e);
          }}
          left={
            <Image
              source={password}
              style={{
                width: normalize(20),
                height: normalize(20),
              }}
              resizeMode='contain'
            />
          }
          right={
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <Ionicons
                  name='ios-eye-off-outline'
                  size={normalize(20)}
                  color='#E51A27'
                />
              ) : (
                <Ionicons
                  name='eye-outline'
                  size={normalize(20)}
                  color='#E51A27'
                />
              )}
            </TouchableOpacity>
          }
        />
        <Button
          btnText={'Sign Up'}
          isLoading={loading}
          onPress={() => {
            navigation.navigate('login');
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: normalize(14),
          }}
        >
          Or
        </Text>
        <SocialButton
          title={'Continue With Google'}
          left={
            <Image
              source={google}
              style={{
                width: normalize(20),
                height: normalize(20),
              }}
              resizeMode='contain'
            />
          }
        />
        <SocialButton
          title={'Continue With Facebook'}
          left={
            <Image
              source={facebook}
              style={{
                width: normalize(20),
                height: normalize(20),
              }}
              resizeMode='contain'
            />
          }
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  forgetPassword: {
    fontSize: normalize(14),
    color: '#E51A27',
    fontWeight: '500',
    textAlign: 'right',
  },
});
