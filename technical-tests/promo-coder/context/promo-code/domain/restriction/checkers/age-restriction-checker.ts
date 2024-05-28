import type {
  RestrictionAge,
  PromoCodeValidationArguments,
} from "../../promo-code";
import type { RestrictionChecker, RestrictionCheckerValidation } from "../promo-code-restriction-checker";
import type { RestrictionRangeChecker } from "../restriction-range-checker";

export class AgeRestrictionChecker implements RestrictionChecker {
  constructor(
    private readonly restriction: RestrictionAge,
    private readonly restrictionRangeChecker: RestrictionRangeChecker
  ) {}

  async isMet(
    validationArguments: PromoCodeValidationArguments
  ): Promise<RestrictionCheckerValidation> {
    const age = validationArguments.age;
    const restrictionAge = this.restriction.age;

    if (!age) {
      return {
        isMet: false,
        reason: "Age is required for age restriction",
      };
    }

    const isMet = this.restrictionRangeChecker.isWithinRange(restrictionAge, age);

    return Promise.resolve({
        isMet,
        reason: isMet ? undefined : `Age ${age} is not within range`,
    });
  }
}
