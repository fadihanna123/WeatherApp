import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';

import Layout from './app/Layout';
import { store } from './redux/store';

const globalHeader: string = 'application/json';

axios.defaults.baseURL = process && process.env.BASE_URL;
axios.defaults.headers.common['Content-Type'] = globalHeader;

const App: React.FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
