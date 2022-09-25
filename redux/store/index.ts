import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { allReducers } from '../reducers';

export const store = createStore(allReducers, composeWithDevTools());
