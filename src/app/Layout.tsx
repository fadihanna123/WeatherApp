import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dispatch } from 'redux';
import { getCurrentLocation } from '@functions/getCurrentLocation';
import { useAppDispatch, useAppSelector } from '@redux/app';
import { getCurrentDec } from '@redux/reducers';

// Components
import CurrentLocation from '@components/CurrentLocation';
import SearchBox from '@components/SearchBox';
import About from '@components/About';

const Layout: React.FC = () => {
  const currentDec = useAppSelector(getCurrentDec);
  const Tab = createBottomTabNavigator();
  const dispatch: Dispatch = useAppDispatch();
  const scheme = useColorScheme();

  useEffect(() => {
    getCurrentLocation(dispatch, true);
  }, []);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = '';

            if (route.name === 'Current Location') {
              iconName =
                currentDec === 'Sunny'
                  ? 'sunny'
                  : currentDec === 'Partly cloudy'
                    ? 'partly-sunny'
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
              iconName = 'location-outline';
            } else if (route.name === 'About') {
              iconName = 'information';
            }

            return (
              <Ionicons name={iconName as any} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Current Location' component={CurrentLocation} />
        <Tab.Screen name='Search Location' component={SearchBox} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
