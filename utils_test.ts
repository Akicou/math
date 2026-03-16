import { assertEquals } from "@std/assert";
import { roundTo } from "./utils.ts";

Deno.test("round to precision 0.1", () => {
  assertEquals(roundTo(1.234, 0.1), 1.2);
});

Deno.test("round to precision 0.01", () => {
  assertEquals(roundTo(1.234, 0.01), 1.23);
});

Deno.test("round to precision 0.5", () => {
  assertEquals(roundTo(2.7, 0.5), 2.5);
});

Deno.test("round to precision 1", () => {
  assertEquals(roundTo(5.7, 1), 6);
});

Deno.test("round up at exactly halfway", () => {
  assertEquals(roundTo(1.25, 0.1), 1.3);
});

Deno.test("round negative number", () => {
  assertEquals(roundTo(-1.234, 0.1), -1.2);
});

Deno.test("round zero", () => {
  assertEquals(roundTo(0, 0.1), 0);
});

Deno.test("round small number to precision", () => {
  assertEquals(roundTo(0.01234, 0.001), 0.012);
});