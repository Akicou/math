export function roundTo(value: number, precision: number): number {
  const factor = 1.0 / precision;
  const scaledUp = value * factor;
  const rounded = Math.round(scaledUp);
  const scaledDown = rounded / factor;
  return scaledDown;
}
