export class PromoCodeNotFound extends Error {
  constructor(promoCodeName: string) {
    super(`Promo code not found: ${promoCodeName}`);
  }
}
