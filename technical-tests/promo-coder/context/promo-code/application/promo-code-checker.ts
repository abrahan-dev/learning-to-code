import { PromoCodeNotFound } from "../domain/exception/promo-code-not-found";
import {
  PromoCode,
  type PromoCodeDataAdvantage,
  type PromoCodeValidation,
} from "../domain/promo-code";
import type { PromoCodeRepository } from "../domain/promo-code-repository";
import { PromoCodeRestrictionChecker } from "../domain/restriction/promo-code-restriction-checker";
import type { WeatherService } from "../domain/restriction/weather-service";

export class PromoCodeChecker {
  constructor(
    private readonly promoCodeRepository: PromoCodeRepository,
    private readonly weatherService: WeatherService
  ) {}

  async run(promoCodeValidation: PromoCodeValidation): Promise<{
    isValid: boolean;
    reasons: string[];
    advantage?: PromoCodeDataAdvantage;
  }> {
    const promoCodeData = await this.promoCodeRepository.findByName(
      promoCodeValidation.promocode_name
    );

    if (!promoCodeData) {
      throw new PromoCodeNotFound(promoCodeValidation.promocode_name);
    }

    const promoCode = PromoCode.createFromData(
      promoCodeData,
      new PromoCodeRestrictionChecker(this.weatherService)
    );

    const result = await promoCode.metValidation(promoCodeValidation);

    return {
      isValid: result.isValid,
      reasons: result.reasons,
      advantage: result.isValid ? promoCode.getPromoCodeAdvantage() : undefined,
    };
  }
}
