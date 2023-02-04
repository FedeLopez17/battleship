import Ship from "../ship";

test("Ship public methods", () => {
  expect(() => new Ship()).toThrow(Error);
  expect(() => new Ship("6")).toThrow(Error);
  expect(() => new Ship(-10)).toThrow(Error);

  const ship = new Ship(6);

  expect(ship.isSunk()).toBe(false);

  for (let i = 0; i < 5; i++) {
    ship.hit(null);
  }

  expect(ship.isSunk()).toBe(false);

  ship.hit(null);

  expect(ship.isSunk()).toBe(true);
});
