import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'ts-debounce';

import { getWeather } from '../functions';
import { CityInputReducerTypes } from '../models';
import { setCityInput } from '../redux/actions';
import { weatherFormStyles } from '../styles';

const WeatherForm: React.FC = () => {
  const cityInput = useSelector(
    (state: CityInputReducerTypes) => state.cityInputReducer
  );

  const dispatch = useDispatch();

  return (
    <View style={weatherFormStyles.inputbox}>
      <TextInput
        clearButtonMode='always'
        defaultValue={cityInput}
        onChangeText={(cityinput) =>
          dispatch(setCityInput(cityinput))
        }
        style={weatherFormStyles.textinput}
        placeholder='Search City'
        onKeyPress={(event): void => {
          if (
            event.nativeEvent.key === 'Enter' &&
            cityInput !== '' &&
            setCityInput
          ) {
            setCityInput('');

            getWeather(dispatch, cityInput);
          }
        }}
        onSubmitEditing={() => {
          debounce(getWeather(dispatch, cityInput) as any, 1500);
        }}
      />
      <Button
        title='Search'
        color='green'
        onPress={() => cityInput && getWeather(dispatch, cityInput)}
      />
    </View>
  );
};

export default WeatherForm;
