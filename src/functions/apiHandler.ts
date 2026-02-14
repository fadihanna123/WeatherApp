import * as Location from "expo-location";

import { request } from "@api/request";
import { apiKey } from "@utils/envs";

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all weather data based on city value.
 * @param { string | undefined } cityinput - City value
 * @returns { Promise<void> } Promise contains weather-data
 */
export const getData = async (
  cityinput?: string | undefined,
): Promise<void> => {
  let val: string | string[] = "";

  if (!cityinput) {
    const location = await Location.getCurrentPositionAsync({});
    const address = await Location.reverseGeocodeAsync(location.coords);
    address.forEach((item: any) => (val = item.city));
  } else {
    val = cityinput;
  }

  const endPoint = `current?access_key=${apiKey}&query=${val}`;
  return await request.get(endPoint);
};
