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
  currentTemp: number | null;
  setCurrentTemp: (currentTemp: number | null) => void;
  dec: string;
  setDec: (dec: string) => void;
  temp: number;
  setTemp: (temp: number) => void;
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
  currentTemp: null,
  setCurrentTemp: () => {},
  dec: "",
  setDec: () => {},
  temp: 0,
  setTemp: () => {},
  loading: false,
  setLoading: () => {},
  viewSearchBox: false,
  setViewSearchBox: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
