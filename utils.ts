export function roundTo(value: number, precision: number): number {
  const factor = 1.0 / precision;
  const scaledUp = value * factor;
  const rounded = Math.round(scaledUp);
  const scaledDown = rounded / factor;
  return scaledDown;
}

export function gcdBruteForce(a: number, b: number): number {
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
}

export function gcdEuclid(a: number, b: number): number {
  if (a === b) return a;
  const c = Math.max(a, b) - Math.min(a, b);
  return gcdEuclid(Math.min(a, b), c);
}
