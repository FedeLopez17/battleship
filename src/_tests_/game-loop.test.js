import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "../gameboard";
import {
  getGameState,
  humanPlaysTurn,
  placeShips,
  startGame,
} from "../game-loop";

test("game loop PVE mode", () => {
  expect(() => placeShips()).toThrow(Error);
  const shipCoordinates0 = [
    [
      { x: 2, y: 3 },
      { x: 2, y: 4 },
    ],
    [
      { x: 7, y: 6 },
      { x: 8, y: 6 },
      { x: 9, y: 6 },
    ],
  ];
  expect(() => placeShips()).toThrow(Error);
  expect(() => placeShips(shipCoordinates0)).toThrow(Error);

  expect(() => humanPlaysTurn()).toThrow(Error);
  expect(() => humanPlaysTurn({ x: 0, y: 0 })).toThrow(Error);

  expect(startGame()).toBeUndefined();
  expect(getGameState().isOver).toBe(false);
  expect(getGameState().winner).toBeUndefined();

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

  expect(() =>
    placeShips([
      [
        { x: 2, y: 3 },
        { x: 2, y: 4 },
        { x: 2, y: 5 },
        { x: 2, y: 6 },
        { x: 2, y: 7 },
      ],
    ])
  ).toThrow(Error);

  let missedAttacksLastLength = 0;

  const firstAttackCoordinates = { x: 0, y: 0 };

  const firstAttackOutcome = humanPlaysTurn(firstAttackCoordinates);

  expect(firstAttackOutcome).toHaveProperty("player", "player-two");
  expect([missedAttacksLastLength, missedAttacksLastLength + 1]).toContain(
    firstAttackOutcome.gameboardState.missedAttacks.length
  );
  missedAttacksLastLength =
    firstAttackOutcome.gameboardState.missedAttacks.length;

  let missedAttacksCurrentLength, currentAttackOutcome;

  gameboardIteration: for (let x = 0; x < GAMEBOARD_WIDTH; x++) {
    for (let y = 0; y < GAMEBOARD_HEIGHT; y++) {
      if (getGameState().isOver) {
        const shipsTotalLength = getGameState().availableShips.reduce(
          (total, currentShipLength) => total + currentShipLength
        );

        expect(missedAttacksLastLength).toBeLessThanOrEqual(
          GAMEBOARD_WIDTH * GAMEBOARD_HEIGHT - shipsTotalLength
        );

        break gameboardIteration;
      }

      // check that it doesn't let me attack the previously attacked coordinates
      if (x === firstAttackCoordinates.x && y === firstAttackCoordinates.y) {
        expect(humanPlaysTurn({ x, y })).toBeUndefined();
        continue;
      }

      currentAttackOutcome = humanPlaysTurn({ x, y });

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

  expect(getGameState().isOver).toBe(true);
  expect(["player-one", "player-two"]).toContain(getGameState().winner);

  expect(startGame()).toBeUndefined();
  expect(getGameState().isOver).toBe(false);
  expect(getGameState().winner).toBeUndefined();
});
