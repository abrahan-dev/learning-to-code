import { ReconcilerRequest } from '../application/reconciler-request';
import { AmountByDate } from './amount-by-date';
import { bankersRound } from './bankers-round';
import { InvalidTransactionOrder } from './errors/invalidTransactionOrder';
import { formatCheckpointDate } from './format-checkpoint-date';

/**
 * @throws InvalidTransactionOrder
 */
export function accumulateSortedTransactionsByDate(
  request: ReconcilerRequest,
): AmountByDate {
  let lastKnownBalanceAmount = request.startingBalance.amount;
  let previousTransactionDate = request.startingBalance.date;
  const accumulatedAmounts: AmountByDate = new Map();

  accumulatedAmounts.set(
    formatCheckpointDate(request.startingBalance.date),
    lastKnownBalanceAmount,
  );

  for (const transaction of request.transactions) {
    const balanceInTransactionDate = formatCheckpointDate(transaction.date);

    if (transaction.date < previousTransactionDate) {
      throw new InvalidTransactionOrder();
    }

    lastKnownBalanceAmount = bankersRound(
      lastKnownBalanceAmount + transaction.amount,
      2,
    );

    accumulatedAmounts.set(balanceInTransactionDate, lastKnownBalanceAmount);

    previousTransactionDate = transaction.date;
  }

  return accumulatedAmounts;
}
