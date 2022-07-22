import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CityNameReducerTypes, DecReducerTypes, TempReducerTypes, ViewSearchBoxReducerTypes } from '../models';
import { weatherDataStyles } from '../styles';

const WeatherData: React.FC = () => {
  const viewSearchBox = useSelector(
    (state: ViewSearchBoxReducerTypes) => state.viewSearchBoxReducer
  );

  const dec = useSelector(
    (state: DecReducerTypes) => state.decReducer
  );

  const cityName = useSelector(
    (state: CityNameReducerTypes) => state.cityNameReducer
  );

  const temp = useSelector(
    (state: TempReducerTypes) => state.tempReducer
  );

  return (
    <View>
      {viewSearchBox ? (
        <View style={weatherDataStyles.contentContainer}>
          <Image
            resizeMode='stretch'
            style={weatherDataStyles.tempImg}
            source={
              dec === 'Sunny'
                ? require('../assets/sunny.png')
                : dec === 'Partly cloudy'
                ? require('../assets/partlycloudy.png')
                : dec === 'Rain'
                ? require('../assets/rain.png')
                : dec === 'Light snow'
                ? require('../assets/snowlight.png')
                : dec === 'Overcast'
                ? require('../assets/overcast.png')
                : dec === 'Clear'
                ? require('../assets/clear.png')
                : dec === 'Heavy snow'
                ? require('../assets/heavysnow.png')
                : dec === 'Freezing Unknown Precipitation'
                ? require('../assets/freezingrain.png')
                : dec === 'Cloudy'
                ? require('../assets/cloudy.png')
                : dec === 'Mist'
                ? require('../assets/mist.png')
                : dec === 'Light rain shower'
                ? require('../assets/light_rain_shower.png')
                : { uri: null }
            }
          />
          <Text style={weatherDataStyles.info}>
            <Text style={weatherDataStyles.cityname}>
              {cityName} {'\n'}
            </Text>
            <Text style={weatherDataStyles.tempInfo}>{temp}</Text>
            <Text style={weatherDataStyles.decInfo}>
              {'\n'}
              {dec === 'Sunny'
                ? 'Solig'
                : dec === 'Partly cloudy'
                ? 'Delvis \n molnigt'
                : dec === 'Rain'
                ? 'Regnig'
                : dec === 'Light snow'
                ? 'Lätt snö'
                : dec === 'Overcast'
                ? 'Molnig'
                : dec === 'Clear'
                ? 'Klar'
                : dec === 'Heavy snow'
                ? 'Tung \n snö'
                : dec === 'Freezing Unknown Precipitation'
                ? 'Frysning \n Okänd \n nederbörd'
                : dec === 'Cloudy'
                ? 'Molnig'
                : dec === 'Smoke'
                ? 'Rök'
                : dec === 'Mist'
                ? 'Dimma'
                : 'Light rain shower'
                ? 'Lätt regnskur'
                : ''}
              {'\n'}
            </Text>
          </Text>
        </View>
      ) : (
        <Text>TEST</Text>
      )}
    </View>
  );
};

export default WeatherData;
