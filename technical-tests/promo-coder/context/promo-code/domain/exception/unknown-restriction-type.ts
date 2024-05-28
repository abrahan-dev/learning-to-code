import type { SingleRestriction } from "../promo-code";

export class UnknownRestrictionType extends Error {
  constructor(restriction: SingleRestriction) {
    super(`Unknown restriction type: ${JSON.stringify(restriction)}`);
  }
}
