import axios from "axios";
import React from "react";

import Layout from "./app/Layout";

const globalHeader: string = "application/json";

axios.defaults.baseURL = process && process.env.BASE_URL;
axios.defaults.headers.common["Content-Type"] = globalHeader;

const App: React.FC = () => <Layout />;

export default App;
