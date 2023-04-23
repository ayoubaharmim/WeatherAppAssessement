export interface WeatherResponse {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    feels_like: number;
    humidity: number;
  };
}

export interface HourlyWeatherData {
  dt: number;
  rain?: any;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
