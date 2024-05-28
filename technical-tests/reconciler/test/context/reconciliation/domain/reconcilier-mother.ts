import { ReconcilerRequest } from '@context/reconciliation/application/reconciler-request';
import { Transaction } from '@context/reconciliation/domain/transaction';
import { chooseRandomElement } from './choose-random-element';
import { Balance } from '@context/reconciliation/domain/balance';

export class ReconcilerMother {
  public static validRequest(): ReconcilerRequest {
    return {
      startingBalance: {
        date: '2024-01-28',
        amount: 10.0,
      },
      transactions: [
        {
          id: '3f4f269c-8180-4c1a-b957-e16fa7c196dd',
          date: '2024-01-29T12:23:06.989Z',
          label: 'Transaction 1 - debit',
          amount: -1.5,
        },
        {
          id: 'caffd62b-d9b3-432f-a845-8ec3fdb92740',
          date: '2024-02-10T20:23:16.111Z',
          label: 'Transaction 2 - credit',
          amount: 0.5,
        },
        {
          id: 'fac25894-22bb-4aa4-9c80-c29a23031a79',
          date: '2024-03-15T08:45:59.145Z',
          label: 'Transaction 3 - debit',
          amount: -2.58,
        },
        {
          id: 'e688e577-49ae-4d71-94a6-d9e0093ba39d',
          date: '2024-04-20T14:19:30.567Z',
          label: 'Transaction 4 - credit',
          amount: 3.21,
        },
      ],
      balances: [
        {
          date: '2024-02-28',
          amount: 9.0,
        },
        {
          date: '2024-03-28',
          amount: 6.42,
        },
        {
          date: '2024-04-28',
          amount: 9.63,
        },
      ],
    };
  }

  public static invalidBalancesRequest(): ReconcilerRequest {
    const request = ReconcilerMother.validRequest();

    request.balances = request.balances.map((balance) => {
      if (balance.date === '2024-03-28') {
        return { date: balance.date, amount: 15.0 };
      }

      return balance;
    });

    return request;
  }

  public static duplicatedBalances(): ReconcilerRequest {
    const request = ReconcilerMother.validRequest();
    request.balances.push(chooseRandomElement<Balance>(request.balances));
    request.balances.push(chooseRandomElement<Balance>(request.balances));

    return request;
  }

  public static duplicatedTransactions(): ReconcilerRequest {
    const request = ReconcilerMother.validRequest();
    request.transactions.push(
      chooseRandomElement<Transaction>(request.transactions),
    );
    request.transactions.push(
      chooseRandomElement<Transaction>(request.transactions),
    );

    return request;
  }

  public static unorderedTransactions(): ReconcilerRequest {
    const request = ReconcilerMother.validRequest();
    request.transactions = request.transactions.reverse();

    return request;
  }

  public static unorderedBalances(): ReconcilerRequest {
    const request = ReconcilerMother.validRequest();
    request.balances = request.balances.reverse();

    return request;
  }

  public static accumulatedAmounts(): Map<string, number> {
    return new Map([
      ['2024-01-28', 10],
      ['2024-01-29', 8.5],
      ['2024-02-10', 9],
      ['2024-03-15', 6.42],
      ['2024-04-20', 9.63],
    ]);
  }
}
