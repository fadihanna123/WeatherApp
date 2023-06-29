import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dispatch } from 'redux';
import { getCurrentLocation } from '../functions';
import { useAppDispatch, useAppSelector } from '../redux/app';
import { getCurrentDec } from '../redux/reducers';

// Components
import CurrentLocation from '../components/CurrentLocation';
import SearchBox from '../components/SearchBox';

const Layout: React.FC = () => {
  const currentDec = useAppSelector(getCurrentDec);
  const Tab = createBottomTabNavigator();
  const dispatch: Dispatch<any> = useAppDispatch();
  const scheme = useColorScheme();

  useEffect(() => {
    getCurrentLocation(dispatch, true);
  }, []);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName: string = '';

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
