import axios from 'axios';
import * as Location from 'expo-location';

import { request } from '../api';
import { Address } from '../models';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all weather data based on city value.
 *
 * @param cityinput - City value
 * @returns Promise contains weather-data
 */

export const getData = async (
  cityinput?: string | undefined
): Promise<void> => {
  const location = await Location.getCurrentPositionAsync({});
  const address = await Location.reverseGeocodeAsync(location.coords);
  const currentCity: string = address.map((x: Address) => x.city);
  const val = cityinput ? cityinput : currentCity;
  const key = '4002299c4024aaf87b643da6a693e1f2';
  const endPoint = `current?access_key=${key}&query=${val}`;

  return await request.get(endPoint);
};
