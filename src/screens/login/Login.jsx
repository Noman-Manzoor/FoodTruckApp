import {
  Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ToastAndroid,
} from 'react-native';
import api from '../../api';
import {loginSocial, login} from '../../api/auth';
import main from '../../style/main';
import React, {useState, useEffect} from 'react';
import LoginTopBar from '../../components/LoginTopBar';
import Input from '../../components/Input';
import email from '../../../assets/email.png';
import password from '../../../assets/password.png';
import google from '../../../assets/google.png';
import facebook from '../../../assets/facebook.png';
import {Ionicons} from '@expo/vector-icons';
import {normalize} from '../../style/responsive';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
import {LoginManager} from 'react-native-fbsdk-next';
import {app} from '../../../firebase.config';
import {
  GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithCredential,
} from 'firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {storeValue} from '../../utils/storage';
import {keys} from '../../utils/storageKey';
import {showSuccessSnackbar, showErrorSnackbar} from '../../utils/Toaster';

const Login = ({navigation}) => {
  GoogleSignin.configure({
    webClientId: '144255349472-pecce1v2fme15ekovqcel90jjncdtckc.apps.googleusercontent.com',
  });
  
  const [credentials, setCredentials] = useState({
    email: '', password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const setText = (key, value) => {
    setCredentials((prev) => ({
      ...prev, [key]: value,
    }));
  };
  
  const loginFromSocial = (userSignIn, token) => {
    
    console.log("//////////////////////", userSignIn.user.uid)
    return loginSocial({
      email: userSignIn.user.email,
      token,
      provider: "google",
      firstName: userSignIn.user.displayName,
      contactNo: userSignIn.user.phoneNumber,
      avatar: userSignIn.user.photoURL,
      uid: userSignIn.user.uid,
    }).then(async (res) => {
        await storeValue(res.data.data.accessToken, keys.TOKEN)
        navigation.navigate("home")
        // showSuccessSnackbar('Login successfully!');
      })
      .catch(e => {
        // console.log(e.response)
        ToastAndroid.show(`${e.response.data.message}`, ToastAndroid.SHORT);
      });
  }
  
  
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo;
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const auth = getAuth(app);
      const userSignIn = await signInWithCredential(auth, googleCredential);
      console.log('Login successful')
      return loginFromSocial(userSignIn, idToken)
      
    } catch (error) {
      console.error(error);
      if (typeof error === 'object' && error?.hasOwnProperty('code')) {
        // Narrow down the type to the expected error type
        const signInError = {code: string};
        
        if (signInError.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (signInError.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (signInError.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
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
      const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
      const auth = getAuth(app);
      const response = await signInWithCredential(auth, facebookCredential);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (<SafeAreaView style={[main.container, styles.container]}>
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
      left={<Image
        source={email}
        style={{
          width: normalize(18), height: normalize(18),
        }}
        resizeMode='contain'
      />}
    />
    <Input
      label={'Password'}
      text={credentials.password}
      setText={(e) => {
        setText('password', e);
      }}
      left={<Image
        source={password}
        style={{
          width: normalize(18), height: normalize(18),
        }}
        resizeMode='contain'
      />}
      right={<TouchableOpacity
        onPress={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? (<Ionicons
          name='ios-eye-off-outline'
          size={normalize(18)}
          color='#E51A27'
        />) : (<Ionicons
          name='eye-outline'
          size={normalize(18)}
          color='#E51A27'
        />)}
      </TouchableOpacity>}
    />
    <TouchableOpacity
      onPress={() => {
      }}
    >
      <Text style={styles.forgetPassword}>Forget password?</Text>
    </TouchableOpacity>
    <Button
      btnText={'Login'}
      isLoading={loading}
      
      onPress={async () => {
        try {
          setLoading(true);
          const response = await login(credentials.email, credentials.password).catch(e => {
            console.log(e.response.data.data.message)
            showErrorSnackbar(e.response.data.data.message)
            setLoading(false)
          })
          if (response) {
            showSuccessSnackbar("Successfully Login");
            await storeValue(response.data.data.accessToken, keys.TOKEN)
            const user = response.data.data.user
            await storeValue(user.firstName, keys.name)
            console.log(user)
            const isDriver = user.hasOwnProperty("driver")
            if (isDriver) {
              console.log("///////////////// Driver //////////////////")
              navigation.navigate("driver")
            } else {
              console.log("//////////////////// USER ////////////////////////")
              navigation.navigate("home", {
                user: user
              })
            }
            setLoading(false);
          }
        } catch (e) {
          console.error(e)
          setLoading(false);
        }
      }}
    />
    <Text
      style={{
        textAlign: 'center', fontWeight: 'bold', fontSize: normalize(12),
      }}
    >
      Don’t have an account yet?{'  '}
      <Text
        style={{
          color: '#039BE5', fontWeight: 'bold', fontSize: normalize(12),
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
        textAlign: 'center', fontWeight: 'bold', fontSize: normalize(14),
      }}
    >
      Or
    </Text>
    <SocialButton
      event={onGoogleButtonPress}
      title={'Continue With Google'}
      left={<Image
        source={google}
        style={{
          width: normalize(20), height: normalize(20),
        }}
        resizeMode='contain'
      />}
    />
    <SocialButton
      event={signInWithFB}
      title={'Continue With Facebook'}
      left={<Image
        source={facebook}
        style={{
          width: normalize(20), height: normalize(20),
        }}
        resizeMode='contain'
      />}
    />
  </SafeAreaView>);
};

export default Login;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  }, forgetPassword: {
    fontSize: normalize(14), color: '#E51A27', fontWeight: '500', textAlign: 'right',
  },
});
