import { WeatherData } from '../models';

const checkIfNoInput = (
  data: WeatherData,
  cityinput: string | undefined,
  setView: ((view: boolean) => void) | undefined,
  setError: ((error: string) => void) | undefined,
  setTemp: ((temp: number) => void) | undefined,
  setCityName: ((cityName: string) => void) | undefined,
  setDec: ((dec: string) => void) | undefined,
  setCityInput: ((cityinput: string) => void) | undefined
): void => {
  if (!cityinput) {
    data.current.temperature && "Done";

    setView && setView(false);

    setError && setError("Start typing first...");
  } else {
    if (
      data.current.temperature &&
      data.location.name &&
      data.current.weather_descriptions[0]
    ) {
      setView && setView(true);

      setTemp && setTemp(data.current.temperature);

      setCityName && setCityName(data.location.name);

      setDec && setDec(data.current.weather_descriptions[0]);

      setCityInput!("");
    }
  }
};

export { checkIfNoInput };
