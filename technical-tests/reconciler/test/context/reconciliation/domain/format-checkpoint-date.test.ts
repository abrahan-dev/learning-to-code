import { formatCheckpointDate } from '@context/reconciliation/domain/format-checkpoint-date';

describe('formatCheckpointDate', () => {
  it('should format the date correctly', () => {
    const inputDate = '2022-01-01T00:00:00.000Z';
    const expectedOutput = '2022-01-01';

    const result = formatCheckpointDate(inputDate);

    expect(result).toEqual(expectedOutput);
  });
});
