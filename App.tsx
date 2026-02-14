// @ts-check
import React, { FC, useState } from "react";

// Components
import Layout from "@app/Layout";
import { MyGlobalContext } from "@states/index";

const App: FC = () => {
  const [cityInput, setCityInput] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [currentDec, setCurrentDec] = useState<string>("");
  const [currentLoc, setCurrentLoc] = useState<string>("");
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentLoading, setCurrentLoading] = useState<boolean>(false);
  const [viewCurrent, setViewCurrent] = useState<boolean>(false);
  const [dec, setDec] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [viewSearchBox, setViewSearchBox] = useState<boolean>(false);

  return (
    <MyGlobalContext.Provider
      value={{
        cityInput,
        setCityInput,
        cityName,
        setCityName,
        currentDec,
        setCurrentDec,
        currentLoc,
        setCurrentLoc,
        currentTemp,
        setCurrentTemp,
        currentLoading,
        setCurrentLoading,
        viewCurrent,
        setViewCurrent,
        dec,
        setDec,
        temp,
        setTemp,
        error,
        setError,
        loading,
        setLoading,
        viewSearchBox,
        setViewSearchBox,
      }}
    >
      <Layout />
    </MyGlobalContext.Provider>
  );
};

export default App;
