// @ts-check
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux/app';

// Components
import Layout from './src/app/Layout';

const App: React.FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
