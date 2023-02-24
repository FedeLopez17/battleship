import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "../gameboard";
import { getGameState, humanPlaysTurn } from "../game-loop";
import { arrIncludesObj, randomIntegerInRange } from "../helper-functions";

function displayGameOverScreen(winnerName) {
  const gameOverScreen = document.createElement("section");
  gameOverScreen.classList.add("screen");
  gameOverScreen.id = "game-over";

  const gameOverText = document.createElement("h1");
  gameOverScreen.appendChild(gameOverText);
  gameOverText.innerText = `Game Over, ${winnerName} won!`;

  container.appendChild(gameOverScreen);
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
  if (gameState.isOver && gameState.winner === "player-one") {
    displayGameOverScreen(gameState.players["player-one"].name);
    return;
  }

  const thinkingTime = randomIntegerInRange(600, 1000);
  const playerTwoGameboard = document.querySelector(
    ".gameboard-wrapper#player-two .gameboard"
  );
  playerTwoGameboard.classList.toggle("disabled");
  setTimeout(() => {
    updatePveGameboard("player-one");
    playerTwoGameboard.classList.toggle("disabled");

    if (gameState.isOver) {
      displayGameOverScreen(gameState.players["player-two"].name);
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
        const attacker = player === "player-one" ? "player-two" : "player-one";
        const x = Number(cell.getAttribute("data-coordinates")[4]);
        const y = Number(cell.getAttribute("data-coordinates")[10]);
        humanPlaysTurn({
          attacker,
          coordinates: { x, y },
        });

        updatePveGameboards();
      });
    });
  }

  const gameboardWrapper = document.querySelector(
    `.gameboard-wrapper#${player}`
  );

  gameboardWrapper.innerHTML = "";
  gameboardWrapper.appendChild(gameboard);
}
