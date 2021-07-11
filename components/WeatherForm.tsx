import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import { Button, TextInput, View } from "react-native";
import { debounce } from "ts-debounce";

import { styles } from "../styles/WeatherFormStyles";
import { Props } from "../typings";

const WeatherForm = ({
  cityinput,
  setCityInput,
  setLoading,
  setView,
  setError,
  setTemp,
  setCityName,
  setDec,
}: Props) => {
  const checkIfNoInput = (data: any) => {
    if (!cityinput) {
      data.current.temperature && "Done";

      setView && setView(false);

      setError && setError("Start typing first...");
    } else {
      if (
        data.current.temperature &&
        data.location.name &&
        data.current.weather_descriptions[0]
      ) {
        setView && setView(true);

        setTemp && setTemp(data.current.temperature);

        setCityName && setCityName(data.location.name);

        setDec && setDec(data.current.weather_descriptions[0]);
      }
    }
  };

  const getWeather = async (): Promise<void> => {
    try {
      setLoading && setLoading(true);

      const { data } = await axios.get(
        "current?access_key=x&query=" + cityinput
      );

      checkIfNoInput(data);
    } catch (err) {
      setError && setError("There is no such city in the world....");
    } finally {
      setLoading && setLoading(false);
    }
  };

  return (
    <View style={styles.inputbox}>
      <TextInput
        clearButtonMode="always"
        defaultValue={cityinput}
        onChangeText={(cityinput) => setCityInput && setCityInput(cityinput)}
        style={styles.textinput}
        placeholder="Search City"
        onKeyPress={(event) => {
          if (event.nativeEvent.key == "Enter" && cityinput !== "") {
            setCityInput && setCityInput("");
            getWeather();
          }
        }}
        onSubmitEditing={() => {
          debounce<any>(getWeather(), 1500);
        }}
      />
      <Button title="Search" color="green" onPress={() => getWeather()} />
    </View>
  );
};

WeatherForm.propTypes = {
  cityinput: PropTypes.string.isRequired,
  setCityInput: PropTypes.func.isRequired,
};

WeatherForm.defaultProps = {
  cityinput: "",
  setCityInput: "",
};

export default WeatherForm;
