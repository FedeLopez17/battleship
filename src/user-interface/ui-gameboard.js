import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "../gameboard";
import { getGameState, humanPlaysTurn } from "../game-loop";
import { arrIncludesObj, randomIntegerInRange } from "../helper-functions";
import { displayGameOverScreen } from "./ui-game-over";
import "../styles/gameboard.css";

export function updateShipsTracker(player) {
  const gameState = getGameState();

  const longestShipLength = Math.max(...gameState.availableShips);

  const shipTracker = document.createElement("section");
  shipTracker.classList.add("ships-tracker");
  gameState.gameboards[player].ships.forEach((ship) => {
    const uiShip = document.createElement("section");
    uiShip.classList.add("ship");
    uiShip.style.width = `${(100 / longestShipLength) * ship.length}%`;
    if (ship.isSunk()) uiShip.classList.add("sunk");
    for (
      let shipCellNumber = 0;
      shipCellNumber < ship.length;
      shipCellNumber++
    ) {
      const uiShipSubdivision = document.createElement("section");
      uiShipSubdivision.classList.add("subdivision");
      uiShip.appendChild(uiShipSubdivision);
    }
    shipTracker.appendChild(uiShip);
  });

  const gameboardWrapper = document.querySelector(
    `.gameboard-wrapper#${player}`
  );
  const previousTracker = gameboardWrapper.querySelector(".ships-tracker");

  if (previousTracker) {
    previousTracker.replaceWith(shipTracker);
  } else {
    player.includes("one")
      ? gameboardWrapper.firstChild.before(shipTracker)
      : gameboardWrapper.appendChild(shipTracker);
  }
}

function createGameboard() {
  const gameboard = document.createElement("section");
  gameboard.classList.add("gameboard");

  for (let columnNumber = 0; columnNumber < GAMEBOARD_WIDTH; columnNumber++) {
    const column = document.createElement("section");
    column.classList.add("column");
    column.id = `column-${columnNumber}`;
    gameboard.appendChild(column);

    for (let rowNumber = GAMEBOARD_HEIGHT - 1; rowNumber >= 0; rowNumber--) {
      const cell = document.createElement("section");
      cell.classList.add("cell");
      const cellCoordinates = `{x: ${columnNumber}, y: ${rowNumber}}`;
      cell.setAttribute("data-coordinates", cellCoordinates);
      column.appendChild(cell);
    }
  }

  return gameboard;
}

function updatePveGameboards() {
  const gameState = getGameState();
  updatePveGameboard("player-two");
  updateShipsTracker("player-two");

  if (gameState.isOver && gameState.winner === "player-one") {
    displayGameOverScreen("player-one");
    return;
  }

  const thinkingTime = randomIntegerInRange(600, 1000);
  const playerTwoGameboard = document.querySelector(
    ".gameboard-wrapper#player-two .gameboard"
  );
  playerTwoGameboard.classList.toggle("disabled");

  setTimeout(() => {
    updatePveGameboard("player-one");
    updateShipsTracker("player-one");
    playerTwoGameboard.classList.toggle("disabled");

    if (gameState.isOver) {
      displayGameOverScreen("player-two");
    }
  }, thinkingTime);
}

export function updatePveGameboard(player) {
  const gameboard = createGameboard();

  const gameboardState = getGameState().gameboards[player];
  const isAiGameboard = player.includes("two");

  for (const ship of gameboardState.ships) {
    for (const coords of ship.coordinates) {
      const gameboardCell = gameboard.querySelector(
        `[data-coordinates = "{x: ${coords.x}, y: ${coords.y}}"]`
      );

      // The ships must not be visible in the AI's gameboard
      if (!isAiGameboard) gameboardCell.classList.add("ship");

      if (ship.isSunk()) {
        gameboardCell.classList.add("sunk");
      } else if (arrIncludesObj(ship.hitsTaken, coords)) {
        gameboardCell.classList.add("hit");
      }
    }
  }

  for (const missedAttack of gameboardState.missedAttacks) {
    const gameboardCell = gameboard.querySelector(
      `[data-coordinates = "{x: ${missedAttack.x}, y: ${missedAttack.y}}"]`
    );
    gameboardCell.classList.add("missed-attack");
  }

  if (isAiGameboard) {
    const cells = gameboard.querySelectorAll(".cell");

    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        humanPlaysTurn({
          x: Number(cell.getAttribute("data-coordinates")[4]),
          y: Number(cell.getAttribute("data-coordinates")[10]),
        });

        updatePveGameboards();
      });
    });
  }
  const gameboardWrapper = document.querySelector(
    `.gameboard-wrapper#${player}`
  );
  const previousGameboard = gameboardWrapper.querySelector(".gameboard");

  previousGameboard
    ? previousGameboard.replaceWith(gameboard)
    : gameboardWrapper.appendChild(gameboard);
}

export function randomizedGameboard() {
  const gameboard = createGameboard();
  const emptyCells = [];
  gameboard.querySelectorAll(".cell").forEach((cell) => {
    const x = Number(cell.getAttribute("data-coordinates")[4]);
    const y = Number(cell.getAttribute("data-coordinates")[10]);
    emptyCells.push({ x, y });
  });

  const getRandomPlacementCoordinates = (shipLength) => {
    const isHorizontal = [true, false][randomIntegerInRange(0, 1)];
    const availableCoordinates = [];

    for (const currentCell of emptyCells) {
      if (
        (isHorizontal && currentCell.x > GAMEBOARD_WIDTH - shipLength) ||
        (!isHorizontal && currentCell.y > GAMEBOARD_HEIGHT - shipLength)
      ) {
        continue;
      }

      const adjacentCells = [currentCell];
      let nextCell;
      let previousCell = currentCell;

      for (let i = 0; i < shipLength; i++) {
        if (adjacentCells.length === shipLength) {
          availableCoordinates.push(adjacentCells);
          break;
        }

        nextCell = isHorizontal
          ? { x: previousCell.x + 1, y: previousCell.y }
          : { x: previousCell.x, y: previousCell.y + 1 };

        previousCell = nextCell;

        if (arrIncludesObj(emptyCells, nextCell)) {
          adjacentCells.push(nextCell);
        } else break;
      }
    }

    const chosenCoordinates =
      availableCoordinates[
        randomIntegerInRange(0, availableCoordinates.length - 1)
      ];

    const coordinatesForDeletion = [];

    for (let index = 0; index < chosenCoordinates.length; index++) {
      const cellOnTheLeft = {
        x: chosenCoordinates[index].x - 1,
        y: chosenCoordinates[index].y,
      };
      if (
        chosenCoordinates[index].x > 0 &&
        !arrIncludesObj(chosenCoordinates, cellOnTheLeft)
      ) {
        coordinatesForDeletion.push(cellOnTheLeft);
      }

      const cellOnTheRight = {
        x: chosenCoordinates[index].x + 1,
        y: chosenCoordinates[index].y,
      };
      if (
        chosenCoordinates[index].x < GAMEBOARD_WIDTH - 1 &&
        !arrIncludesObj(chosenCoordinates, cellOnTheRight)
      ) {
        coordinatesForDeletion.push(cellOnTheRight);
      }

      const cellBelow = {
        x: chosenCoordinates[index].x,
        y: chosenCoordinates[index].y - 1,
      };
      if (
        chosenCoordinates[index].y > 0 &&
        !arrIncludesObj(chosenCoordinates, cellBelow)
      ) {
        coordinatesForDeletion.push(cellBelow);
      }

      const cellAbove = {
        x: chosenCoordinates[index].x,
        y: chosenCoordinates[index].y + 1,
      };
      if (
        chosenCoordinates[index].y < GAMEBOARD_HEIGHT - 1 &&
        !arrIncludesObj(chosenCoordinates, cellAbove)
      ) {
        coordinatesForDeletion.push(cellAbove);
      }
    }

    [...chosenCoordinates, ...coordinatesForDeletion].forEach((coords) => {
      const coordsIndex = emptyCells.findIndex(
        (cell) => cell.x === coords.x && cell.y === coords.y
      );
      emptyCells.splice(coordsIndex, 1);
    });
    return chosenCoordinates;
  };

  let shipsCoordinates = [];

  getGameState().availableShips.forEach((shipLength) => {
    const placementCoordinates = getRandomPlacementCoordinates(shipLength);
    shipsCoordinates.push(placementCoordinates);
    placementCoordinates.forEach((coords) => {
      gameboard
        .querySelector(
          `.cell[data-coordinates='{x: ${coords.x}, y: ${coords.y}}']`
        )
        .classList.add("ship");
    });
  });

  gameboard.setAttribute(
    "data-ships-coordinates",
    JSON.stringify(shipsCoordinates)
  );
  return gameboard;
}
