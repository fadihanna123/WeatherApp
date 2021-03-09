import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import FormBox from "./components/WeatherForm";
import WeatherData from "./components/WeatherData";
import NameBox from "./components/NameBox";

const App = () => {
  const [temp, setTemp] = useState<number>();
  const [dec, setDec] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [cityinput, setCityInput] = useState<string>("");
  const [Error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FormBox
          cityinput={cityinput}
          setCityInput={setCityInput}
          setLoading={setLoading}
          setView={setView}
          setDec={setDec}
          setCityName={setCityName}
          setTemp={setTemp}
        />
        <WeatherData
          loading={loading}
          view={view}
          dec={dec}
          cityName={cityName}
          temp={temp}
          Error={Error}
        />
        <NameBox />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
});
