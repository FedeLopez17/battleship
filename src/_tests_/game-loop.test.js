import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "../gameboard";
import {
  availableShips,
  gameIsOver,
  gameWinner,
  humanPlaysTurn,
  instantiateHumanPlayer,
  placeShips,
} from "../gameLoop";

test("game loop public methods", () => {
  expect(() =>
    placeShips([
      [
        { x: 2, y: 3 },
        { x: 2, y: 4 },
      ],
      [
        { x: 7, y: 6 },
        { x: 8, y: 6 },
        { x: 9, y: 6 },
      ],
    ])
  ).toThrow(Error);

  expect(() => instantiateHumanPlayer()).toThrow(Error);
  expect(instantiateHumanPlayer("Federico")).toBeUndefined();
  expect(() => instantiateHumanPlayer("Luis")).toThrow(Error);

  expect(
    placeShips([
      [
        { x: 2, y: 3 },
        { x: 2, y: 4 },
        { x: 2, y: 5 },
        { x: 2, y: 6 },
        { x: 2, y: 7 },
      ],
      [
        { x: 0, y: 9 },
        { x: 1, y: 9 },
        { x: 2, y: 9 },
        { x: 3, y: 9 },
      ],
      [
        { x: 7, y: 4 },
        { x: 8, y: 4 },
        { x: 9, y: 4 },
      ],
      [
        { x: 7, y: 6 },
        { x: 8, y: 6 },
        { x: 9, y: 6 },
      ],
      [
        { x: 4, y: 1 },
        { x: 5, y: 1 },
      ],
    ])
  ).toBeUndefined();

  expect(gameIsOver()).toBe(false);
  expect(gameWinner()).toBeUndefined();

  let missedAttacksLastLength = 0;

  const firstAttackCoordinates = { x: 0, y: 0 };

  const firstAttackOutcome = humanPlaysTurn({
    attacker: "player-one",
    coordinates: firstAttackCoordinates,
  });

  expect(firstAttackOutcome).toHaveProperty("player", "player-two");
  expect([missedAttacksLastLength, missedAttacksLastLength + 1]).toContain(
    firstAttackOutcome.gameboardState.missedAttacks.length
  );
  missedAttacksLastLength =
    firstAttackOutcome.gameboardState.missedAttacks.length;

  let missedAttacksCurrentLength, currentAttackOutcome;

  gameboardIteration: for (let x = 0; x < GAMEBOARD_WIDTH; x++) {
    for (let y = 0; y < GAMEBOARD_HEIGHT; y++) {
      if (gameIsOver()) {
        const shipsTotalLength = availableShips().reduce(
          (total, currentShipLength) => total + currentShipLength
        );

        expect(missedAttacksLastLength).toBeLessThanOrEqual(
          GAMEBOARD_WIDTH * GAMEBOARD_HEIGHT - shipsTotalLength
        );

        break gameboardIteration;
      }

      // check that it doesn't let me attack the previously attacked coordinates
      if (x === firstAttackCoordinates.x && y === firstAttackCoordinates.y) {
        expect(
          humanPlaysTurn({ attacker: "player-one", coordinates: { x, y } })
        ).toBeUndefined();
        continue;
      }

      currentAttackOutcome = humanPlaysTurn({
        attacker: "player-one",
        coordinates: { x, y },
      });

      if (currentAttackOutcome) {
        missedAttacksCurrentLength =
          currentAttackOutcome.gameboardState.missedAttacks.length;

        expect([
          missedAttacksLastLength,
          missedAttacksLastLength + 1,
        ]).toContain(missedAttacksCurrentLength);

        missedAttacksLastLength = missedAttacksCurrentLength;
      }
    }
  }

  expect(gameIsOver()).toBe(true);
  expect(["player-one", "player-two"]).toContain(gameWinner());
});
