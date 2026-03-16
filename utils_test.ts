import { assertEquals } from "@std/assert";
import { roundTo } from "./utils.ts";

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