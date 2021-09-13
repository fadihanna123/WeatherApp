import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import NameBox from "../components/NameBox";
import WeatherData from "../components/WeatherData";
import { styles } from "../styles/AppStyles";
import FormBox from "../components/WeatherForm";

const Layout: React.FC = () => {
  const [temp, setTemp] = useState<number>();
  const [dec, setDec] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [cityinput, setCityInput] = useState<string>("");
  const [Error] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  const formBoxProps = {
    cityinput,
    setCityInput,
    setLoading,
    setView,
    setDec,
    setCityName,
    setTemp,
  };

  const weatherDataProps = {
    loading,
    view,
    dec,
    cityName,
    temp,
    Error,
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

export default Layout;
