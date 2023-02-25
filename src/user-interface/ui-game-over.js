import { replayPveGame } from "../game-loop";
import "../styles/game-over-screen.css";
import { displayPveBattleWithShips } from "./user-interface";

export function displayGameOverScreen(winnerName) {
  const gameOverScreen = document.createElement("section");
  gameOverScreen.classList.add("screen");
  gameOverScreen.id = "game-over";

  const gameOverText = document.createElement("h1");
  gameOverScreen.appendChild(gameOverText);
  gameOverText.innerText = `Game Over, ${winnerName} won!`;

  const buttons = document.createElement("section");
  buttons.classList.add("buttons");
  gameOverScreen.appendChild(buttons);

  const mainMenu = document.createElement("i");
  mainMenu.classList.add("fa-solid", "fa-arrow-left");
  mainMenu.title = "MAIN MENU";
  buttons.appendChild(mainMenu);

  const playAgain = document.createElement("i");
  playAgain.classList.add("fa-solid", "fa-arrow-rotate-left");
  playAgain.title = "PLAY AGAIN";
  playAgain.addEventListener("click", () => {
    replayPveGame();
    displayPveBattleWithShips();
  });
  buttons.appendChild(playAgain);

  container.appendChild(gameOverScreen);
}
