import { accumulateSortedTransactionsByDate } from '../../../../src/context/reconciliation/domain/accumulate-sorted-transactions-by-date';
import { ReconcilerRequest } from '../../../../src/context/reconciliation/application/reconciler-request';
import { AmountByDate } from '../../../../src/context/reconciliation/domain/amount-by-date';
import { ReconcilerMother } from './reconcilier-mother';
import { InvalidTransactionOrder } from '@context/reconciliation/domain/errors/invalidTransactionOrder';

describe('accumulateSortedTransactionsByDate', () => {
  it('should return the accumulated amount by date', () => {
    const request: ReconcilerRequest = ReconcilerMother.validRequest();
    const result: AmountByDate = accumulateSortedTransactionsByDate(request);
    const expected: AmountByDate = new Map([
      ['2024-01-28', 10],
      ['2024-01-29', 8.5],
      ['2024-02-10', 9],
      ['2024-03-15', 6.42],
      ['2024-04-20', 9.63],
    ]);
    expect(result).toEqual(expected);
  });

  it('should throw InvalidTransactionOrder error when transactions are not sorted by date', () => {
    const request: ReconcilerRequest = ReconcilerMother.unorderedTransactions();

    expect(() => accumulateSortedTransactionsByDate(request)).toThrow(
      InvalidTransactionOrder,
    );
  });
});
