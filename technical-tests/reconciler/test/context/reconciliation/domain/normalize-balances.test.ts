import { ReconcilerRequest } from '@context/reconciliation/application/reconciler-request';
import { normalizeBalances } from '@context/reconciliation/domain/normalize-balances';
import { ReconcilerMother } from './reconcilier-mother';

describe('Normalize balances', () => {
  it('should sort balances by date', () => {
    const request: ReconcilerRequest = ReconcilerMother.unorderedBalances();
    const normalizedRequest = normalizeBalances(request);
    const dates = normalizedRequest.balances.map((balance) => balance.date);
    const isSorted = dates.every(
      (date, index) => index === 0 || date >= dates[index - 1],
    );
    expect(isSorted).toBe(true);
  });

  it('should remove duplicated balances', () => {
    const request: ReconcilerRequest = ReconcilerMother.duplicatedBalances();
    const normalizedRequest = normalizeBalances(request);
    const uniqueBalances = new Set(normalizedRequest.balances);
    expect(normalizedRequest.balances.length).toBe(uniqueBalances.size);
  });
});
