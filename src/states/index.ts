import { createContext, useContext } from "react";

export type GlobalContent = {
  cityInput: string;
  setCityInput: (cityInput: string) => void;
  cityName: string;
  setCityName: (cityName: string) => void;
  currentDec: string;
  setCurrentDec: (currentDec: string) => void;
  currentLoc: string;
  setCurrentLoc: (currentLoc: string) => void;
  currentTemp: number;
  setCurrentTemp: (currentTemp: number) => void;
  currentLoading: boolean;
  setCurrentLoading: (currentLoading: boolean) => void;
  viewCurrent: boolean;
  setViewCurrent: (viewCurrent: boolean) => void;
  dec: string;
  setDec: (dec: string) => void;
  temp: number;
  setTemp: (temp: number) => void;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  viewSearchBox: boolean;
  setViewSearchBox: (viewSearchBox: boolean) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  cityInput: "",
  setCityInput: () => {},
  cityName: "",
  setCityName: () => {},
  currentDec: "",
  setCurrentDec: () => {},
  currentLoc: "",
  setCurrentLoc: () => {},
  currentTemp: 0,
  setCurrentTemp: () => {},
  currentLoading: false,
  setCurrentLoading: () => {},
  viewCurrent: false,
  setViewCurrent: () => {},
  dec: "",
  setDec: () => {},
  temp: 0,
  setTemp: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
  viewSearchBox: false,
  setViewSearchBox: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
