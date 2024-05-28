import type { RestrictionRange } from "../promo-code";

export class RestrictionRangeChecker {
  public isWithinRange(restriction: RestrictionRange, value: number): boolean {
    
    if (restriction.gt && value <= restriction.gt) {
      return false;
    }
    if (restriction.lt && value >= restriction.lt) {
      return false;
    }
    if (restriction.eq && value !== restriction.eq) {
      return false;
    }

    return true;
  }
}
