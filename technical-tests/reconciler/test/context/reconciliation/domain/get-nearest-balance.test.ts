import { getNearestPreviousBalance } from '@context/reconciliation/domain/get-nearest-balance';
import { ReconcilerMother } from './reconcilier-mother';

describe('Get nearest previous balance', () => {
  it('should return the nearest previous balance', () => {
    const checkpointDate = '2024-03-18';
    const nearestBalance = getNearestPreviousBalance(
      ReconcilerMother.accumulatedAmounts(),
      checkpointDate,
    );
    expect(nearestBalance).toBe(6.42);
  });

  it('should return an undefined value if the balance for the checkpoint is not found', () => {
    const checkpointDate = '2019-02-15';
    const nearestBalance = getNearestPreviousBalance(
      ReconcilerMother.accumulatedAmounts(),
      checkpointDate,
    );
    expect(nearestBalance).toBe(undefined);
  });
});
