import { accumulateSortedTransactionsByDate } from '../domain/accumulate-sorted-transactions-by-date';
import { InvalidBalancesError } from '../domain/errors/invalidBalancesError';
import { formatCheckpointDate } from '../domain/format-checkpoint-date';
import { ReconcilerRequest } from './reconciler-request';
import { getNearestPreviousBalance } from '../domain/get-nearest-balance';
import { normalizeTransactions } from '../domain/normalize-transactions';
import { Reconciler } from '../domain/reconciler';
import { normalizeBalances } from '../domain/normalize-balances';

export class BalanceReconciler implements Reconciler {
  run(request: ReconcilerRequest): void {
    const normalizedRequest = normalizeBalances(normalizeTransactions(request));

    const accumulatedAmounts =
      accumulateSortedTransactionsByDate(normalizedRequest);

    const result = { errors: [] };

    for (const balance of request.balances) {
      const checkpointDate = formatCheckpointDate(balance.date);
      const calculatedBalance = getNearestPreviousBalance(
        accumulatedAmounts,
        checkpointDate,
      );
      const calculatedBalanceFound = calculatedBalance !== undefined;
      const balancesAreEqual = calculatedBalance === balance.amount;

      if (!calculatedBalanceFound || !balancesAreEqual) {
        result.errors.push({
          balance,
          reason: calculatedBalanceFound
            ? `Expected ${balance.amount.toFixed(2)}, but found ${calculatedBalance.toFixed(2)}`
            : 'No balance found for the checkpoint date',
        });
      }
    }

    if (result.errors.length > 0) {
      throw new InvalidBalancesError(result.errors);
    }
  }
}
