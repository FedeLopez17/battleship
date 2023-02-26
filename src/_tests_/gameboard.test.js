import Gameboard from "../gameboard";

test("Gameboard public methods", () => {
  const gameboard = new Gameboard();

  const firstCoordinates = [
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
  ];

  gameboard.placeShip(firstCoordinates);

  expect(() => gameboard.placeShip(firstCoordinates)).toThrow(Error);

  expect(gameboard.getState().ships).toEqual([
    {
      coordinates: [
        { x: 1, y: 3 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
      ],
      hitsTaken: [],
      length: 3,
    },
  ]);

  expect(gameboard.receiveAttack({ x: 0, y: 0 })).toBe(true);
  expect(gameboard.receiveAttack({ x: 0, y: 0 })).toBe(false);

  expect(gameboard.getState().missedAttacks).toEqual([{ x: 0, y: 0 }]);

  expect(gameboard.receiveAttack({ x: 1, y: 3 })).toBe(true);
  expect(gameboard.receiveAttack({ x: 2, y: 3 })).toBe(true);
  expect(gameboard.receiveAttack({ x: 2, y: 3 })).toBe(false);
  expect(gameboard.receiveAttack({ x: 0, y: 1 })).toBe(true);

  expect(gameboard.allShipsSunk()).toBe(false);
  expect(gameboard.getState().missedAttacks).toEqual([
    { x: 0, y: 0 },
    { x: 0, y: 1 },
  ]);

  gameboard.receiveAttack({ x: 3, y: 3 });

  expect(gameboard.allShipsSunk()).toBe(true);
});
