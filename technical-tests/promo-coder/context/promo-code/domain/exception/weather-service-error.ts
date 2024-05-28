export class WeatherServiceError extends Error {
  constructor(town: string) {
    super(`Unable to find the weather for: ${town}`);
  }
}
