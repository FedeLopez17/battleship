import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "../gameboard";
import { ComputerPlayer } from "../player";

test("AI player can attack randomly", () => {
  const computer = new ComputerPlayer();

  const previousAttackCoordinates = [];
  for (let i = 0; i < GAMEBOARD_WIDTH * GAMEBOARD_HEIGHT; i++) {
    const newAttackCoordinates = computer.getRandomAttackCoordinates();
    expect(previousAttackCoordinates).not.toContainEqual(newAttackCoordinates);
    previousAttackCoordinates.push(newAttackCoordinates);
  }

  expect(() => computer.getRandomAttackCoordinates()).toThrow(Error);
});

const mockShip = { length: 5 };

test("AI player can place ships randomly", () => {
  const computer = new ComputerPlayer();

  const previousShipCoordinates = [];
  for (let i = 0; i < 4; i++) {
    const newShipCoordinates = computer.getRandomPlacementCoordinates(
      mockShip.length
    );
    expect(newShipCoordinates).toHaveLength(mockShip.length);
    expect(previousShipCoordinates).not.toContainEqual(newShipCoordinates);
    previousShipCoordinates.push(newShipCoordinates);
  }

  expect(() => computer.getRandomPlacementCoordinates(11)).toThrow(Error);
});

test("AI player can attack adjacent coordinates", () => {
  const computer = new ComputerPlayer();

  expect(computer.getAdjacentAttackCoordinates({ x: 4, y: 3 })).toEqual({
    x: 4,
    y: 2,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 4, y: 3 })).toEqual({
    x: 4,
    y: 4,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 4, y: 3 })).toEqual({
    x: 3,
    y: 3,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 3, y: 3 })).toEqual({
    x: 2,
    y: 3,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 2, y: 3 })).toEqual({
    x: 1,
    y: 3,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 2, y: 3 })).toEqual({
    x: 5,
    y: 3,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 5, y: 3 })).toEqual({
    x: 6,
    y: 3,
  });
  [
    { x: 4, y: 2 },
    { x: 4, y: 4 },
    { x: 3, y: 3 },
    { x: 2, y: 3 },
    { x: 1, y: 3 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
  ].forEach((coordinates) =>
    expect(computer.legalMoves).not.toContainEqual(coordinates)
  );
  expect(computer.legalMoves).toHaveLength(93);

  expect(computer.getAdjacentAttackCoordinates({ x: 3, y: 7 }, true)).toEqual({
    x: 3,
    y: 6,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 3, y: 7 })).toEqual({
    x: 3,
    y: 8,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 3, y: 7 })).toEqual({
    x: 2,
    y: 7,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 2, y: 7 })).toEqual({
    x: 1,
    y: 7,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 1, y: 7 })).toEqual({
    x: 0,
    y: 7,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 0, y: 7 })).toEqual({
    x: 4,
    y: 7,
  });
  [
    { x: 3, y: 6 },
    { x: 3, y: 8 },
    { x: 2, y: 7 },
    { x: 1, y: 7 },
    { x: 0, y: 7 },
    { x: 4, y: 7 },
  ].forEach((coordinates) =>
    expect(computer.legalMoves).not.toContainEqual(coordinates)
  );
  expect(computer.legalMoves).toHaveLength(87);
});
