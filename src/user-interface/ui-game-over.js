import "../styles/game-over-screen.css";
import "../styles/ships-layout.css";
import { displayShipsLayoutScreen } from "./user-interface";

export function displayGameOverScreen(winner) {
  const gameOverScreen = document.createElement("section");
  gameOverScreen.classList.add("screen");
  gameOverScreen.id = "game-over";

  const gameOverText = document.createElement("h1");
  gameOverScreen.appendChild(gameOverText);
  gameOverText.innerText = `Game Over, you ${
    winner === "player-one" ? "won!" : "lost"
  }`;

  const buttons = document.createElement("section");
  buttons.classList.add("buttons");
  gameOverScreen.appendChild(buttons);

  const playAgain = document.createElement("i");
  playAgain.classList.add("fa-solid", "fa-arrow-rotate-left");
  playAgain.title = "PLAY AGAIN";
  playAgain.addEventListener("click", displayShipsLayoutScreen);
  buttons.appendChild(playAgain);

  container.appendChild(gameOverScreen);
}
