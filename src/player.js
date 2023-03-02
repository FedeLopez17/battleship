import { getGameState } from "./game-loop";
import Gameboard, { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from "./gameboard";
import { arrIncludesObj, randomIntegerInRange } from "./helper-functions";

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
    this._randomizeGameboard();
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

  _randomizeGameboard() {
    const emptyCells = this.gameboard.getState().emptyCells;

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

    getGameState().availableShips.forEach((shipLength) => {
      const placementCoordinates = getRandomPlacementCoordinates(shipLength);
      this.gameboard.placeShip(placementCoordinates);
    });
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

  _origin = null;
  _lastCoordinatesAttacked = null;
  _lastCoordinatesArgument = null;
  _lastDirection = null;
  _isVertical = false;
  _isHorizontal = false;

  _verticalPath = { below: [], above: [] };
  _horizontalPath = { left: [], right: [] };

  getAdjacentAttackCoordinates(coordinates, isDifferentShip) {
    if (!this._origin || isDifferentShip) {
      this._origin = coordinates;
      this._lastCoordinatesArgument = null;
      this._lastDirection = null;
      this._lastCoordinatesAttacked = null;
      this._isVertical = false;
      this._isHorizontal = false;

      // clear and populate horizontal path
      this._horizontalPath.left = [];
      this._horizontalPath.right = [];

      for (let index = coordinates.x - 1; index >= 0; index--) {
        const newAdjacentCoordinates = { x: index, y: coordinates.y };
        if (!arrIncludesObj(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._horizontalPath.left.unshift(newAdjacentCoordinates);
      }

      for (let index = coordinates.x + 1; index < GAMEBOARD_WIDTH; index++) {
        const newAdjacentCoordinates = { x: index, y: coordinates.y };
        if (!arrIncludesObj(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._horizontalPath.right.push(newAdjacentCoordinates);
      }

      // clear and populate vertical path
      this._verticalPath.below = [];
      this._verticalPath.above = [];

      for (let index = coordinates.y - 1; index >= 0; index--) {
        const newAdjacentCoordinates = { x: coordinates.x, y: index };
        if (!arrIncludesObj(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._verticalPath.below.unshift(newAdjacentCoordinates);
      }

      for (let index = coordinates.y + 1; index < GAMEBOARD_HEIGHT; index++) {
        const newAdjacentCoordinates = { x: coordinates.x, y: index };
        if (!arrIncludesObj(this.legalMoves, newAdjacentCoordinates)) {
          break;
        }

        this._verticalPath.above.push(newAdjacentCoordinates);
      }
    }

    // Attack all four directions until a there's a hit
    if (coordinates.x === this._origin.x && coordinates.y === this._origin.y) {
      if (!this._lastDirection && this._verticalPath.below.length) {
        this._lastCoordinatesAttacked = this._verticalPath.below.splice(-1)[0];
        this._lastDirection = "below";
      } else if (
        [null, "below"].includes(this._lastDirection) &&
        this._verticalPath.above.length
      ) {
        this._lastCoordinatesAttacked = this._verticalPath.above.shift();
        this._lastDirection = "above";
      } else if (
        [null, "below", "above"].includes(this._lastDirection) &&
        this._horizontalPath.left.length
      ) {
        this._lastCoordinatesAttacked = this._horizontalPath.left.splice(-1)[0];
        this._lastDirection = "left";
      } else {
        this._lastCoordinatesAttacked = this._horizontalPath.right.shift();
        this._lastDirection = "right";
      }

      //remove the attack from the legal moves, so that the same coordinate isn't attacked in the future
      const lastAttackIndex = this.legalMoves.findIndex(
        (coords) =>
          coords.x === this._lastCoordinatesAttacked.x &&
          coords.y === this._lastCoordinatesAttacked.y
      );
      this.legalMoves.splice(lastAttackIndex, 1);

      this._lastCoordinatesArgument = coordinates;
      return this._lastCoordinatesAttacked;
    }

    // The first time there's a hit, see whether the ship is placed horizontally or vertically
    if (
      (coordinates.x !== this._origin.x || coordinates.y !== this._origin.y) &&
      !this._isVertical &&
      !this._isHorizontal
    ) {
      this._lastDirection === "below" || this._lastDirection === "above"
        ? (this._isVertical = true)
        : (this._isHorizontal = true);
    }

    // If the coordinates argument is repeated or we reached the end of that side, we change to the other side.
    if (
      this._isVertical &&
      ((coordinates.x === this._lastCoordinatesArgument.x &&
        coordinates.y === this._lastCoordinatesArgument.y) ||
        !this._verticalPath[this._lastDirection].length)
    ) {
      if (this._lastDirection === "below") {
        this._lastCoordinatesAttacked = this._verticalPath.above.shift();
        this._lastDirection = "above";
      } else {
        this._lastCoordinatesAttacked = this._verticalPath.below.splice(-1)[0];
        this._lastDirection = "below";
      }
    }

    // But if the current coordinates are different from the last coordinates, that means the lastAttack was a hit, so we keep attacking towards that side.
    else if (
      this._isVertical &&
      this._verticalPath[this._lastDirection].length &&
      coordinates.y !== this._lastCoordinatesArgument.y
    ) {
      this._lastCoordinatesAttacked =
        this._lastDirection === "below"
          ? this._verticalPath.below.splice(-1)[0]
          : this._verticalPath.above.shift();
    }

    // And we do the same for the other axis
    if (
      this._isHorizontal &&
      ((coordinates.x === this._lastCoordinatesArgument.x &&
        coordinates.y === this._lastCoordinatesArgument.y) ||
        !this._horizontalPath[this._lastDirection].length)
    ) {
      if (this._lastDirection === "left") {
        this._lastCoordinatesAttacked = this._horizontalPath.right.shift();
        this._lastDirection = "right";
      } else {
        this._lastCoordinatesAttacked = this._horizontalPath.left.splice(-1)[0];
        this._lastDirection = "left";
      }
    } else if (
      this._isHorizontal &&
      this._horizontalPath[this._lastDirection].length &&
      coordinates.x !== this._lastCoordinatesArgument.x
    ) {
      this._lastCoordinatesAttacked =
        this._lastDirection === "left"
          ? this._horizontalPath.left.splice(-1)[0]
          : this._horizontalPath.right.shift();
    }

    //remove the attack from the legal moves, so that the same coordinate isn't attacked in the future
    const lastAttackIndex = this.legalMoves.findIndex(
      (coords) =>
        coords.x === this._lastCoordinatesAttacked.x &&
        coords.y === this._lastCoordinatesAttacked.y
    );
    this.legalMoves.splice(lastAttackIndex, 1);

    this._lastCoordinatesArgument = coordinates;
    return this._lastCoordinatesAttacked;
  }
}
