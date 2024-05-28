import type {
  RestrictionWeather,
  PromoCodeValidationArguments,
} from "../../promo-code";
import type {
  RestrictionChecker,
  RestrictionCheckerValidation,
} from "../promo-code-restriction-checker";
import type { RestrictionRangeChecker } from "../restriction-range-checker";
import type { WeatherService, Weather } from "../weather-service";

export class WeatherRestrictionChecker implements RestrictionChecker {
  constructor(
    private readonly restriction: RestrictionWeather,
    private readonly weatherService: WeatherService,
    private readonly restrictionRangeChecker: RestrictionRangeChecker
  ) {}

  isMet(
    validationArguments: PromoCodeValidationArguments
  ): RestrictionCheckerValidation {
    const town = validationArguments.town;

    if (!town) {
      console.error("Town is required for weather restriction");
      return {
        isMet: false,
        reason: "Town is required for weather restriction",
      };
    }

    const currentWeather = this.weatherService.getWeather(town);

    return currentWeather.then((currentWeather: Weather) => {
      if (
        this.restriction.weather.is?.toLowerCase() !==
        currentWeather.main.toLocaleLowerCase()
      ) {
        return {
          isMet: false,
          reason: `Current weather in ${town}: ${currentWeather.main}. Weather is not ${this.restriction.weather.is}`,
        };
      }

      const isWithinRange = this.restrictionRangeChecker.isWithinRange(
        this.restriction.weather.temp,
        currentWeather.temperature
      );

      return {
        isMet: isWithinRange,
        reason: isWithinRange
          ? ""
          : `Current temperature ${currentWeather.temperature} in ${town} is not within range`,
      };
    });
  }
}
