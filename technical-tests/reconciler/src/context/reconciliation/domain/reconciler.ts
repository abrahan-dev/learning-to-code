import { ReconcilerRequest } from '../application/reconciler-request';

export interface Reconciler {
  /**
   * @throws InvalidBalancesError
   */
  run(request: ReconcilerRequest): void;
}
