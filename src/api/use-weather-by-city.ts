import {WeatherResponse} from './types';
import axios from 'axios';
import {API_KEY, WEATHER_API} from './config';
import {useQuery} from 'react-query';

export const getWeatherData = async (
  cityName: string,
): Promise<WeatherResponse> => {
  const {data} = await axios.get<WeatherResponse>(
    `${WEATHER_API}/weather?q=${cityName}&appid=${API_KEY}`,
  );
  return data;
};

export const useWeatherByCity = (cityName: string) =>
  useQuery(['weatherData', cityName], () => getWeatherData(cityName));
