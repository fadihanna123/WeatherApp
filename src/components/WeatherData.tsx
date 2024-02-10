import React from 'react';
import { Image, Text, useColorScheme, View } from 'react-native';

import { useAppSelector } from '../redux/app';
import { getCityName, getDec, getTemp } from '../redux/reducers';
import { weatherDataStyles } from '../styles';

const WeatherData: React.FC = () => {
  const dec = useAppSelector(getDec);
  const cityName = useAppSelector(getCityName);
  const temp = useAppSelector(getTemp);
  const scheme = useColorScheme();

  return (
    <View>
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
        <Text
          style={[
            weatherDataStyles.info,
            { color: scheme === 'dark' ? '#fff' : '#000' },
          ]}
        >
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
    </View>
  );
};

export default WeatherData;
