import * as Location from 'expo-location';
import { Dispatch } from 'react';
import { Alert } from 'react-native';

// Components
import {
  setCityInput,
  setCurrentDec,
  setCurrentLoading,
  setCurrentLoc,
  setCurrentTemp,
  setError,
  setViewCurrent,
} from '@redux/reducers';
import { getData } from './apiHandler';

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
  dispatch: Dispatch<any>,
  viewCurrent: boolean
) => {
  try {
    dispatch(setViewCurrent(true));

    dispatch(setCurrentLoading(true));

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'You need to allow location services to use this app, please!'
      );
      return;
    }

    const data: any = await getData();

    console.log('Response: ', data);

    if (
      viewCurrent &&
      data.current.temperature &&
      data.location.name &&
      data.current.weather_descriptions[0]
    ) {
      dispatch(setCurrentTemp(data.current.temperature));

      dispatch(setCurrentLoc(data.location.name));

      dispatch(setCurrentDec(data.current.weather_descriptions[0]));

      dispatch(setCityInput(''));
    }
  } catch (err) {
    dispatch(setError('There is no such city in the world....'));
  } finally {
    dispatch(setCurrentLoading(false));
  }
};
