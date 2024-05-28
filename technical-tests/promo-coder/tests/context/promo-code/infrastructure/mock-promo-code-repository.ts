import { type PromoCodeData } from "../../../../context/promo-code/domain/promo-code";
import type { PromoCodeRepository } from "../../../../context/promo-code/domain/promo-code-repository";

export class MockPromoCodeRepository implements PromoCodeRepository {
  private readonly promoCodes = new Map<string, PromoCodeData>();

  async save(promoCodeData: PromoCodeData): Promise<void> {
    this.promoCodes.set(promoCodeData.name, promoCodeData);
  }

  findByName(name: string): Promise<PromoCodeData | null> {
    return Promise.resolve(this.promoCodes.get(name) ?? null);
  }
}
