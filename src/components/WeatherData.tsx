import React from "react";
import { Image, Text, useColorScheme, View } from "react-native";

// Components
import { weatherDataStyles } from "@styles/WeatherDataStyles";
import { useGlobalContext } from "@states/index";

const WeatherData: React.FC = () => {
  const { dec, cityName, temp } = useGlobalContext();
  const scheme = useColorScheme();

  return (
    <View>
      <View style={weatherDataStyles.contentContainer}>
        <Text
          style={[
            weatherDataStyles.cityname,
            { color: scheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          {cityName} {"\n"}
        </Text>
        <View>
          <Image
            style={[weatherDataStyles.tempImg]}
            source={
              dec === "Sunny"
                ? require("../assets/sunny.png")
                : dec === "Partly Cloudy "
                  ? require("../assets/partlycloudy.png")
                  : dec === "Rain"
                    ? require("../assets/rain.png")
                    : dec === "Light snow"
                      ? require("../assets/snowlight.png")
                      : dec === "Overcast "
                        ? require("../assets/overcast.png")
                        : dec === "Clear "
                          ? require("../assets/clear.png")
                          : dec === "Heavy snow"
                            ? require("../assets/heavysnow.png")
                            : dec === "Freezing Unknown Precipitation"
                              ? require("../assets/freezingrain.png")
                              : dec === "Cloudy "
                                ? require("../assets/cloudy.png")
                                : dec === "Mist"
                                  ? require("../assets/mist.png")
                                  : dec === "Light rain shower"
                                    ? require("../assets/light_rain_shower.png")
                                    : dec === "Light Drizzle"
                                      ? require("../assets/light_drizzle.png")
                                      : dec ===
                                          "Light Drizzle, Drizzle And Rain"
                                        ? require("../assets/light_drizzle.png")
                                        : dec === "Drizzle"
                                          ? require("../assets/drizzle.png")
                                          : dec === "Patchy rain nearby"
                                            ? require("../assets/patchy_rain_nearby.png")
                                            : { uri: null }
            }
          />
        </View>
        <Text
          style={[
            weatherDataStyles.info,
            { color: scheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          <Text
            style={[
              weatherDataStyles.tempInfo,
              { color: temp < 0 ? "#ff0000" : "#fff" },
            ]}
          >
            {temp}
          </Text>
          <Text style={weatherDataStyles.decInfo}>
            {"\n"}
            {dec === "Sunny"
              ? "Solig"
              : dec === "Partly cloudy"
                ? "Delvis molnigt"
                : dec === "Rain"
                  ? "Regnig"
                  : dec === "Light Snow"
                    ? "Lätt snö"
                    : dec === "Overcast"
                      ? "Molnig"
                      : dec === "Clear "
                        ? "Klar"
                        : dec === "Heavy snow"
                          ? "Tung snö"
                          : dec === "Freezing Unknown Precipitation"
                            ? "Frysning Okänd nederbörd"
                            : dec === "Cloudy"
                              ? "Molnig"
                              : dec === "Smoke"
                                ? "Rök"
                                : dec === "Mist"
                                  ? "Dimma"
                                  : dec === "Light rain shower"
                                    ? "Lätt regnskur"
                                    : dec === "Light Drizzle"
                                      ? "Lätt duggregn"
                                      : dec ===
                                          "Light Drizzle, Drizzle And Rain"
                                        ? "Lätt duggregn, duggregn och regn"
                                        : dec === "Drizzle"
                                          ? "Dugga"
                                          : dec === "Patchy rain nearby"
                                            ? "Fläckigt regn i närheten"
                                            : ""}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default WeatherData;
