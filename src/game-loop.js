import { ComputerPlayer, Player } from "./player";
import { arrIncludesObj } from "./helper-functions";

const GAME = {
  shipLengths: [5, 4, 3, 3, 2],
  started: false,
  players: { "player-one": null, "player-two": null },
};

let aiLastHit;
let aiIsDifferentShip;

export function startGame() {
  GAME.over = false;
  GAME.winner = undefined;
  GAME.currentTurn = "player-one";
  GAME.players["player-one"] = new Player();
  GAME.players["player-two"] = new ComputerPlayer();
  GAME.started = true;
  aiLastHit = null;
  aiIsDifferentShip = null;
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

function switchTurns() {
  GAME.currentTurn =
    GAME.currentTurn === "player-one" ? "player-two" : "player-one";
}

function nextTurn() {
  switchTurns();
  if (GAME.currentTurn === "player-two") aiPlaysTurn();
}

export function placeShips(shipsCoordinates) {
  if (!shipsCoordinates) throw new Error("coordinates argument missing");
  if (!GAME.started) throw new Error(`Game has not started`);

  for (const coordinates of shipsCoordinates) {
    GAME.players["player-one"].gameboard.placeShip(coordinates);
  }
}

function attack({ receiver, coordinates }) {
  const successfulAttack =
    GAME.players[receiver].gameboard.receiveAttack(coordinates);

  return successfulAttack;
}

export function humanPlaysTurn(coordinates) {
  if (!GAME.started) throw new Error("can't play until game has been started ");
  if (!coordinates) throw new Error("coordinates argument missing");
  if (GAME.currentTurn !== "player-one" || GAME.over) {
    throw new Error(`Not human player's turn`);
  }

  const attacker = "player-one";
  const receiver = "player-two";

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
    if (!aiLastHit) return;

    for (const ship of GAME.players[receiver].gameboard.ships) {
      if (arrIncludesObj(ship.coordinates, aiLastHit)) {
        return !ship.isSunk();
      }
    }
  };

  if (aiLastHit && lastShipHitIsNotSunk()) {
    const coordinates = GAME.players[attacker].getAdjacentAttackCoordinates(
      aiLastHit,
      aiIsDifferentShip
    );

    if (aiIsDifferentShip) aiIsDifferentShip = false;

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
        aiLastHit = coordinates;
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
    aiLastHit =
      playerOneHitsTakenAfterAttack === playerOneHitsTakenBeforeAttack + 1
        ? coordinates
        : null;

    if (!aiIsDifferentShip) aiIsDifferentShip = true;

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
