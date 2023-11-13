import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBitA0k165UbyKVBa5am3mlj4F6-WX3E_w',
  authDomain: 'foodtruckapp-b7ebc.firebaseapp.com',
  projectId: 'foodtruckapp-b7ebc',
  storageBucket: 'foodtruckapp-b7ebc.appspot.com',
  messagingSenderId: '144255349472',
  appId: '1:144255349472:web:bb703ec315eb888a601685',
  measurementId: 'G-QLYFV26RE1',
};

const app = initializeApp(firebaseConfig);

export default {
  app,
};
