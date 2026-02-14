import { getData } from "./apiHandler";
import { checkIfNoInput } from "./checkIfNoInput";

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all weather data based on city value.
 * @param dispatch - Dispatch
 * @param cityInput - City value.
 */

export const getWeather = async (
  cityInput: string | undefined,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setViewSearchBox: (viewSearchBox: boolean) => void,
  setTemp: (temp: number) => void,
  setCityName: (cityName: string) => void,
  setDec: (dec: string) => void,
  setCityInput: (cityInput: string) => void,
): Promise<void> => {
  try {
    setLoading(true);

    const data = (await getData(cityInput)) as unknown as WeatherData;

    console.log("Response: ", JSON.stringify(data, null, "\t"));

    checkIfNoInput(
      data,
      cityInput,
      setViewSearchBox,
      setError,
      setTemp,
      setCityName,
      setDec,
      setCityInput,
    );
  } catch (err) {
    setError("There is no such city in the world....");
  } finally {
    setLoading(false);
  }
};
