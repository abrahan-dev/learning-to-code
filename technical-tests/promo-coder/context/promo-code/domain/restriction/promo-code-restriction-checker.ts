import { UnknownRestrictionType } from "../exception/unknown-restriction-type";
import {
  SingleRestrictionType,
  type SingleRestriction,
  type PromoCodeValidationArguments,
  type RestrictionAge,
  type RestrictionDate,
  type RestrictionWeather,
} from "../promo-code";
import { AgeRestrictionChecker } from "./checkers/age-restriction-checker";
import { DateRestrictionChecker } from "./checkers/date-restriction-checker";
import { WeatherRestrictionChecker } from "./checkers/weather-restriction-checker";
import { RestrictionRangeChecker } from "./restriction-range-checker";
import type { WeatherService } from "./weather-service";

export type RestrictionCheckerValidation = { isMet: boolean; reason: string };

export interface RestrictionChecker {
  isMet(
    promoCodeValidationArguments: PromoCodeValidationArguments
  ): RestrictionCheckerValidation;
}

export class PromoCodeRestrictionChecker {
  constructor(private readonly weatherService: WeatherService) {}

  public createFromRestriction(
    restriction: SingleRestriction
  ): RestrictionChecker | never {
    try {
      switch (this.restrictionType(restriction)) {
        case SingleRestrictionType.AGE:
          return new AgeRestrictionChecker(
            restriction as RestrictionAge,
            new RestrictionRangeChecker()
          );
        case SingleRestrictionType.DATE:
          return new DateRestrictionChecker(restriction as RestrictionDate);
        case SingleRestrictionType.WEATHER:
          return new WeatherRestrictionChecker(
            restriction as RestrictionWeather,
            this.weatherService,
            new RestrictionRangeChecker()
          );
      }
    } catch (e) {
      if (e instanceof UnknownRestrictionType) {
        console.error(e);
      }
      throw e;
    }
  }

  private restrictionType(
    restriction: SingleRestriction
  ): SingleRestrictionType {
    if (restriction.hasOwnProperty("age")) {
      return SingleRestrictionType.AGE;
    }
    if (restriction.hasOwnProperty("date")) {
      return SingleRestrictionType.DATE;
    }
    if (restriction.hasOwnProperty("weather")) {
      return SingleRestrictionType.WEATHER;
    }

    throw new UnknownRestrictionType(restriction);
  }
}
