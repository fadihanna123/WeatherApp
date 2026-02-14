import * as Location from "expo-location";
import { Alert } from "react-native";

// Components
import { getData } from "./apiHandler";

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get current location from user.
 * @param dispatch - Dispatch
 * @returns Promise
 */
export const getCurrentLocation = async ({
  setCurrentDec,
  setCurrentLoc,
  setCurrentTemp,
  setCityInput,
}: getCurrentLocationFNTypes) => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "You need to allow location services to use this app, please!",
      );
      return;
    }

    const data: any = await getData();

    console.log("Response: ", JSON.stringify(data, null, "\t"));

    if (
      data.current.temperature &&
      data.location.name &&
      data.current.weather_descriptions[0]
    ) {
      setCurrentTemp(data.current.temperature);

      setCurrentLoc(data.location.name);

      setCurrentDec(data.current.weather_descriptions[0]);

      setCityInput("");
    }
  } catch (err) {
    console.log(err);
  }
};
