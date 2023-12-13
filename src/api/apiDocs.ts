// THIS IS JUST A EXAMPE OF API...
// @ts-nocheck

const weather = {
  request: {
    type: 'City',
    query: 'CityName, CountryName',
    language: 'Lang',
    unit: 'm',
  },
  location: {
    name: 'CityName',
    country: 'CountryName',
    region: 'CountyName',
    lat: 'XX.XXX',
    lon: 'XX.XXX',
    timezone_id: 'Continent/CapitalName',
    localtime: 'Date Time',
    localtime_epoch: 2786585414,
    utc_offset: '2.0',
  },
  current: {
    observation_time: '10:38 PM',
    temperature: -1,
    weather_code: 323,
    weather_icons: [
      'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png',
    ],
    weather_descriptions: ['Overcast'],
    wind_speed: 17,
    wind_degree: 40,
    wind_dir: 'NE',
    pressure: 1011,
    precip: 0,
    humidity: 86,
    cloudcover: 100,
    feelslike: -7,
    uv_index: 1,
    visibility: 10,
    is_day: 'no',
  },
};
