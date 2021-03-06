import axios from "axios";
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import NameBox from "./components/NameBox";
import WeatherData from "./components/WeatherData";
import FormBox from "./components/WeatherForm";
import { styles } from "./styles/AppStyles";

axios.defaults.baseURL = "http://api.weatherstack.com/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  const [temp, setTemp] = useState<number>();
  const [dec, setDec] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [cityinput, setCityInput] = useState<string>("");
  const [Error] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  const formBoxProps = {
    cityinput: cityinput,
    setCityInput: setCityInput,
    setLoading: setLoading,
    setView: setView,
    setDec: setDec,
    setCityName: setCityName,
    setTemp: setTemp,
  };

  const weatherDataProps = {
    loading: loading,
    view: view,
    dec: dec,
    cityName: cityName,
    temp: temp,
    Error: Error,
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FormBox {...formBoxProps} />
        <WeatherData {...weatherDataProps} />
        <NameBox />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
