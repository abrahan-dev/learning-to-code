import { Balance } from './balance';

export type BalanceError = { balance: Balance; reason: string };

export type ReconciliationResult = {
  errors: BalanceError[];
};
