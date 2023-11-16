import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { normalize } from '../style/responsive';
import Dashboard from '../screens/dashboard/home';
import Find from '../screens/dashboard/Find';
import Orders from '../screens/dashboard/orders';
import Featured from '../screens/dashboard/featured';
import More from '../screens/dashboard/More';
import { Image, TouchableOpacity, View, Text } from 'react-native';

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

        let img = require('../assets/home.png');
        switch (label) {
          case 'Home':
            img = require('../assets/home.png');
            break;
          case 'Find':
            img = require('../assets/search.png');
            break;
          case 'Orders':
            img = require('../assets/orders.png');
            break;
          case 'Featured':
            img = require('../assets/featured.png');
            break;
          case 'More':
            img = require('../assets/more.png');
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

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name='Home' component={Dashboard} />
      <Tab.Screen
        name='Find'
        component={Find}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/search.png')}
              style={{
                height: normalize(20),
                width: normalize(20),
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Orders'
        component={Orders}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/orders.png')}
              style={{
                height: normalize(20),
                width: normalize(20),
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Featured'
        component={Featured}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/featured.png')}
              style={{
                height: normalize(20),
                width: normalize(20),
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='More'
        component={More}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/more.png')}
              style={{
                height: normalize(20),
                width: normalize(20),
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
