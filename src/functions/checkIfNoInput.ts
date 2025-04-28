import { Dispatch } from 'redux';

import {
  setCityInput,
  setCityName,
  setDec,
  setError,
  setTemp,
  setViewSearchBox,
} from '@redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Check if no value exists in text field.
 * @param dispatch - Dispatch
 * @param data - Weatherdata object
 * @param cityInput - City value.
 * @returns Void
 */

export const checkIfNoInput = (
  dispatch: Dispatch<any>,
  data: WeatherData,
  cityInput: string | undefined
): void => {
  if (!cityInput) {
    dispatch(setViewSearchBox(false));

    dispatch(setError('Start typing first...'));
  } else {
    if (
      data.current.temperature &&
      data.location.name &&
      data.current.weather_descriptions[0]
    ) {
      dispatch(setViewSearchBox(true));

      dispatch(setTemp(data.current.temperature));

      dispatch(setCityName(data.location.name));

      dispatch(setDec(data.current.weather_descriptions[0]));

      dispatch(setCityInput?.(''));
    }
  }
};
