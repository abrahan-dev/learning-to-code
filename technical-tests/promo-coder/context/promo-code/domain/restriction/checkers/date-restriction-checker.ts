import type { RestrictionDate } from "../../promo-code";
import type { RestrictionChecker, RestrictionCheckerValidation } from "../promo-code-restriction-checker";

export class DateRestrictionChecker implements RestrictionChecker {
  constructor(private readonly restriction: RestrictionDate) {}

  async isMet(): Promise<RestrictionCheckerValidation> {
    const restrictionDate = this.restriction.date;
    const isMet = this.isTodayWithinRange(
      restrictionDate.after,
      restrictionDate.before
    );

    return Promise.resolve({
        isMet,
        reason: isMet ? "" : `Today is not within range`,
    });
  }

  private isTodayWithinRange(after: string, before: string): boolean {
    const today = new Date();
    const afterDate = new Date(after);
    const beforeDate = new Date(before);

    return today > afterDate && today < beforeDate;
  }
}
