import { Balance } from '../domain/balance';
import { Transaction } from '../domain/transaction';

export interface ReconcilerRequest {
  startingBalance: Balance;
  transactions: Transaction[];
  balances: Balance[];
}
