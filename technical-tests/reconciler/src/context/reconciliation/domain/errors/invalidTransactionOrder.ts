export class InvalidTransactionOrder extends Error {
  constructor() {
    super('Transaction dates must be in ascending order.');
  }
}
