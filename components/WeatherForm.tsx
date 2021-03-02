import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import axios from "axios";

import { Props } from "../typings/List";

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
  const getWeather = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://api.weatherstack.com/current?access_key=X&query=" + cityinput,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!cityinput) {
        data.current.temperature && "Done";
        setView(false);
        setError("Start typing first...");
      } else {
        if (
          data.current.temperature &&
          data.location.name &&
          data.current.weather_descriptions[0]
        ) {
          setView(true);
          setTemp(data.current.temperature);
          setCityName(data.location.name);
          setDec(data.current.weather_descriptions[0]);
        }
        if (!cityinput) {
          setView(false);
          setError("Start typing first...");
        }
      }
    } catch (err) {
      console.log(err.message);
      setError("There is no such city in the world....");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.inputbox}>
        <TextInput
          clearButtonMode="always"
          defaultValue={cityinput}
          onChangeText={(cityinput) => setCityInput(cityinput)}
          style={styles.textinput}
          placeholder="Search City"
          onKeyPress={(event) => {
            if (event.nativeEvent.key == "Enter" && cityinput !== "") {
              setCityInput("");
              getWeather();
            }
          }}
          onSubmitEditing={() => {
            getWeather();
          }}
        />
        <Button title="Search" color="green" onPress={() => getWeather()} />
      </View>
    </>
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

const styles = StyleSheet.create({
  inputbox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textinput: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});
