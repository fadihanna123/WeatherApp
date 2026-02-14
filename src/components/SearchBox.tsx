import React from "react";
import {
  Button,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";

// Components
import { getWeather } from "@functions/getWeather";
import { weatherFormStyles } from "@styles/WeatherFormStyles";
import { styles } from "@styles/AppStyles";
import WeatherData from "./WeatherData";
import { useGlobalContext } from "@states/index";

const SearchBox: React.FC = () => {
  const {
    cityInput,
    setCityInput,
    viewSearchBox,
    setViewSearchBox,
    setTemp,
    setCityName,
    setDec,
  } = useGlobalContext();
  const scheme = useColorScheme();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={weatherFormStyles.inputbox}>
          <TextInput
            clearButtonMode="always"
            defaultValue={cityInput}
            onChangeText={(cityinput) => setCityInput(cityinput)}
            style={[
              weatherFormStyles.textinput,
              {
                color: scheme === "dark" ? "#fff" : "#000",
                borderColor: scheme === "dark" ? "#FF0000" : "#000",
              },
            ]}
            placeholder="Search City"
            onKeyPress={(event): void => {
              if (event.nativeEvent.key === "Enter" && cityInput !== "") {
                setCityInput("");
                getWeather({
                  cityInput,
                  setViewSearchBox,
                  setTemp,
                  setCityName,
                  setDec,
                  setCityInput,
                });
              }
            }}
            onSubmitEditing={() => {
              getWeather({
                cityInput,
                setViewSearchBox,
                setTemp,
                setCityName,
                setDec,
                setCityInput,
              });
            }}
          />
          <Button
            title="Search"
            color="green"
            onPress={() =>
              cityInput &&
              getWeather({
                cityInput,
                setViewSearchBox,
                setTemp,
                setCityName,
                setDec,
                setCityInput,
              })
            }
          />
        </View>
        {viewSearchBox && <WeatherData />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBox;
