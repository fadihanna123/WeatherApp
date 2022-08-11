import { Dispatch } from 'redux';

import { WeatherData } from '../models';
import {
  setCityInput,
  setCityName,
  setDec,
  setError,
  setTemp,
  setViewSearchBox,
} from '../redux/actions';

export const checkIfNoInput = (
  dispatch: Dispatch<any>,
  data: WeatherData,
  cityInput: string | undefined
): void => {
  if (!cityInput) {
    dispatch(setViewSearchBox(true));

    dispatch(setError('Start typing first...'));
  } else {
    if (
      data.current.temperature &&
      data.location.name &&
      data.current.weather_descriptions[0]
    ) {
      if (setViewSearchBox) {
        setViewSearchBox(true);
      }

      dispatch(setTemp(data.current.temperature));

      dispatch(setCityName(data.location.name));

      dispatch(setDec(data.current.weather_descriptions[0]));

      dispatch(setCityInput?.(''));
    }
  }
};
