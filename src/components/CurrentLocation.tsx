import React, { useEffect } from 'react';
import { Image, Text, useColorScheme, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { getCurrentLocation } from '../functions';
import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getCurrentDec,
  getCurrentLoading,
  getCurrentLoc,
  getCurrentTemp,
  getViewCurrent,
} from '../redux/reducers';
import { weatherDataStyles } from '../styles';

const CurrentLocation: React.FC = () => {
  const viewCurrent = useAppSelector(getViewCurrent);
  const currentLoading = useAppSelector(getCurrentLoading);
  const currentDec = useAppSelector(getCurrentDec);
  const CurrentLoc = useAppSelector(getCurrentLoc);
  const currentTemp = useAppSelector(getCurrentTemp);
  const dispatch = useAppDispatch();
  const scheme = useColorScheme();

  useEffect(() => {
    getCurrentLocation(dispatch, viewCurrent);
  }, []);

  return (
    <View>
      <Spinner
        visible={currentLoading}
        textContent='Loading...'
        textStyle={{ color: '#fff' }}
        animation='fade'
      />
      <View style={weatherDataStyles.contentContainer}>
        <Text style={weatherDataStyles.cityname}>
          {'\n'}
          {!currentLoading ? CurrentLoc : ''} {'\n'}
        </Text>
        <Image
          style={weatherDataStyles.tempImg}
          source={
            currentDec === 'Sunny'
              ? require('../assets/sunny.png')
              : currentDec === 'Partly cloudy'
                ? require('../assets/partlycloudy.png')
                : currentDec === 'Rain'
                  ? require('../assets/rain.png')
                  : currentDec === 'Light snow'
                    ? require('../assets/snowlight.png')
                    : currentDec === 'Overcast'
                      ? require('../assets/overcast.png')
                      : currentDec === 'Clear'
                        ? require('../assets/clear.png')
                        : currentDec === 'Heavy snow'
                          ? require('../assets/heavysnow.png')
                          : currentDec === 'Freezing Unknown Precipitation'
                            ? require('../assets/freezingrain.png')
                            : currentDec === 'Cloudy'
                              ? require('../assets/cloudy.png')
                              : currentDec === 'Mist'
                                ? require('../assets/mist.png')
                                : currentDec === 'Light rain shower'
                                  ? require('../assets/light_rain_shower.png')
                                  : { uri: null }
          }
        />
        <Text
          style={[
            weatherDataStyles.info,
            { color: scheme === 'dark' ? '#fff' : '#000' },
          ]}
        >
          <Text
            style={[
              weatherDataStyles.tempInfo,
              { color: currentTemp < 0 ? '#ff0000' : '#fff' },
            ]}
          >
            {!currentLoading ? currentTemp : ''}
          </Text>
          {'\n'}
          <Text style={weatherDataStyles.decInfo}>
            {!currentLoading
              ? currentDec === 'Sunny'
                ? 'Solig'
                : currentDec === 'Partly cloudy'
                  ? 'Delvis molnigt'
                  : currentDec === 'Rain'
                    ? 'Regnig'
                    : currentDec === 'Light snow'
                      ? 'Lätt snö'
                      : currentDec === 'Overcast'
                        ? 'Molnig'
                        : currentDec === 'Clear'
                          ? 'Klar'
                          : currentDec === 'Heavy snow'
                            ? 'Tung snö'
                            : currentDec === 'Freezing Unknown Precipitation'
                              ? 'Frysning Okänd nederbörd'
                              : currentDec === 'Cloudy'
                                ? 'Molnig'
                                : currentDec === 'Smoke'
                                  ? 'Rök'
                                  : currentDec === 'Mist'
                                    ? 'Dimma'
                                    : 'Light rain shower'
                                      ? 'Lätt regnskur'
                                      : ''
              : ''}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
