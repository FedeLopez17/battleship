import "../styles/main.css";
import "../styles/pve-battle-screen.css";

import {
  randomizedGameboard,
  updatePveGameboard,
  updateShipsTracker,
} from "./ui-gameboard";
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

export function displayPveBattleWithShips({ name, shipsCoordinates }) {
  startPveGame(name);
  placeShips("player-one", shipsCoordinates);
  displayPveBattle();
}

export function displayShipsLayoutScreen(name) {
  container.innerHTML = "";

  const shipsLayoutScreen = document.createElement("section");
  shipsLayoutScreen.classList.add("screen");
  shipsLayoutScreen.id = "ships-layout";
  container.appendChild(shipsLayoutScreen);

  const nameInput = document.createElement("input");
  nameInput.id = "name";
  nameInput.placeholder = "Name";
  nameInput.autocomplete = "off";
  if (name) nameInput.value = name;
  nameInput.addEventListener("input", () => {
    if (!nameInput.value && nameInput.className !== "invalid")
      nameInput.className = "invalid";
    if (nameInput.value && nameInput.className !== "valid")
      nameInput.className = "valid";
  });
  shipsLayoutScreen.appendChild(nameInput);

  const gameboardWrapper = document.createElement("section");
  gameboardWrapper.classList.add("gameboard-wrapper");
  shipsLayoutScreen.appendChild(gameboardWrapper);

  gameboardWrapper.append(randomizedGameboard());

  const buttons = document.createElement("section");
  buttons.classList.add("buttons");
  gameboardWrapper.appendChild(buttons);

  const randomizeButton = document.createElement("button");
  randomizeButton.id = "randomize";
  randomizeButton.innerText = "Randomize";
  randomizeButton.addEventListener("click", () => {
    shipsLayoutScreen
      .querySelector(".gameboard")
      .replaceWith(randomizedGameboard());
  });
  buttons.appendChild(randomizeButton);

  const playButton = document.createElement("button");
  playButton.id = "play";
  playButton.innerText = "Play";
  playButton.addEventListener("click", () => {
    if (!nameInput.value) {
      if (nameInput.className !== "invalid") nameInput.className = "invalid";
      return;
    }

    const shipsCoordinates = JSON.parse(
      gameboardWrapper
        .querySelector(".gameboard")
        .getAttribute("data-ships-coordinates")
    );

    displayPveBattleWithShips({ name: nameInput.value, shipsCoordinates });
  });
  buttons.appendChild(playButton);
}

displayShipsLayoutScreen();
