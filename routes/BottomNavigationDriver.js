import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { normalize } from '../style/responsive';
import Dashboard from '../screens/dashboard/home';
import Find from '../screens/dashboard/Find';
import Orders from '../screens/dashboard/orders';
import Featured from '../screens/dashboard/featured';
import More from '../screens/dashboard/More';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import Truck from '../screens/driver/truck';
import Order from '../screens/driver/order';
import Menu from '../screens/driver/menu';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let img = require('../assets/user.png');
        switch (label) {
          case 'Truck':
            img = require('../assets/taco-truck.png');
            break;
          case 'Orders':
            img = require('../assets/orders.png');
            break;
          case 'Menu':
            img = require('../assets/menu.png');
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              gap: normalize(5),
              padding: normalize(10),
            }}
          >
            <Image
              source={img}
              style={{
                height: normalize(18),
                width: normalize(18),
                resizeMode: 'contain',
                tintColor: isFocused ? '#E51A27' : '#929292',
              }}
            />
            <Text
              style={{
                color: isFocused ? '#E51A27' : '#929292',
                fontSize: normalize(12),
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomNavigationDriver = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Profile'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name='Truck' component={Truck} />
      <Tab.Screen name='Orders' component={Order} />
      <Tab.Screen name='Menu' component={Menu} />
    </Tab.Navigator>
  );
};

export default BottomNavigationDriver;
