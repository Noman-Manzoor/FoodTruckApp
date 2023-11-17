import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Registration from './screens/registration';
import BottomNavigation from './routes/BottomNavigation';
import 'expo-dev-client';
import Truck from './screens/dashboard/home/truck';
import MyCart from './screens/dashboard/home/myCart';
import CheckOut from './screens/dashboard/home/checkOut';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='registration' component={Registration} />
        <Stack.Screen name='home' component={BottomNavigation} />
        <Stack.Screen name='truck' component={Truck} />
        <Stack.Screen name='myCart' component={MyCart} />
        <Stack.Screen name='checkOut' component={CheckOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
