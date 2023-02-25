import { ComputerPlayer, Player } from "./player";
import { arrIncludesObj } from "./helper-functions";

const GAME = {
  shipLengths: [5, 4, 3, 3, 2],
  started: false,
};

function resetGame() {
  GAME.over = false;
  GAME.winner = undefined;
  GAME.currentTurn = "player-one";
  GAME.players = { "player-one": null, "player-two": null };
  GAME.mode = { isPve: undefined, isPvp: undefined };
  GAME.started = false;
}

export function getGameState() {
  return {
    currentTurn: GAME.currentTurn,
    availableShips: [...GAME.shipLengths],
    isOver: GAME.over,
    winner: GAME.winner,
    players: GAME.players,
    gameboards: {
      "player-one": GAME.players["player-one"]
        ? GAME.players["player-one"].gameboard.getState()
        : null,
      "player-two": GAME.players["player-two"]
        ? GAME.players["player-two"].gameboard.getState()
        : null,
    },
  };
}

function aiPlacesShips() {
  GAME.shipLengths.forEach((shipLength) => {
    const randomCoordinates =
      GAME.players["player-two"].getRandomPlacementCoordinates(shipLength);
    GAME.players["player-two"].gameboard.placeShip(randomCoordinates);
  });
}

export function startPveGame(playerName) {
  if (!playerName) throw new Error("Player name argument missing");

  resetGame();
  GAME.mode.isPve = true;
  GAME.players["player-one"] = new Player(playerName);
  GAME.players["player-two"] = new ComputerPlayer();
  aiPlacesShips();
  GAME.started = true;
}

export function replayPveGame() {
  const playerName = GAME.players["player-one"].name;
  startPveGame(playerName);
}

export function startPvpGame(playerOneName, playerTwoName) {
  if (!playerOneName) throw new Error("Player one name argument missing");
  if (!playerTwoName) throw new Error("Player two name argument missing");

  resetGame();
  GAME.mode.isPvp = true;
  GAME.players["player-one"] = new Player(playerOneName);
  GAME.players["player-two"] = new Player(playerTwoName);
  GAME.started = true;
}

function switchTurns() {
  GAME.currentTurn =
    GAME.currentTurn === "player-one" ? "player-two" : "player-one";
}

function nextTurn() {
  switchTurns();
  if (GAME.mode.isPve && GAME.currentTurn === "player-two") aiPlaysTurn();
}

export function placeShips(player, shipsCoordinates) {
  if (!player) throw new Error("player argument missing");
  if (!shipsCoordinates) throw new Error("coordinates argument missing");
  if (!GAME.players[player]) throw new Error(`No ${player}`);

  for (const coordinates of shipsCoordinates) {
    GAME.players[player].gameboard.placeShip(coordinates);
  }
}

function attack({ receiver, coordinates }) {
  const successfulAttack =
    GAME.players[receiver].gameboard.receiveAttack(coordinates);

  return successfulAttack;
}

export function humanPlaysTurn({ attacker, coordinates }) {
  if (!GAME.started) throw new Error("can't play until game has been started ");
  if (!attacker) throw new Error("attacker argument missing");
  if (!coordinates) throw new Error("coordinates argument missing");
  if (attacker !== GAME.currentTurn || GAME.over) {
    throw new Error(`Not ${attacker}'s turn`);
  }

  const receiver = attacker === "player-one" ? "player-two" : "player-one";

  const successfulAttack = attack({ receiver, coordinates });
  if (successfulAttack) {
    if (GAME.players[receiver].gameboard.allShipsSunk()) {
      GAME.over = true;
      GAME.winner = attacker;
    } else {
      nextTurn();
    }

    return {
      player: receiver,
      gameboardState: GAME.players[receiver].gameboard.getState(),
    };
  }
}

let lastHit = null;
let isDifferentShip;

function aiPlaysTurn() {
  const attacker = "player-two";
  const receiver = "player-one";

  const getPlayerOneTotalHitsTaken = () => {
    return GAME.players["player-one"].gameboard.ships.reduce(
      (totalHits, currentShip) => {
        return totalHits + currentShip.hitsTaken.length;
      },
      0
    );
  };

  const lastShipHitIsNotSunk = () => {
    if (!lastHit) return;

    for (const ship of GAME.players[receiver].gameboard.ships) {
      if (arrIncludesObj(ship.coordinates, lastHit)) {
        return !ship.isSunk();
      }
    }
  };

  if (lastHit && lastShipHitIsNotSunk()) {
    const coordinates = GAME.players[attacker].getAdjacentAttackCoordinates(
      lastHit,
      isDifferentShip
    );

    if (isDifferentShip) isDifferentShip = false;

    const playerOneHitsTakenBeforeAttack = getPlayerOneTotalHitsTaken();
    const successfulAttack = attack({ receiver, coordinates });
    const playerOneHitsTakenAfterAttack = getPlayerOneTotalHitsTaken();
    if (successfulAttack) {
      if (GAME.players[receiver].gameboard.allShipsSunk()) {
        GAME.over = true;
        GAME.winner = attacker;
      } else {
        nextTurn();
      }

      if (
        playerOneHitsTakenAfterAttack ===
        playerOneHitsTakenBeforeAttack + 1
      ) {
        lastHit = coordinates;
      }

      return {
        player: receiver,
        gameboardState: GAME.players[receiver].gameboard.getState(),
      };
    }
  } else {
    const playerOneHitsTakenBeforeAttack = getPlayerOneTotalHitsTaken();
    const coordinates = GAME.players[attacker].getRandomAttackCoordinates();
    const successfulAttack = attack({
      receiver,
      coordinates,
    });
    const playerOneHitsTakenAfterAttack = getPlayerOneTotalHitsTaken();
    lastHit =
      playerOneHitsTakenAfterAttack === playerOneHitsTakenBeforeAttack + 1
        ? coordinates
        : null;

    if (!isDifferentShip) isDifferentShip = true;

    if (successfulAttack) {
      if (GAME.players[receiver].gameboard.allShipsSunk()) {
        GAME.over = true;
        GAME.winner = attacker;
      } else {
        nextTurn();
      }

      return {
        player: receiver,
        gameboardState: GAME.players[receiver].gameboard.getState(),
      };
    }
  }
}
