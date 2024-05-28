import { PromoCodeRestrictionChecker } from "./restriction/promo-code-restriction-checker";

export type PromoCodeValidationArguments = {
  age: number | null;
  town: string | null;
};

export type PromoCodeValidation = {
  promocode_name: string;
  arguments: PromoCodeValidationArguments;
};

export type RestrictionDate = {
  date: {
    after: string;
    before: string;
  };
};

export type RestrictionRange = {
  lt: number | null;
  gt: number | null;
  eq: number | null;
};

export type RestrictionAge = {
  age: RestrictionRange;
};

export type RestrictionWeather = {
  weather: {
    is: "clear" | "cloudy" | "rainy" | "snowy" | "windy" | "foggy" | null;
    temp: RestrictionRange;
  };
};

export type RestrictionTypes =
  | RestrictionAge
  | RestrictionWeather
  | RestrictionDate
  | BooleanGroup;

export type SingleRestriction = Exclude<RestrictionTypes, BooleanGroup>;

export type Restrictions = Array<RestrictionTypes>;

export enum BooleanRestrictionType {
  OR = "or",
  AND = "and",
}

export enum SingleRestrictionType {
  AGE = "age",
  WEATHER = "weather",
  DATE = "date",
}

export type BooleanGroup = {
  or?: Restrictions;
  and?: Restrictions;
};

export type GroupOfRestrictions = {
  restrictions: Restrictions;
  type: BooleanRestrictionType;
};

export type PromoCodeDataAdvantage = {
  percent: number;
};

export type PromoCodeData = {
  name: string;
  advantage: PromoCodeDataAdvantage;
  restrictions: Restrictions;
};

export class PromoCode {
  private reasons: string[] = [];

  private constructor(
    private readonly promoCodeData: PromoCodeData,
    private readonly promoCodeRestrictionChecker: PromoCodeRestrictionChecker
  ) {}

  public async metValidation(
    promoCodeValidation: PromoCodeValidation
  ): Promise<{ isValid: boolean; reasons: string[] }> {
    if (this.promoCodeData.name !== promoCodeValidation.promocode_name) {
      this.reasons.push("Promo code not found");

      return { isValid: false, reasons: this.reasons };
    }

    // at root level, we have an AND group
    const groupOfRestrictions: GroupOfRestrictions = {
      restrictions: this.promoCodeData.restrictions,
      type: BooleanRestrictionType.AND,
    };

    const isValid =
      (await this.restrictionsAreMet(
        groupOfRestrictions,
        promoCodeValidation.arguments
      )) === 1;

    return {
      isValid,
      reasons: isValid ? [] : this.reasons.filter((reason) => reason.length > 0),
    };
  }

  public getPromoCodeAdvantage(): PromoCodeDataAdvantage {
    return this.promoCodeData.advantage;
  }

  public static createFromData(
    promoCodeData: PromoCodeData,
    promoCodeRestrictionChecker: PromoCodeRestrictionChecker
  ) {
    return new PromoCode(promoCodeData, promoCodeRestrictionChecker);
  }

  private async restrictionsAreMet(
    groupOfRestrictions: GroupOfRestrictions,
    validationArguments: PromoCodeValidationArguments
  ): Promise<number> {
    let groupOfRestrictionsAreMet: number | undefined;

    for (const restriction of groupOfRestrictions.restrictions) {
      let restrictionIsMet: number | undefined;
      const innerGroupOfRestrictions =
        this.extractGroupOfRestrictions(restriction);

      const hasInnerGroupOfRestrictions =
        innerGroupOfRestrictions &&
        innerGroupOfRestrictions.restrictions.length > 0;

      if (hasInnerGroupOfRestrictions) {
        restrictionIsMet = await this.restrictionsAreMet(
          innerGroupOfRestrictions,
          validationArguments
        );
      } else {
        restrictionIsMet = await this.restrictionIsMet(
          restriction as SingleRestriction,
          validationArguments
        );
      }

      if (groupOfRestrictions.type) {
        groupOfRestrictionsAreMet = this.mergeResults(
          groupOfRestrictions.type,
          restrictionIsMet,
          groupOfRestrictionsAreMet
        );
      }
    }

    return groupOfRestrictionsAreMet || 0;
  }

  private async restrictionIsMet(
    restriction: SingleRestriction,
    validationArguments: PromoCodeValidationArguments
  ): Promise<number> {
    const promoCodeChecker =
      this.promoCodeRestrictionChecker.createFromRestriction(restriction);
    const isMet = await promoCodeChecker.isMet(validationArguments);
    this.reasons.push(isMet.reason);

    return isMet.isMet ? 1 : 0;
  }

  private extractGroupOfRestrictions(
    restriction: RestrictionTypes
  ): GroupOfRestrictions | null {
    const isOr = Object.prototype.hasOwnProperty.call(
      restriction,
      BooleanRestrictionType.OR
    );
    const isAnd = Object.prototype.hasOwnProperty.call(
      restriction,
      BooleanRestrictionType.AND
    );

    if (!isOr && !isAnd) {
      return null;
    }

    if (isOr) {
      const booleanRestriction = restriction as BooleanGroup;

      return {
        restrictions: booleanRestriction.or || [],
        type: BooleanRestrictionType.OR,
      };
    }

    if (isAnd) {
      const booleanRestriction = restriction as BooleanGroup;

      return {
        restrictions: booleanRestriction.and || [],
        type: BooleanRestrictionType.AND,
      };
    }

    return null;
  }

  private mergeResults(
    booleanRestrictionType: BooleanRestrictionType,
    newResult: number,
    collector: number | undefined
  ) {
    if (booleanRestrictionType === BooleanRestrictionType.AND) {
      if (collector === undefined) {
        collector = 1;
      }
      collector &= newResult;
    }

    if (booleanRestrictionType === BooleanRestrictionType.OR) {
      if (collector === undefined) {
        collector = 0;
      }
      collector |= newResult;
    }

    return collector;
  }
}
