import type { PromoCodeData } from "./promo-code";

export interface PromoCodeRepository {
  save(promoCodeData: PromoCodeData): Promise<void>;

  findByName(name: string): Promise<PromoCodeData | null>;
}
