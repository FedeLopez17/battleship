import Gameboard, { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "./gameboard";
import randomIntegerInRange from "./helper-functions";

export class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }
}

export class ComputerPlayer extends Player {
  constructor() {
    super("AI");
    this.legalMoves = this._setInitiallLegalMoves();
  }

  _setInitiallLegalMoves() {
    const legalMoves = [];
    for (let x = 0; x < GAMEBOARD_WIDTH; x++) {
      for (let y = 0; y < GAMEBOARD_HEIGHT; y++) {
        legalMoves.push({ x, y });
      }
    }
    return legalMoves;
  }

  getRandomAttackCoordinates() {
    if (!this.legalMoves.length) {
      throw new Error("No more cells left to attack");
    }

    const randomIndex = randomIntegerInRange(0, this.legalMoves.length - 1);
    const attackCoordinates = this.legalMoves[randomIndex];

    //remove the attack from the legal moves, so that the same coordinate isn't attacked twice
    this.legalMoves.splice(randomIndex, 1);

    return attackCoordinates;
  }

  getRandomPlacementCoordinates(shipLength) {
    const isHorizontal = [true, false][randomIntegerInRange(0, 1)];

    const availableCoordinates = [];

    const emptyCells = this.gameboard.getEmptyCells();
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
        }

        nextCell = isHorizontal
          ? { x: previousCell.x + 1, y: previousCell.y }
          : { x: previousCell.x, y: previousCell.y + 1 };

        previousCell = nextCell;

        if (JSON.stringify(emptyCells).includes(JSON.stringify(nextCell))) {
          adjacentCells.push(nextCell);
        } else break;
      }
    }

    if (!availableCoordinates.length) throw new Error("No room available");

    return availableCoordinates[
      randomIntegerInRange(0, availableCoordinates.length - 1)
    ];
  }
}
