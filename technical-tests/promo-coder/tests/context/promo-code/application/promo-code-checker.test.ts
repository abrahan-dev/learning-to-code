import { test, describe, expect } from "bun:test";
import { PromoCodeChecker } from "../../../../context/promo-code/application/promo-code-checker";
import { MockPromoCodeRepository } from "../infrastructure/mock-promo-code-repository";
import { PromoCodeNotFound } from "../../../../context/promo-code/domain/exception/promo-code-not-found";
import { PromoCodeDataMother } from "../domain/promo-code-data-mother";
import { MockWeatherService } from "../infrastructure/mock-weather-service";

describe("Promo code checker:", async () => {
  test("Exception PromoCodeNotFound is thrown if promo code does not exist", async () => {
    const promoCodeRepository = new MockPromoCodeRepository();
    const promoCodeChecker = new PromoCodeChecker(
      promoCodeRepository,
      new MockWeatherService()
    );

    const promoCodeValidation = {
      promocode_name: "TestCode",
      arguments: {
        age: 25,
        town: "Lyon",
      },
    };

    expect(async () => {
      await promoCodeChecker.run(promoCodeValidation);
    }).toThrow(PromoCodeNotFound);
  });

  test("returns the advantage if the promo code met the conditions", async () => {
    const promoCodeRepository = new MockPromoCodeRepository();
    promoCodeRepository.save(PromoCodeDataMother.create("TestCode"));
    const promoCodeChecker = new PromoCodeChecker(
      promoCodeRepository,
      new MockWeatherService()
    );

    const promoCodeValidation = {
      promocode_name: "TestCode",
      arguments: {
        age: 25,
        town: "Lyon",
      },
    };

    const result = await promoCodeChecker.run(promoCodeValidation);

    expect(result.isValid).toBe(true);
    expect(result.reasons).toEqual([]);
    expect(result.advantage).toEqual({ percent: 20 });
  });
});
