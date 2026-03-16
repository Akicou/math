import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  const fraction = new Fraction(1, 1);
  const float = fraction.toFloat(0.1);
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  const fraction = new Fraction(2, 3);
  const float = fraction.toFloat(0.01);
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);
  left.add(right);
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("subtract fractions", () => {
  const fraction = new Fraction(5, 6);
  const other = new Fraction(1, 6);
  fraction.subtract(other);
  assertEquals(fraction.toFloat(0.01), 0.67);
});

Deno.test("multiply fractions", () => {
  const fraction = new Fraction(1, 2);
  const other = new Fraction(2, 3);
  fraction.multiply(other);
  assertEquals(fraction.toFloat(0.01), 0.33);
});

Deno.test("divide fractions", () => {
  const fraction = new Fraction(1, 2);
  const other = new Fraction(2, 3);
  fraction.divide(other);
  assertEquals(fraction.toFloat(0.01), 0.75);
});

Deno.test("toString returns fraction string", () => {
  const fraction = new Fraction(1, 2);
  assertEquals(fraction.toString(), "1/2");
});

Deno.test("parse valid fraction string", () => {
  const fraction = Fraction.parse("3/4");
  assertEquals(fraction.toFloat(0.01), 0.75);
});

Deno.test("parse fraction with decimal denominator", () => {
  const fraction = Fraction.parse("1/0.5");
  assertEquals(fraction.toFloat(0.01), 2.0);
});

Deno.test("parse invalid format throws error", () => {
  assertThrows(() => Fraction.parse("invalid"));
});

Deno.test("parse missing slash throws error", () => {
  assertThrows(() => Fraction.parse("1"));
});

Deno.test("parse non-numeric numerator throws error", () => {
  assertThrows(() => Fraction.parse("abc/2"));
});

Deno.test("parse non-numeric denominator throws error", () => {
  assertThrows(() => Fraction.parse("1/abc"));
});
