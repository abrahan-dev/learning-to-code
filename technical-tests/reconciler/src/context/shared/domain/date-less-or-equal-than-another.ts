export function dateLessOrEqualThanAnother(
  date1: string,
  date2: string,
): boolean {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1 <= d2;
}
