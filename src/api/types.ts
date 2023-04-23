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
