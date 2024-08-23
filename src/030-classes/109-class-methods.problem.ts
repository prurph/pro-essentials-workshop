import { expect, it } from "vitest";

class CanvasNode {
  x = 0;
  y = 0;

  // Generally don't need to chose between this syntax and function
  // syntax in classes, however this way `this` is always bound to
  // the instance, whereas function move(x, y) ... isn't, and stuff like
  // const fn = canvasNode.move
  // fn(10, 20) // => error; `this` is undefined
  move = (x: number, y: number) => {
    this.x = x;
    this.y = y;
  };
}

it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  canvasNode.move(10, 20);

  expect(canvasNode.x).toEqual(10);
  expect(canvasNode.y).toEqual(20);
});
