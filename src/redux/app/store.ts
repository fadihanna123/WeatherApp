import { configureStore } from '@reduxjs/toolkit';

import cityInputReducer from '../reducers/cityInput';
import cityNameReducer from '../reducers/cityName';
import currentDecReducer from '../reducers/currentDec';
import currentLoadingReducer from '../reducers/currentLoading';
import currentLocReducer from '../reducers/currentLoc';
import currentTempReducer from '../reducers/currentTemp';
import decReducer from '../reducers/dec';
import errorReducer from '../reducers/error';
import loadingReducer from '../reducers/loading';
import tempReducer from '../reducers/temp';
import viewCurrentReducer from '../reducers/viewCurrent';
import viewSearchBoxReducer from '../reducers/viewSearchBox';

export const store = configureStore({
  reducer: {
    cityInput: cityInputReducer,
    cityName: cityNameReducer,
    currentDec: currentDecReducer,
    currentLoading: currentLoadingReducer,
    currentLoc: currentLocReducer,
    dec: decReducer,
    error: errorReducer,
    loading: loadingReducer,
    temp: tempReducer,
    currentTemp: currentTempReducer,
    viewCurrent: viewCurrentReducer,
    viewSearchBox: viewSearchBoxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
