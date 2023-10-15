import { Dispatch } from 'redux';

import { setError, setLoading } from '../redux/reducers';
import { getData } from './apiHandler';
import { checkIfNoInput } from './checkIfNoInput';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all weather data based on city value.
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

    console.log('Response: ', data);

    checkIfNoInput(dispatch, data, cityInput);
  } catch (err) {
    dispatch(setError('There is no such city in the world....'));
  } finally {
    setLoading(false);
  }
};
