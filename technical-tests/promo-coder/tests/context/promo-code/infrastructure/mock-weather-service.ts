import type { Weather, WeatherService } from "../../../../context/promo-code/domain/restriction/weather-service";

export class MockWeatherService implements WeatherService {
  private weather: Weather = {
    temperature: 20,
    main: "Clear",
  };

  async getWeather(): Promise<Weather> {
    return Promise.resolve(this.weather);
  }

  setWeather(weather: Weather) {
    this.weather = weather;
  }
}
