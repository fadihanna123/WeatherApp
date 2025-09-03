// @ts-check
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Components
import Layout from '@app/Layout';
import { store } from '@redux/app';

const App: FC = () => {
  if (!process.env['EXPO_PUBLIC_API_KEY']) {
    throw new Error('API Key is missing? Add them!');
  }

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
