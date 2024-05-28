export function bankersRound(number: number, precision: number): number {
  const factor = Math.pow(10, precision);
  const n = number * factor;
  const i = Math.floor(n);
  const f = n - i;
  const e = 1e-14; // Small epsilon to handle floating-point precision issues
  if (f > 0.5 - e && f < 0.5 + e) {
    // Check if fraction part is exactly 0.5
    return (i % 2 === 0 ? i : i + 1) / factor; // Round to nearest even number
  } else {
    return Math.round(n) / factor; // Regular rounding for other cases
  }
}
