declare global {
  interface Address {
    city: string;
    country: string;
    district: string;
    isoCountryCode: string;
    name: string;
    postalCode: string;
    region: string;
    street: string;
    streetNumber: string;
    subregion: string;
    timezone: string;
  }

  interface RequestOfWeatherData {
    type: string;
    query: string;
    language: string;
    unit: string;
  }

  interface LocationOfWeatherData {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
    utc_offset: string;
  }

  interface CurrentOfWeatherData {
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
  }

  interface WeatherData {
    request: RequestOfWeatherData;
    location: LocationOfWeatherData;
    current: CurrentOfWeatherData;
  }
}

export {};
