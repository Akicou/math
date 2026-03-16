import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circle circumference area diameter", () => {
  const circle = new Circle(new Point2D(3, 4), 5);
  assertAlmostEquals(circle.circumference(), 31.416, 0.01);
  assertAlmostEquals(circle.area(), 78.54, 0.01);
  assertEquals(circle.diameter(), 10);
});

Deno.test("point distance with positive coordinates", () => {
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);
  assertEquals(p1.distanceTo(p2), 5);
});

Deno.test("point distance with negative coordinates and same point", () => {
  const p1 = new Point2D(-1, -1);
  const p2 = new Point2D(2, 3);
  assertEquals(p1.distanceTo(p2), 5);
  assertEquals(p1.distanceTo(p1), 0);
});

Deno.test("rectangle area circumference diagonal", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  assertEquals(rect.area(), 12);
  assertEquals(rect.circumference(), 20);
  assertEquals(rect.diagonal(), 5);
});

Deno.test("rectangle with negative coordinates", () => {
  const rect = new Rectangle(new Point2D(-2, -3), new Point2D(2, 3));
  assertEquals(rect.area(), 24);
});