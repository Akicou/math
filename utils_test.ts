import { assertEquals } from "@std/assert";
import { gcdBruteForce, gcdEuclid, roundTo } from "./utils.ts";

Deno.test("round to different precisions", () => {
  assertEquals(roundTo(1.234, 0.1), 1.2);
  assertEquals(roundTo(1.234, 0.01), 1.23);
  assertEquals(roundTo(5.7, 1), 6);
});

Deno.test("round negative and zero", () => {
  assertEquals(roundTo(-1.234, 0.1), -1.2);
  assertEquals(roundTo(0, 0.1), 0);
});

Deno.test("round at halfway and small numbers", () => {
  assertEquals(roundTo(1.25, 0.1), 1.3);
  assertEquals(roundTo(0.01234, 0.001), 0.012);
});

Deno.test("gcdBruteForce trivial case", () => {
  assertEquals(gcdBruteForce(1, 1), 1);
});

Deno.test("gcdBruteForce basic cases", () => {
  assertEquals(gcdBruteForce(6, 9), 3);
  assertEquals(gcdBruteForce(12, 8), 4);
  assertEquals(gcdBruteForce(7, 3), 1);
  assertEquals(gcdBruteForce(100, 75), 25);
});

Deno.test("gcdEuclid trivial case", () => {
  assertEquals(gcdEuclid(1, 1), 1);
});

Deno.test("gcdEuclid matches gcdBruteForce", () => {
  assertEquals(gcdEuclid(6, 9), 3);
  assertEquals(gcdEuclid(12, 8), 4);
  assertEquals(gcdEuclid(7, 3), 1);
  assertEquals(gcdEuclid(100, 75), 25);
});