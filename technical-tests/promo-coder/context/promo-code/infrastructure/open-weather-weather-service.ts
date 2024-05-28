import { WeatherServiceError } from "../domain/exception/weather-service-error";
import type {
  Weather,
  WeatherService,
} from "../domain/restriction/weather-service";

type OpenWeatherMapWeather = {
  main: { temp: number };
  weather: { main: string }[];
};

export class OpenWeatherMapWeatherService implements WeatherService {
  async getWeather(town: string): Promise<Weather> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${Bun.env["WEATHER_API_KEY"]}&units=metric`;

    try {
      const jsonResponse = await fetch(url);
      const data = await jsonResponse.json();
      const weather = data as OpenWeatherMapWeather;
      const temperature = weather.main.temp;
      const mainWeather = weather.weather[0].main;

      return { temperature, main: mainWeather };
    } catch (error) {
      console.error("Error fetching weather", error);
      throw new WeatherServiceError(town);
    }

    // return fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const weather = data as OpenWeatherMapWeather;
    //     const temperature = weather.main.temp;
    //     const mainWeather = weather.weather[0].main;

    //     return { temperature, main: mainWeather };
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching weather", error);
    //     throw new WeatherServiceError(town);
    //   });
  }
}
