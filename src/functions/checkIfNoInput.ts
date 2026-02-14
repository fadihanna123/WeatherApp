/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Check if no value exists in text field.
 * @param dispatch - Dispatch
 * @param data - Weatherdata object
 * @param cityInput - City value.
 * @returns Void
 */

export const checkIfNoInput = (
  data: WeatherData,
  cityInput: string | undefined,
  setViewSearchBox: (viewSearchBox: boolean) => void,
  setError: (error: string) => void,
  setTemp: (temp: number) => void,
  setCityName: (cityName: string) => void,
  setDec: (dec: string) => void,
  setCityInput: (cityInput: string) => void,
): void => {
  if (!cityInput) {
    setViewSearchBox(false);

    setError("Start typing first...");
  } else {
    if (
      data.current.temperature &&
      data.location.name &&
      data.current.weather_descriptions[0]
    ) {
      setViewSearchBox(true);

      setTemp(data.current.temperature);

      setCityName(data.location.name);

      setDec(data.current.weather_descriptions[0]);

      setCityInput?.("");
    }
  }
};
