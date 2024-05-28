import { ReconcilerRequest } from '../application/reconciler-request';

export function normalizeTransactions(
  request: ReconcilerRequest,
): ReconcilerRequest {
  // Sort the transactions by date
  request.transactions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  // Remove duplicated transactions
  const uniqueTransactions = [];
  const seenIds = new Set();
  for (const transaction of request.transactions) {
    if (!seenIds.has(transaction.id)) {
      uniqueTransactions.push(transaction);
      seenIds.add(transaction.id);
    }
  }
  request.transactions = uniqueTransactions;

  return request;
}
