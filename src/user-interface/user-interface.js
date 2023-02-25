import "../styles/main.css";
import "../styles/pve-battle-screen.css";

import { updatePveGameboard, updateShipsTracker } from "./ui-gameboard";
import { placeShips, startPveGame } from "../game-loop";

const container = document.querySelector("#container");

export function displayPveBattle() {
  container.innerHTML = "";

  const battleScreen = document.createElement("section");
  battleScreen.classList.add("screen");
  battleScreen.id = "pve-battle";
  container.appendChild(battleScreen);

  const PLAYERS = ["player-one", "player-two"];

  PLAYERS.forEach((player) => {
    const gameboardWrapper = document.createElement("section");
    gameboardWrapper.classList.add("gameboard-wrapper");
    gameboardWrapper.id = player;
    battleScreen.appendChild(gameboardWrapper);
    updatePveGameboard(player);
    updateShipsTracker(player);
  });
}

startPveGame("Federico");

// I will temporarily use this function to place the ships until I code the place-ships screen
export function displayPveBattleWithShips() {
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
  ]);

  displayPveBattle();
}

displayPveBattleWithShips();
