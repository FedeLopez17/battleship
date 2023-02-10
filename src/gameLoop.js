import { ComputerPlayer, Player } from "./player";

const GAME = {
  over: false,
  winner: undefined,
  currentTurn: "player-one",
  shipLengths: [5, 4, 3, 3, 2],
  players: { "player-one": null, "player-two": new ComputerPlayer() },
};

export function gameIsOver() {
  return GAME.over;
}

export function gameWinner() {
  return GAME.winner;
}

export function availableShips() {
  return [...GAME.shipLengths];
}

function switchTurns() {
  GAME.currentTurn =
    GAME.currentTurn === "player-one" ? "player-two" : "player-one";
}

function nextTurn() {
  switchTurns();
  if (GAME.currentTurn === "player-two") aiPlaysTurn();
}

export function instantiateHumanPlayer(name) {
  if (!name) throw new Error("Name argument missing");
  if (GAME.players["player-one"]) throw new Error("Player one already exists");

  const playerOne = new Player(name);
  GAME.players["player-one"] = playerOne;
}

export function placeShips(shipsCoordinates) {
  for (const coordinates of shipsCoordinates) {
    if (!GAME.players["player-one"]) throw new Error("No player one");

    GAME.players["player-one"].gameboard.placeShip(coordinates);
  }
}

GAME.shipLengths.forEach((shipLength) => {
  const randomCoordinates =
    GAME.players["player-two"].getRandomPlacementCoordinates(shipLength);
  GAME.players["player-two"].gameboard.placeShip(randomCoordinates);
});

function attack({ attacker, receiver, coordinates }) {
  if (attacker !== GAME.currentTurn || GAME.over) return;

  const successfulAttack =
    GAME.players[receiver].gameboard.receiveAttack(coordinates);

  return successfulAttack;
}

export function humanPlaysTurn({ attacker, coordinates }) {
  const receiver = attacker === "player-one" ? "player-two" : "player-one";

  if (GAME.players[attacker].gameboard.allShipsSunk()) {
    GAME.over = true;
    GAME.winner = receiver;
  }

  const successfulAttack = attack({ attacker, receiver, coordinates });
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
    attacker,
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
