import { BalanceError } from '../domain/reconciliation-result';

export interface ReconcilierResponse {
  errors: BalanceError[];
}
