import axios from 'axios';
import {API_KEY, WEATHER_API} from './config';
import {useQuery} from 'react-query';
import {HourlyWeatherData} from './types';

export const getHourlyWeatherData = async (
  cityName: string,
): Promise<HourlyWeatherData[]> => {
  const {data} = await axios.get(
    `${WEATHER_API}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`,
  );

  return data.list;
};

export const useHourlyWeather = (cityName: string) =>
  useQuery(['hourlyWeatherData', cityName], () =>
    getHourlyWeatherData(cityName),
  );
