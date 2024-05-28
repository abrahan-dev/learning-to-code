export type Weather = {
  temperature: number;
  main: string;
};

export interface WeatherService {
  getWeather(town: string): Promise<Weather>;
}
