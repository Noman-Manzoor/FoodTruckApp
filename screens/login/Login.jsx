import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import main from '../../style/main';
import React, { useState, useEffect } from 'react';
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
import { LoginManager } from 'react-native-fbsdk-next';
import { app } from '../../firebase.config';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {
  GoogleSignin.configure({
    webClientId:
      '144255349472-pecce1v2fme15ekovqcel90jjncdtckc.apps.googleusercontent.com',
  });

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

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // const onGoogleButtonPress = async () => {
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   const user_sign_in = auth().signInWithCredential(googleCredential);
  //   user_sign_in
  //     .then((user) => {
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = userInfo;
      console.log(idToken);
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const auth = getAuth(app);
      const userSignIn = await signInWithCredential(auth, googleCredential);
      console.log(userSignIn);
      console.log('Login successful');
      navigation.navigate('home');
    } catch (error) {
      console.error(error);
      if (typeof error === 'object' && error?.hasOwnProperty('code')) {
        // Narrow down the type to the expected error type
        const signInError = { code: string };

        if (signInError.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (signInError.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (
          signInError.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
        ) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }
  };

  const signInWithFB = async () => {
    try {
      await LoginManager.logInWithPermissions(['public_profile', 'email']);
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        return;
      }
      const facebookCredential = FacebookAuthProvider.credential(
        data.accessToken
      );
      const auth = getAuth(app);
      const response = await signInWithCredential(auth, facebookCredential);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={[main.container, styles.container]}>
      <LoginTopBar
        topMessage='Welcome Back'
        hintMessage='Signing to your Account'
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
              width: normalize(18),
              height: normalize(18),
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
              width: normalize(18),
              height: normalize(18),
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
                size={normalize(18)}
                color='#E51A27'
              />
            ) : (
              <Ionicons
                name='eye-outline'
                size={normalize(18)}
                color='#E51A27'
              />
            )}
          </TouchableOpacity>
        }
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('driver');
        }}
      >
        <Text style={styles.forgetPassword}>Forget password?</Text>
      </TouchableOpacity>
      <Button
        btnText={'Login'}
        isLoading={loading}
        onPress={() => {
          navigation.navigate('home');
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: normalize(12),
        }}
      >
        Don’t have an account yet?{'  '}
        <Text
          style={{
            color: '#039BE5',
            fontWeight: 'bold',
            fontSize: normalize(12),
          }}
          onPress={() => {
            navigation.navigate('registration');
          }}
        >
          Sign up here!
        </Text>
      </Text>
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
        event={onGoogleButtonPress}
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
        event={signInWithFB}
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
  );
};

export default Login;

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
