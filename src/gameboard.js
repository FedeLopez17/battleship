import { arrIncludesObj } from "./helper-functions";
import Ship from "./ship";

export const GAMEBOARD_WIDTH = 10;
export const GAMEBOARD_HEIGHT = 10;

export default class Gameboard {
  constructor() {
    this.emptyCells = this._setInitialEmptyCells();
  }

  _setInitialEmptyCells() {
    return (
      new Array(GAMEBOARD_WIDTH * GAMEBOARD_HEIGHT)
        .fill(0)
        // the first parameter won't be used, it's only included in order to access the second parameter, index
        .map((_ignoredParameter, index) => ({
          x: Math.floor(index / GAMEBOARD_WIDTH),
          y: index % GAMEBOARD_WIDTH,
        }))
    );
  }

  ships = [];
  missedAttacks = [];

  getState() {
    return {
      ships: this.ships,
      missedAttacks: this.missedAttacks,
      emptyCells: [...this.emptyCells],
    };
  }

  placeShip(coordinates) {
    const emtpyCoordinates = coordinates.filter((coords) => {
      return arrIncludesObj(this.emptyCells, coords);
    });

    if (emtpyCoordinates.length !== coordinates.length) {
      throw new Error("Invalid coordinates");
    }

    const ship = new Ship(coordinates.length);
    ship.coordinates = coordinates;
    this.ships.push(ship);

    coordinates.forEach((coords) => {
      const coordsIndex = this.emptyCells.findIndex(
        (cell) => cell.x === coords.x && cell.y === coords.y
      );
      this.emptyCells.splice(coordsIndex, 1);
    });
  }

  // returns whether the attack was successful or not
  receiveAttack(coordinates) {
    for (const ship of this.ships) {
      if (arrIncludesObj(ship.coordinates, coordinates)) {
        if (arrIncludesObj(ship.hitsTaken, coordinates)) return false;

        ship.hit(coordinates);
        return true;
      }
    }

    // If the coordinates don't belong to any ship, the attack missed.

    // Make sure that the coordinates aren't already in missedAttacks
    if (arrIncludesObj(this.missedAttacks, coordinates)) {
      return false;
    }

    this.missedAttacks.push(coordinates);
    return true;
  }

  allShipsSunk() {
    let sunkShips = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) sunkShips++;
    });

    return sunkShips === this.ships.length;
  }
}
