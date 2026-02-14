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

export const checkIfNoInput = ({
  data,
  cityInput,
  setViewSearchBox,
  setTemp,
  setCityName,
  setDec,
  setCityInput,
}: checkIfNoInputFNTypes): void => {
  if (!cityInput) {
    return;
  }

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
};
