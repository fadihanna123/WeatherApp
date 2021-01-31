import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Button,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";

const App = () => {
  const [temp, setTemp] = useState<string>("");
  const [dec, setDec] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [cityinput, setCityInput] = useState<string>("");
  const [Error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  const getWeather = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://api.weatherstack.com/current?access_key=X&query=" + cityinput,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!cityinput) {
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputbox}>
          <TextInput
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
        <View>
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
          />
          {view ? (
            <View style={styles.contentContainer}>
              <Image
                resizeMode="stretch"
                style={styles.tempImg}
                source={
                  dec == "sunny"
                    ? require("./assets/sunny.png")
                    : dec == "Partly cloudy"
                    ? require("./assets/partlycloudy.png")
                    : dec == "Rain"
                    ? require("./assets/rain.png")
                    : dec == "Light Snow"
                    ? require("./assets/snowlight.png")
                    : dec == "Overcast"
                    ? require("./assets/overcast.png")
                    : dec == "Clear"
                    ? require("./assets/clear.png")
                    : dec == "Heavy snow"
                    ? require("./assets/heavysnow.png")
                    : dec == "Freezing Unknown Precipitation"
                    ? require("./assets/freezingrain.png")
                    : dec == "Cloudy"
                    ? require("./assets/cloudy.png")
                    : ""
                }
              />
              <Text style={styles.info}>
                <Text style={styles.cityname}>
                  {cityName} {"\n"}
                </Text>
                <Text style={styles.tempInfo}>{temp}</Text>
                <Text style={styles.decInfo}>
                  {"\n"}
                  {dec == "Sunny"
                    ? "Solig"
                    : dec == "Partly cloudy"
                    ? "Delvis \n molnigt"
                    : dec == "Rain"
                    ? "Regnig"
                    : dec == "Light Snow"
                    ? "Snö"
                    : dec == "Overcast"
                    ? "Molnig"
                    : dec == "Clear"
                    ? "Klar"
                    : dec == "Heavy snow"
                    ? "Tung \n snö"
                    : dec == "Freezing Unknown Precipitation"
                    ? "Frysning \n Okänd \n nederbörd"
                    : dec == "Cloudy"
                    ? "Molnig"
                    : ""}
                  {"\n"}
                </Text>
              </Text>
            </View>
          ) : (
            <Text numberOfLines={5} style={styles.errorStyle}>
              {Error}
            </Text>
          )}
        </View>
        <Text style={styles.myName}>Created by Fadi Hanna</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
  inputbox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textinput: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  spinnerTextStyle: {
    color: "#fff",
  },
  icon: {
    width: 100,
    height: 100,
    margin: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  myName: {
    textAlign: "center",
    marginTop: 100,
    marginRight: 20,
    fontSize: 20,
  },
  tempImg: {
    justifyContent: "center",
    width: "50%",
    height: "100%",
    margin: 10,
  },
  info: {
    margin: 30,
  },
  tempInfo: {
    fontSize: 40,
  },
  cityname: {
    fontSize: 20,
  },
  decInfo: {
    fontSize: 20,
  },
  errorStyle: { textAlign: "center", fontSize: 30 },
});

export default App;
