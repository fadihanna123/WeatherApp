import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import CurrentLocation from '../components/CurrentLocation';
import SearchBox from '../components/SearchBox';
import { getCurrentLocation } from '../functions';
import { CurrentDecReducerTypes } from '../models';

const Layout: React.FC = () => {
  const currentDec = useSelector(
    (state: CurrentDecReducerTypes) => state.currentDecReducer
  );

  const Tab = createBottomTabNavigator();

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    getCurrentLocation(dispatch, true);
  }, []);

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
                  ? 'partly-sunny'
                  : currentDec === 'Clear'
                  ? 'partly-sunny'
                  : currentDec === 'Heavy snow'
                  ? 'ios-snow'
                  : currentDec === 'Freezing Unknown Precipitation'
                  ? 'partly-sunny'
                  : currentDec === 'Cloudy'
                  ? 'partly-sunny'
                  : currentDec === 'Mist'
                  ? 'partly-sunny'
                  : currentDec === 'Light rain shower'
                  ? 'ios-rainy'
                  : 'partly-sunny';
            } else if (route.name === 'Search Location') {
              iconName = focused ? 'ios-location' : 'location-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Current Location' component={CurrentLocation} />
        <Tab.Screen name='Search Location' component={SearchBox} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
