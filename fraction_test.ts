import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction toFloat and toString", () => {
  const fraction = new Fraction(1, 2);
  assertEquals(fraction.toFloat(0.01), 0.5);
  assertEquals(fraction.toString(), "1/2");
});

Deno.test("add fractions", () => {
  const fraction = new Fraction(1, 3);
  fraction.add(new Fraction(2, 6));
  assertAlmostEquals(fraction.toFloat(0.01), 0.67);
});

Deno.test("subtract fractions", () => {
  const fraction = new Fraction(5, 6);
  fraction.subtract(new Fraction(1, 6));
  assertAlmostEquals(fraction.toFloat(0.01), 0.67);
});

Deno.test("multiply and divide fractions", () => {
  const f1 = new Fraction(1, 2);
  f1.multiply(new Fraction(2, 3));
  assertEquals(f1.toFloat(0.01), 0.33);
  
  const f2 = new Fraction(1, 2);
  f2.divide(new Fraction(2, 3));
  assertEquals(f2.toFloat(0.01), 0.75);
});

Deno.test("parse valid fraction with decimal denominator", () => {
  const fraction = Fraction.parse("1/0.5");
  assertEquals(fraction.toFloat(0.01), 2.0);
});

Deno.test("parse invalid format throws error", () => {
  assertThrows(() => Fraction.parse("invalid"));
  assertThrows(() => Fraction.parse("1"));
  assertThrows(() => Fraction.parse("abc/2"));
  assertThrows(() => Fraction.parse("1/abc"));
});

Deno.test("constructor and parse with zero denominator throw error", () => {
  assertThrows(() => new Fraction(3, 0));
  assertThrows(() => Fraction.parse("3/0"));
});

Deno.test("cancel trivial fraction stays unchanged", () => {
  const f = new Fraction(1, 3);
  f.cancel();
  assertEquals(f.toString(), "1/3");
});

Deno.test("cancel reduces fraction", () => {
  const f = new Fraction(2, 3); // already reduced by constructor
  f.cancel();
  assertEquals(f.toString(), "2/3");
});

Deno.test("fraction auto-cancels on construction", () => {
  assertEquals(new Fraction(6, 9).toString(), "2/3");
  assertEquals(new Fraction(4, 8).toString(), "1/2");
  assertEquals(new Fraction(10, 5).toString(), "2/1");
});

Deno.test("parse auto-cancels fraction", () => {
  assertEquals(Fraction.parse("6/9").toString(), "2/3");
});