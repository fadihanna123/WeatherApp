import { combineReducers } from 'redux';

import { cityInputReducer } from './cityInput';
import { cityNameReducer } from './cityName';
import { currentDecReducer } from './currentDec';
import { currentLoadingReducer } from './currentLoading';
import { currentLocReducer } from './currentLoc';
import { currentTempReducer } from './currentTemp';
import { decReducer } from './dec';
import { errorReducer } from './error';
import { loadingReducer } from './loading';
import { tempReducer } from './temp';
import { viewCurrentReducer } from './viewCurrent';
import { viewSearchBoxReducer } from './viewSearchBox';

export const allReducers = combineReducers({
  cityInputReducer,
  cityNameReducer,
  currentLocReducer,
  decReducer,
  errorReducer,
  loadingReducer,
  tempReducer,
  viewCurrentReducer,
  viewSearchBoxReducer,
  currentLoadingReducer,
  currentTempReducer,
  currentDecReducer,
});
