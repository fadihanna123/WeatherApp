import { getData } from './apiHandler';
import { checkIfNoInput } from './checkIfNoInput';

const getWeather = async (
  setLoading: ((loading: boolean) => void) | undefined,
  cityinput: string | undefined,
  setView: ((view: boolean) => void) | undefined,
  setError: ((error: string) => void) | undefined,
  setTemp: ((temp: number) => void) | undefined,
  setCityName: ((cityName: string) => void) | undefined,
  setDec: ((dec: string) => void) | undefined,
  setCityInput: ((cityinput: string) => void) | undefined
): Promise<void> => {
  try {
    setLoading && setLoading(true);

    const data = await getData(cityinput);

    checkIfNoInput(
      data,
      cityinput,
      setView,
      setError,
      setTemp,
      setCityName,
      setDec,
      setCityInput
    );
  } catch (err) {
    setError && setError("There is no such city in the world....");
  } finally {
    setLoading && setLoading(false);
  }
};

export { getWeather };
