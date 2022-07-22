import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import CurrentLocation from '../components/CurrentLocation';
import SearchBox from '../components/SearchBox';
import { CurrentDecReducerTypes } from '../models';

const Layout: React.FC = () => {
  const currentDec = useSelector(
    (state: CurrentDecReducerTypes) => state.currentDecReducer
  );

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName;

            if (route.name === 'Current Location') {
              iconName =
                currentDec === 'Sunny'
                  ? 'sunny'
                  : currentDec === 'Partly cloudy'
                  ? 'ios-partly-sunny'
                  : currentDec === 'Rain'
                  ? 'ios-rainy'
                  : currentDec === 'Light snow'
                  ? 'ios-snow'
                  : currentDec === 'Overcast'
                  ? 'ios-weather'
                  : currentDec === 'Clear'
                  ? 'ios-weather'
                  : currentDec === 'Heavy snow'
                  ? 'ios-snow'
                  : currentDec === 'Freezing Unknown Precipitation'
                  ? 'ios-weather'
                  : currentDec === 'Cloudy'
                  ? 'ios-weather'
                  : currentDec === 'Mist'
                  ? 'ios-weather'
                  : currentDec === 'Light rain shower'
                  ? 'ios-rainy'
                  : 'partly-sunny';
            } else if (route.name === 'Search Location') {
              iconName = focused
                ? 'ios-location'
                : 'location-outline';
            }

            // You can return any component that you like here!
            return (
              <Ionicons name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Current Location'
          component={CurrentLocation}
        />
        <Tab.Screen name='Search Location' component={SearchBox} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
