import { ReconcilerRequest } from '../application/reconciler-request';

export function normalizeBalances(
  request: ReconcilerRequest,
): ReconcilerRequest {
  // Sort the balances by date
  request.balances.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  // Remove duplicated balances
  const uniqueBalances = [];
  const seen = new Set();
  for (const balance of request.balances) {
    if (!seen.has(balance.date)) {
      uniqueBalances.push(balance);
      seen.add(balance.date);
    }
  }
  request.balances = uniqueBalances;

  return request;
}
