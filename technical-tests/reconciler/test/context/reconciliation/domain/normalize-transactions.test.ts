import { ReconcilerRequest } from '@context/reconciliation/application/reconciler-request';
import { ReconcilerMother } from './reconcilier-mother';
import { normalizeTransactions } from '@context/reconciliation/domain/normalize-transactions';

describe('Normalize transactions', () => {
  it('should sort transactions by date', () => {
    const request: ReconcilerRequest = ReconcilerMother.unorderedTransactions();
    const normalizedRequest = normalizeTransactions(request);
    const dates = normalizedRequest.transactions.map(
      (transaction) => transaction.date,
    );
    const isSorted = dates.every(
      (date, index) => index === 0 || date >= dates[index - 1],
    );
    expect(isSorted).toBe(true);
  });

  it('should remove duplicated transactions', () => {
    const request: ReconcilerRequest =
      ReconcilerMother.duplicatedTransactions();
    const normalizedRequest = normalizeTransactions(request);
    const uniqueTransactions = new Set(normalizedRequest.transactions);
    expect(normalizedRequest.transactions.length).toBe(uniqueTransactions.size);
  });
});
