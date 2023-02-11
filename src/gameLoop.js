import { ComputerPlayer, Player } from "./player";

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

  if (GAME.players[attacker].gameboard.allShipsSunk()) {
    GAME.over = true;
    GAME.winner = receiver;
  }

  const successfulAttack = attack({ receiver, coordinates });
  if (successfulAttack) {
    nextTurn();

    return {
      player: receiver,
      gameboardState: GAME.players[receiver].gameboard.getState(),
    };
  }
}

function aiPlaysTurn() {
  const attacker = "player-two";
  const receiver = "player-one";

  if (GAME.players[attacker].gameboard.allShipsSunk()) {
    GAME.over = true;
    GAME.winner = receiver;
  }

  const successfulAttack = attack({
    receiver,
    coordinates: GAME.players[attacker].getRandomAttackCoordinates(),
  });
  if (successfulAttack) {
    nextTurn();

    return {
      player: receiver,
      gameboardState: GAME.players[receiver].gameboard.getState(),
    };
  }
}
