import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';

import Layout from './app/Layout';
import { store } from './redux/store';

const globalHeader: string = 'application/json';
const baseURL: string = 'http://api.weatherstack.com/';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Content-Type'] = globalHeader;

const App: React.FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
