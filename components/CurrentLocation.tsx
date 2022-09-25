import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentLocation } from '../functions';
import {
  CurrentDecReducerTypes,
  CurrentLoadingReducerTypes,
  CurrentLocReducerTypes,
  CurrentTempReducerTypes,
  ViewCurrentReducerTypes,
} from '../models';
import { weatherDataStyles } from '../styles';

const CurrentLocation: React.FC = () => {
  const viewCurrent = useSelector(
    (state: ViewCurrentReducerTypes) => state.viewCurrentReducer
  );

  const currentLoading = useSelector(
    (state: CurrentLoadingReducerTypes) => state.currentLoadingReducer
  );

  const currentDec = useSelector(
    (state: CurrentDecReducerTypes) => state.currentDecReducer
  );

  const CurrentLoc = useSelector(
    (state: CurrentLocReducerTypes) => state.currentLocReducer
  );

  const currentTemp = useSelector(
    (state: CurrentTempReducerTypes) => state.currentTempReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentLocation(dispatch, viewCurrent);
  }, []);

  return (
    <View>
      <Spinner
        visible={currentLoading}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
        animation='fade'
      />
      <View style={weatherDataStyles.contentContainer}>
        <Image
          resizeMode='stretch'
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
        <Text style={weatherDataStyles.info}>
          <Text style={weatherDataStyles.cityname}>
            {CurrentLoc} {'\n'}
          </Text>
          <Text style={weatherDataStyles.tempInfo}>{currentTemp}</Text>
          <Text style={weatherDataStyles.decInfo}>
            {'\n'}
            {currentDec === 'Sunny'
              ? 'Solig'
              : currentDec === 'Partly cloudy'
              ? 'Delvis \n molnigt'
              : currentDec === 'Rain'
              ? 'Regnig'
              : currentDec === 'Light snow'
              ? 'Lätt snö'
              : currentDec === 'Overcast'
              ? 'Molnig'
              : currentDec === 'Clear'
              ? 'Klar'
              : currentDec === 'Heavy snow'
              ? 'Tung \n snö'
              : currentDec === 'Freezing Unknown Precipitation'
              ? 'Frysning \n Okänd \n nederbörd'
              : currentDec === 'Cloudy'
              ? 'Molnig'
              : currentDec === 'Smoke'
              ? 'Rök'
              : currentDec === 'Mist'
              ? 'Dimma'
              : 'Light rain shower'
              ? 'Lätt regnskur'
              : ''}
            {'\n'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
