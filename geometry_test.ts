import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  const circle = new Circle(new Point2D(3, 4), 5);
  const actual = circle.circumference();
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(3, 4), 5);
  const actual = circle.area();
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
  const circle = new Circle(new Point2D(3, 4), 5);
  const actual = circle.diameter();
  assertEquals(actual, 10);
});


Deno.test("distance between two points", () => {
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);
  const actual = p1.distanceTo(p2);
  assertEquals(actual, 5);
});

Deno.test("distance between same points is 0", () => {
  const p1 = new Point2D(1, 2);
  const actual = p1.distanceTo(p1);
  assertEquals(actual, 0);
});

Deno.test("distance between points with negative coordinates", () => {
  const p1 = new Point2D(-1, -1);
  const p2 = new Point2D(2, 3);
  const actual = p1.distanceTo(p2);
  assertEquals(actual, 5);
});

Deno.test("area of a rectangle", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  const actual = rect.area();
  assertEquals(actual, 12);
});

Deno.test("circumference of a rectangle", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  const actual = rect.circumference();
  assertEquals(actual, 20);
});

Deno.test("diagonal of a rectangle", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  const actual = rect.diagonal();
  assertEquals(actual, 5);
});

Deno.test("area of rectangle with negative coordinates", () => {
  const rect = new Rectangle(new Point2D(-2, -3), new Point2D(2, 3));
  const actual = rect.area();
  assertEquals(actual, 24);
});
