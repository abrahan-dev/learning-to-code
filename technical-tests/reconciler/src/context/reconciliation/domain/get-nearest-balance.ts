import { dateLessOrEqualThanAnother } from '@context/shared/domain/date-less-or-equal-than-another';
import { AmountByDate } from './amount-by-date';

export function getNearestPreviousBalance(
  accumulatedAmounts: AmountByDate,
  checkpointDate: string,
): number | undefined {
  let nearestBalance: number | undefined = undefined;

  for (const [date, amount] of accumulatedAmounts) {
    if (dateLessOrEqualThanAnother(date, checkpointDate)) {
      nearestBalance = amount;
    }
  }

  return nearestBalance;
}
