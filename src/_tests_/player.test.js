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
