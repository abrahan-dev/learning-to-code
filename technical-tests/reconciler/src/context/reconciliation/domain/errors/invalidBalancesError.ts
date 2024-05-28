import { BalanceError } from '../reconciliation-result';

export class InvalidBalancesError extends Error {
  constructor(public readonly reasons: BalanceError[]) {
    super('Balances are not correct');
  }
}
