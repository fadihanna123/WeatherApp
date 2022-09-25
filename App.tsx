import axios from 'axios';
import React, { Dispatch, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import Layout from './app/Layout';
import { getCurrentLocation } from './functions';
import { ViewCurrentReducerTypes } from './models';
import { store } from './redux/store';

const globalHeader: string = 'application/json';
const baseURL = 'http://api.weatherstack.com/';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Content-Type'] = globalHeader;

const App: React.FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
