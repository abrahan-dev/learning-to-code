import { bankersRound } from '@context/reconciliation/domain/bankers-round';

describe('bankersRound', () => {
  it('should round up when the decimal is greater than or equal to 0.50', () => {
    // eslint-disable-next-line prettier/prettier
    expect(bankersRound(1.50, 0)).toBe(2);
    expect(bankersRound(2.51, 0)).toBe(3);
  });

  it('should round down when the decimal is less than 0.50', () => {
    // eslint-disable-next-line prettier/prettier
    expect(bankersRound(2.40, 0)).toBe(2);
    expect(bankersRound(1.49, 0)).toBe(1);
  });

  it('should round to the specified precision', () => {
    expect(bankersRound(1.234, 2)).toBe(1.23);
    expect(bankersRound(2.567, 2)).toBe(2.57);
    expect(bankersRound(3.891, 2)).toBe(3.89);
  });
});
