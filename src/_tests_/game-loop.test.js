import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "../gameboard";
import {
  getGameState,
  humanPlaysTurn,
  placeShips,
  startPveGame,
  startPvpGame,
} from "../game-loop";
import { randomIntegerInRange } from "../helper-functions";

test("game loop PVE mode", () => {
  expect(getGameState().isOver).toBeUndefined();
  expect(getGameState().winner).toBeUndefined();
  expect(getGameState().availableShips.length).toBeGreaterThan(0);

  expect(() => placeShips()).toThrow(Error);
  expect(() => placeShips("player-one")).toThrow(Error);
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
  expect(() => placeShips(undefined, shipCoordinates0)).toThrow(Error);
  expect(() => placeShips("player-one", shipCoordinates0)).toThrow(Error);

  expect(() =>
    humanPlaysTurn({ attacker: "player-one", coordinates: undefined })
  ).toThrow(Error);
  expect(() =>
    humanPlaysTurn({ attacker: undefined, coordinates: { x: 0, y: 0 } })
  ).toThrow(Error);
  expect(() =>
    humanPlaysTurn({ attacker: "player-one", coordinates: { x: 0, y: 0 } })
  ).toThrow(Error);

  expect(() => startPveGame()).toThrow(Error);
  expect(startPveGame("Federico")).toBeUndefined();
  expect(getGameState().isOver).toBe(false);
  expect(getGameState().winner).toBeUndefined();

  expect(
    placeShips("player-one", [
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
    placeShips("player-one", [
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

  expect(getGameState().isOver).toBe(true);
  expect(["player-one", "player-two"]).toContain(getGameState().winner);
});

test("game loop PVP mode", () => {
  expect(() => startPvpGame()).toThrow(Error);
  expect(() => startPvpGame("Federico")).toThrow(Error);
  expect(() => startPvpGame(undefined, "Federico")).toThrow(Error);
  expect(startPvpGame("Federico", "Luis")).toBeUndefined();

  const shipsCoordinates = [
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
  ];

  placeShips("player-one", shipsCoordinates);
  placeShips("player-two", shipsCoordinates);

  expect(() =>
    humanPlaysTurn({ attacker: "player-two", coordinates: { x: 0, y: 0 } })
  ).toThrow(new Error("Not player-two's turn"));

  const firstAttackCoordinates = shipsCoordinates[0][0];
  const firstAttackOutcome = humanPlaysTurn({
    attacker: "player-one",
    coordinates: firstAttackCoordinates,
  });

  let playerTwoExpectedHitsTaken = 1;

  expect(firstAttackOutcome.player).toBe("player-two");
  expect(firstAttackOutcome.gameboardState.ships[0].hitsTaken[0]).toEqual(
    firstAttackCoordinates
  );
  expect(firstAttackOutcome.gameboardState.ships[0].hitsTaken).toHaveLength(
    playerTwoExpectedHitsTaken
  );
  expect(firstAttackOutcome.gameboardState.missedAttacks).toHaveLength(0);

  expect(
    humanPlaysTurn({ attacker: "player-two", coordinates: { x: 0, y: 0 } })
      .gameboardState.missedAttacks
  ).toHaveLength(1);

  for (const ship of shipsCoordinates) {
    for (const shipCoordinates of ship) {
      // check that it doesn't let me attack the previously attacked coordinates
      if (shipCoordinates === firstAttackCoordinates) {
        expect(
          humanPlaysTurn({
            attacker: "player-one",
            coordinates: shipCoordinates,
          })
        ).toBeUndefined();
        continue;
      }

      // player one plays
      const playerOneAttackOutcome = humanPlaysTurn({
        attacker: "player-one",
        coordinates: shipCoordinates,
      });

      expect(playerOneAttackOutcome.gameboardState.missedAttacks).toHaveLength(
        0
      );

      playerTwoExpectedHitsTaken++;

      const playerTwoTotalHitsTaken =
        playerOneAttackOutcome.gameboardState.ships.reduce(
          (totalLength, currentShip) => {
            return totalLength + currentShip.hitsTaken.length;
          },
          0
        );

      expect(playerTwoTotalHitsTaken).toBe(playerTwoExpectedHitsTaken);

      // player two plays
      const playerTwoPlayRandomly = () => {
        const randomX = randomIntegerInRange(0, GAMEBOARD_WIDTH - 1);
        const randomY = randomIntegerInRange(0, GAMEBOARD_HEIGHT - 1);

        return humanPlaysTurn({
          attacker: "player-two",
          coordinates: { x: randomX, y: randomY },
        });
      };

      let outcome;
      while (outcome === undefined && !getGameState().isOver) {
        outcome = playerTwoPlayRandomly();
      }
    }
  }

  expect(getGameState().isOver).toBe(true);
  expect(playerTwoExpectedHitsTaken).toBe(17);
  expect(getGameState().winner).toBe("player-one");
});
