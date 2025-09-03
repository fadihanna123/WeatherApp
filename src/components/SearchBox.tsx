import React from 'react';
import {
  Button,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

// Components
import { getWeather } from '@functions/getWeather';
import { useAppDispatch, useAppSelector } from '@redux/app';
import { getCityInput, getViewSearchBox, setCityInput } from '@redux/reducers';
import { weatherFormStyles } from '@styles/WeatherFormStyles';
import { styles } from '@styles/AppStyles';
import WeatherData from './WeatherData';

const SearchBox: React.FC = () => {
  const cityInput = useAppSelector(getCityInput);
  const viewSearchBox = useAppSelector(getViewSearchBox);
  const dispatch = useAppDispatch();
  const scheme = useColorScheme();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={weatherFormStyles.inputbox}>
          <TextInput
            clearButtonMode='always'
            defaultValue={cityInput}
            onChangeText={(cityinput) => dispatch(setCityInput(cityinput))}
            style={[
              weatherFormStyles.textinput,
              {
                color: scheme === 'dark' ? '#fff' : '#000',
                borderColor: scheme === 'dark' ? '#FF0000' : '#000',
              },
            ]}
            placeholder='Search City'
            onKeyPress={(event): void => {
              if (event.nativeEvent.key === 'Enter' && cityInput !== '') {
                dispatch(setCityInput(''));
                getWeather(dispatch, cityInput);
              }
            }}
            onSubmitEditing={() => {
              getWeather(dispatch, cityInput) as any, 1500;
            }}
          />
          <Button
            title='Search'
            color='green'
            onPress={() => cityInput && getWeather(dispatch, cityInput)}
          />
        </View>
        {viewSearchBox && <WeatherData />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBox;
