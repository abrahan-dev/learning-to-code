import { test, describe, expect } from "bun:test";
import { PromoCodeCreator } from "../../../../context/promo-code/application/promo-code-creator";
import type { PromoCodeData } from "../../../../context/promo-code/domain/promo-code";
import { MockPromoCodeRepository } from "../infrastructure/mock-promo-code-repository";

describe("Promo code creator:", async () => {
  test("Promo code is created", async () => {
    const promoCodeRepository = new MockPromoCodeRepository();
    const promoCodeCreator = new PromoCodeCreator(promoCodeRepository);
    const promoCodeData: PromoCodeData = {
      name: "TestCode",
      advantage: { percent: 10 },
      restrictions: [
        {
          date: {
            after: "2019-01-01",
            before: "2020-06-30",
          },
        },
      ],
    };

    expect(async () => {
      await promoCodeCreator.run(promoCodeData);
    }).not.toThrowError();
  });
});
