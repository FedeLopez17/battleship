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

test("AI player can attack adjacent coordinates", () => {
  const computer = new ComputerPlayer();

  // Ship 1
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

  // Ship 2
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

  // Ship 3
  expect(computer.getAdjacentAttackCoordinates({ x: 3, y: 9 }, true)).toEqual({
    x: 2,
    y: 9,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 2, y: 9 })).toEqual({
    x: 1,
    y: 9,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 1, y: 9 })).toEqual({
    x: 0,
    y: 9,
  });
  [
    { x: 2, y: 9 },
    { x: 1, y: 9 },
    { x: 0, y: 9 },
  ].forEach((coordinates) =>
    expect(computer.legalMoves).not.toContainEqual(coordinates)
  );
  expect(computer.legalMoves).toHaveLength(84);

  // Ship 4
  expect(computer.getAdjacentAttackCoordinates({ x: 5, y: 2 }, true)).toEqual({
    x: 5,
    y: 1,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 5, y: 2 })).toEqual({
    x: 6,
    y: 2,
  });
  expect(computer.getAdjacentAttackCoordinates({ x: 6, y: 2 })).toEqual({
    x: 7,
    y: 2,
  });
  [
    { x: 5, y: 1 },
    { x: 6, y: 2 },
    { x: 7, y: 2 },
  ].forEach((coordinates) =>
    expect(computer.legalMoves).not.toContainEqual(coordinates)
  );
  expect(computer.legalMoves).toHaveLength(81);
});
