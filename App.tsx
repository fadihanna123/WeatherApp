import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image, Button, Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";

export default function App() {
  const [temp, setTemp] = useState<string>("");
  const [dec, setDec] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://api.weatherstack.com/current?access_key=4002299c4024aaf87b643da6a693e1f2&query=" +
          city,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setView(true);
      setTemp(data.current.temperature);
      setCityName(data.location.name);
      setDec(data.current.weather_descriptions[0]);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <TextInput
          defaultValue={city}
          onChangeText={(city) => setCity(city)}
          style={styles.textinput}
          placeholder="Search City"
          onKeyPress={(event) => {
            if (event.nativeEvent.key == "Enter") {
              getWeather();
              console.log("hej");
            }
          }}
          onSubmitEditing={() => {
            getWeather();
          }}
        />
        <Button title="Search" onPress={() => getWeather()} />
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
                  ? "Delvis molnigt"
                  : dec == "Rain"
                  ? "Regnig"
                  : dec == "Light Snow"
                  ? "Snö"
                  : dec == "Overcast"
                  ? "Molnig"
                  : dec == "Clear"
                  ? "Klar"
                  : ""}
                {"\n"}
              </Text>
            </Text>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
      <Text style={styles.myName}>Created by Fadi Hanna</Text>
    </View>
  );
}

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
    margin: 40,
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
});
