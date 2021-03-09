export interface WeatherData {
  request: {
    type: string;
    query: string;
    language: string;
    unit: string;
  };
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
    utc_offset: string;
  };
  current: {
    observation_time: string;
    temperature: number;
    weather_code: number;
    weather_icons: [string];
    weather_descriptions: [string];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: -3;
    uv_index: number;
    visibility: number;
    is_day: string;
  };
}

export interface Props {
  cityinput?: string;
  setCityInput?: (cityinput: string) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  view?: boolean;
  setView?: (view: boolean) => void;
  dec?: string;
  setDec?: (dec: string) => void;
  cityName?: string;
  setCityName?: (cityName: string) => void;
  temp?: number;
  setTemp?: (temp: number) => void;
  Error?: string;
  setError?: (error: string) => void;
}
