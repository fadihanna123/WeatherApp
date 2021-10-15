import axios from "axios";
import React from "react";

import Layout from "./app/Layout";
import { baseURL } from "./utils";

axios.defaults.baseURL = "http://api.weatherstack.com/";
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => <Layout />;

export default App;
