import React from 'react';
import {
  Button,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { debounce } from 'ts-debounce';

import { getWeather } from '../functions';
import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getCityInput,
  getViewSearchBox,
  setCityInput,
} from '../redux/reducers';
import { weatherFormStyles } from '../styles';
import { styles } from '../styles/AppStyles';
import NameBox from './NameBox';
import WeatherData from './WeatherData';

const SearchBox: React.FC = () => {
  const cityInput = useAppSelector(getCityInput);
  const viewSearchBox = useAppSelector(getViewSearchBox);
  const dispatch = useAppDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={weatherFormStyles.inputbox}>
          <TextInput
            clearButtonMode='always'
            defaultValue={cityInput}
            onChangeText={(cityinput) => dispatch(setCityInput(cityinput))}
            style={weatherFormStyles.textinput}
            placeholder='Search City'
            onKeyPress={(event): void => {
              if (event.nativeEvent.key === 'Enter' && cityInput !== '') {
                dispatch(setCityInput(''));
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
        {viewSearchBox && <WeatherData />}
        <NameBox />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBox;