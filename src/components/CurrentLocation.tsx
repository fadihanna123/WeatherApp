import React, { useEffect } from "react";
import { Image, Text, useColorScheme, View } from "react-native";

// Components
import { getCurrentLocation } from "@functions/getCurrentLocation";
import { useAppDispatch, useAppSelector } from "@redux/app";
import {
  getCurrentDec,
  getCurrentLoading,
  getCurrentLoc,
  getCurrentTemp,
  getViewCurrent,
} from "@redux/reducers";
import { weatherDataStyles } from "@styles/WeatherDataStyles";

const CurrentLocation: React.FC = () => {
  const viewCurrent = useAppSelector(getViewCurrent);
  const currentLoading = useAppSelector(getCurrentLoading);
  const currentDec = useAppSelector(getCurrentDec);
  const CurrentLoc = useAppSelector(getCurrentLoc);
  const currentTemp = useAppSelector(getCurrentTemp);
  const dispatch = useAppDispatch();
  const scheme = useColorScheme();

  useEffect(() => {
    getCurrentLocation(dispatch, viewCurrent);
  }, []);

  return (
    <View>
      <View style={weatherDataStyles.contentContainer}>
        <Text
          style={[
            weatherDataStyles.cityname,
            { color: scheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          {"\n"}
          {!currentLoading ? CurrentLoc : ""} {"\n"}
        </Text>
        <Image
          style={weatherDataStyles.tempImg}
          source={
            currentDec === "Sunny"
              ? require("../assets/sunny.png")
              : currentDec === "Partly Cloudy "
              ? require("../assets/partlycloudy.png")
              : currentDec === "Rain"
              ? require("../assets/rain.png")
              : currentDec === "Light snow"
              ? require("../assets/snowlight.png")
              : currentDec === "Overcast"
              ? require("../assets/overcast.png")
              : currentDec === "Clear"
              ? require("../assets/clear.png")
              : currentDec === "Heavy snow"
              ? require("../assets/heavysnow.png")
              : currentDec === "Freezing Unknown Precipitation"
              ? require("../assets/freezingrain.png")
              : currentDec === "Cloudy "
              ? require("../assets/cloudy.png")
              : currentDec === "Mist"
              ? require("../assets/mist.png")
              : currentDec === "Light rain shower"
              ? require("../assets/light_rain_shower.png")
              : currentDec === "Light Drizzle"
              ? require("../assets/light_drizzle.png")
              : { uri: null }
          }
        />
        <Text style={weatherDataStyles.info}>
          <Text
            style={[
              weatherDataStyles.tempInfo,
              { color: currentTemp < 0 ? "#ff0000" : "#fff" },
              { color: scheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            {!currentLoading ? currentTemp : ""}
          </Text>
          {"\n"}
          <Text
            style={[
              weatherDataStyles.decInfo,
              { color: scheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            {!currentLoading
              ? currentDec === "Sunny"
                ? "Solig"
                : currentDec === "Partly Cloudy "
                ? "Delvis molnigt"
                : currentDec === "Rain"
                ? "Regnig"
                : currentDec === "Light snow"
                ? "Lätt snö"
                : currentDec === "Overcast"
                ? "Molnig"
                : currentDec === "Clear"
                ? "Klar"
                : currentDec === "Heavy snow"
                ? "Tung snö"
                : currentDec === "Freezing Unknown Precipitation"
                ? "Frysning Okänd nederbörd"
                : currentDec === "Cloudy"
                ? "Molnig"
                : currentDec === "Smoke"
                ? "Rök"
                : currentDec === "Mist"
                ? "Dimma"
                : currentDec === "Light rain shower"
                ? "Lätt regnskur"
                : currentDec === "Light Drizzle"
                ? "Lätt duggregn"
                : ""
              : ""}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
