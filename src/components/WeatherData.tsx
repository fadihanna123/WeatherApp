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
            source={{
              uri: "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0027_light_snow_showers_night.png",
            }}
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
