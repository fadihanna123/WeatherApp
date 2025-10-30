// @ts-check
import React, { FC } from "react";
import { Provider } from "react-redux";

// Components
import Layout from "@app/Layout";
import { store } from "@redux/app";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
