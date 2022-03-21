import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { debounce } from 'ts-debounce';

import { getWeather } from '../functions';
import { Props } from '../models';
import { styles } from '../styles/WeatherFormStyles';

const WeatherForm: React.FC<Props> = ({
  cityinput,
  setCityInput,
  setLoading,
  setView,
  setError,
  setTemp,
  setCityName,
  setDec,
}: Props) => (
  <View style={styles.inputbox}>
    <TextInput
      clearButtonMode="always"
      defaultValue={cityinput}
      onChangeText={(cityinput) => setCityInput && setCityInput(cityinput)}
      style={styles.textinput}
      placeholder="Search City"
      onKeyPress={(event): void => {
        if (event.nativeEvent.key == "Enter" && cityinput !== "") {
          setCityInput && setCityInput("");

          getWeather(
            setLoading,
            cityinput,
            setView,
            setError,
            setTemp,
            setCityName,
            setDec,
            setCityInput
          );
        }
      }}
      onSubmitEditing={() => {
        debounce(
          getWeather(
            setLoading,
            cityinput,
            setView,
            setError,
            setTemp,
            setCityName,
            setDec,
            setCityInput
          ) as any,
          1500
        );
      }}
    />
    <Button
      title="Search"
      color="green"
      onPress={() =>
        cityinput &&
        getWeather(
          setLoading,
          cityinput,
          setView,
          setError,
          setTemp,
          setCityName,
          setDec,
          setCityInput
        )
      }
    />
  </View>
);

WeatherForm.propTypes = {
  cityinput: PropTypes.string.isRequired,
  setCityInput: PropTypes.func.isRequired,
};

WeatherForm.defaultProps = {
  cityinput: "",
};

export default WeatherForm;
