import type { PromoCodeData } from "../domain/promo-code";
import type { PromoCodeRepository } from "../domain/promo-code-repository";

export class PromoCodeCreator {
  constructor(private readonly promoCodeRepository: PromoCodeRepository) {}

  async run(promoCodeData: PromoCodeData): Promise<void> {
    
    await this.promoCodeRepository.save(promoCodeData);
  }
}
