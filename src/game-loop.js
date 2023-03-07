import { ComputerPlayer, Player } from "./player";
import { arrIncludesObj } from "./helper-functions";

const GAME = {
  shipLengths: [5, 4, 3, 3, 2],
  started: false,
  players: { "player-one": null, "player-two": null },
};

export function startGame() {
  GAME.over = false;
  GAME.winner = undefined;
  GAME.currentTurn = "player-one";
  GAME.players["player-one"] = new Player();
  GAME.players["player-two"] = new ComputerPlayer(
    GAME.players["player-one"].gameboard
  );
  GAME.started = true;
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

export function humanPlaysTurn(coordinates) {
  if (!GAME.started) throw new Error("can't play until game has been started ");
  if (!coordinates) throw new Error("coordinates argument missing");
  if (GAME.currentTurn !== "player-one" || GAME.over) {
    throw new Error(`Not human player's turn`);
  }

  const attacker = "player-one";
  const receiver = "player-two";

  const successfulAttack =
    GAME.players["player-two"].gameboard.receiveAttack(coordinates);

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
  GAME.players["player-two"].attack();

  if (GAME.players["player-one"].gameboard.allShipsSunk()) {
    GAME.over = true;
    GAME.winner = "player-two";
  } else {
    nextTurn();
  }
}
