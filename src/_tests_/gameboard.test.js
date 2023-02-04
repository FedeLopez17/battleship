import Gameboard from "../gameboard";

test("Gameboard public methods", () => {
  const gameboard = new Gameboard();
  expect(gameboard.getState()).toEqual({ ships: [], missedAttacks: [] });

  gameboard.placeShip([
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
  ]);

  expect(gameboard.getState().ships).toEqual([
    {
      coordinates: [
        { x: 1, y: 3 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
      ],
      hitsTaken: [],
      sunk: false,
      length: 3,
    },
  ]);

  gameboard.receiveAttack({ x: 0, y: 0 });
  expect(gameboard.getState().missedAttacks).toEqual([{ x: 0, y: 0 }]);

  gameboard.receiveAttack({ x: 1, y: 3 });
  gameboard.receiveAttack({ x: 2, y: 3 });

  expect(gameboard.allShipsSunk()).toBe(false);

  gameboard.receiveAttack({ x: 3, y: 3 });

  expect(gameboard.allShipsSunk()).toBe(true);
});
