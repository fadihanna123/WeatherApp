import React, { useEffect } from "react";
import { Image, Text, useColorScheme, View } from "react-native";

// Components
import { getCurrentLocation } from "@functions/getCurrentLocation";
import { weatherDataStyles } from "@styles/WeatherDataStyles";
import { useGlobalContext } from "@states/index";

const CurrentLocation: React.FC = () => {
  const {
    currentLoc,
    currentDec,
    currentTemp,
    setCurrentDec,
    setCurrentLoc,
    setCurrentTemp,
    setCityInput,
  } = useGlobalContext();
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  useEffect(() => {
    getCurrentLocation({
      setCurrentDec,
      setCurrentLoc,
      setCurrentTemp,
      setCityInput,
    });
  }, []);

  return (
    <View>
      <View style={weatherDataStyles.contentContainer}>
        <Text
          style={[
            weatherDataStyles.cityname,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          {"\n"}
          {currentLoc} {"\n"}
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
                    : currentDec === "Overcast "
                      ? require("../assets/overcast.png")
                      : currentDec === "Clear "
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
                                    : currentDec ===
                                        "Light Drizzle, Drizzle And Rain"
                                      ? require("../assets/light_drizzle.png")
                                      : currentDec === "Drizzle"
                                        ? require("../assets/drizzle.png")
                                        : currentDec === "Patchy rain nearby"
                                          ? require("../assets/patchy_rain_nearby.png")
                                          : { uri: null }
          }
        />
        <Text style={weatherDataStyles.info}>
          <Text
            style={[
              weatherDataStyles.tempInfo,
              { color: currentTemp! < 0 ? "#ff0000" : "#fff" },
              { color: isDark ? "#fff" : "#000" },
            ]}
          >
            {currentTemp}
          </Text>
          {"\n"}
          <Text
            style={[
              weatherDataStyles.decInfo,
              { color: isDark ? "#fff" : "#000" },
            ]}
          >
            {currentDec === "Sunny"
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
                                      : currentDec ===
                                          "Light Drizzle, Drizzle And Rain"
                                        ? "Lätt duggregn, duggregn och regn"
                                        : currentDec === "Drizzle"
                                          ? "Dugga"
                                          : currentDec === "Patchy rain nearby"
                                            ? "Fläckigt regn i närheten"
                                            : ""}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
