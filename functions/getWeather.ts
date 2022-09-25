import { Dispatch } from 'redux';

import { WeatherData } from '../models';
import { setError, setLoading } from '../redux/actions';
import { getData } from './apiHandler';
import { checkIfNoInput } from './checkIfNoInput';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all weather data based on city value.
 *
 * @param dispatch - Dispatch
 * @param cityInput - City value.
 */

export const getWeather = async (
  dispatch: Dispatch<any>,
  cityInput: string | undefined
): Promise<void> => {
  try {
    dispatch(setLoading(true));

    const data = (await getData(cityInput)) as unknown as WeatherData;

    checkIfNoInput(dispatch, data, cityInput);
  } catch (err) {
    dispatch(setError('There is no such city in the world....'));
  } finally {
    setLoading(false);
  }
};
