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
 * @param viewCurrent - Boolean
 * @returns Promise
 */
export const getCurrentLocation = async (
  viewCurrent: boolean,
  setViewCurrent: (viewCurrent: boolean) => void,
  setCurrentLoading: (currentLoading: boolean) => void,
  setCurrentDec: (currentDec: string) => void,
  setCurrentLoc: (currentLoc: string) => void,
  setCurrentTemp: (currentTemp: number) => void,
  setError: (error: string) => void,
  setCityInput: (cityInput: string) => void,
) => {
  try {
    setViewCurrent(true);

    setCurrentLoading(true);

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
      viewCurrent &&
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
    setError("There is no such city in the world....");
  } finally {
    setCurrentLoading(false);
  }
};
