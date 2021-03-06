import PropTypes from "prop-types";
import React from "react";
import { Image, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { styles } from "../styles";
import { Props } from "../typings";

const WeatherData = ({ loading, view, dec, cityName, temp, Error }: Props) => {
  return (
    <View>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "#fff" }}
      />
      {view ? (
        <View style={styles.contentContainer}>
          <Image
            resizeMode="stretch"
            style={styles.tempImg}
            source={
              dec == "Sunny"
                ? require("../assets/sunny.png")
                : dec == "Partly cloudy"
                ? require("../assets/partlycloudy.png")
                : dec == "Rain"
                ? require("../assets/rain.png")
                : dec == "Light snow"
                ? require("../assets/snowlight.png")
                : dec == "Overcast"
                ? require("../assets/overcast.png")
                : dec == "Clear"
                ? require("../assets/clear.png")
                : dec == "Heavy snow"
                ? require("../assets/heavysnow.png")
                : dec == "Freezing Unknown Precipitation"
                ? require("../assets/freezingrain.png")
                : dec == "Cloudy"
                ? require("../assets/cloudy.png")
                : dec == "Mist"
                ? require("../assets/mist.png")
                : dec == "Light rain shower"
                ? require("../assets/light_rain_shower.png")
                : { uri: null }
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
                : dec == "Light snow"
                ? "Lätt snö"
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
                : dec == "Smoke"
                ? "Rök"
                : dec == "Mist"
                ? "Dimma"
                : "Light rain shower"
                ? "Lätt regnskur"
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
  );
};

WeatherData.propTypes = {
  loading: PropTypes.bool.isRequired,
  view: PropTypes.bool.isRequired,
  dec: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  Error: PropTypes.string.isRequired,
};

WeatherData.defaultProps = {
  loading: false,
  view: false,
  dec: "",
  temp: 0,
  cityName: "",
  Error: "",
};

export default WeatherData;
