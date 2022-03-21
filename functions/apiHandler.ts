import { request } from '../api';
import { WeatherData } from '../models';

export const getData = async (
  cityinput: string | undefined
): Promise<WeatherData> => {
  const endPoint: string = `current?access_key=${
    process && process.env.KEY
  }&query=${cityinput}`;

  return await request.get(endPoint);
};
