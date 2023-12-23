import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Registration from './src/screens/registration';
import BottomNavigation from './src/routes/BottomNavigation';
import 'expo-dev-client';
import Truck from './src/screens/dashboard/home/truck';
import MyCart from './src/screens/dashboard/home/myCart';
import CheckOut from './src/screens/dashboard/home/checkOut';
import BottomNavigationDriver from './src/routes/BottomNavigationDriver';
import AddMenu from './src/screens/driver/menu/AddMenu';
import {Logs} from "expo";

const Stack = createNativeStackNavigator();
Logs.disableExpoCliLogging()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='registration' component={Registration}/>
        <Stack.Screen name='home' component={BottomNavigation}/>
        <Stack.Screen name='truck' component={Truck}/>
        <Stack.Screen name='myCart' component={MyCart}/>
        <Stack.Screen name='checkOut' component={CheckOut}/>
        <Stack.Screen name='driver' component={BottomNavigationDriver}/>
        <Stack.Screen name='addMenu' component={AddMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
