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

export const getWeather = async ({
  cityInput,
  setViewSearchBox,
  setTemp,
  setCityName,
  setDec,
  setCityInput,
}: getWeatherFNTypes): Promise<void> => {
  try {
    const data = (await getData(cityInput)) as unknown as WeatherData;

    console.log("Response: ", JSON.stringify(data, null, "\t"));

    checkIfNoInput({
      data,
      cityInput,
      setViewSearchBox,
      setTemp,
      setCityName,
      setDec,
      setCityInput,
    });
  } catch (err) {
    console.log(err);
  }
};
