import Ship from "./ship";

export const GAMEBOARD_WIDTH = 10;
export const GAMEBOARD_HEIGHT = 10;

export default class Gameboard {
  constructor() {
    this.emptyCells = this._setInitialEmptyCells();
  }

  _setInitialEmptyCells() {
    const emptyCells = [];
    for (let x = 0; x < GAMEBOARD_WIDTH; x++) {
      for (let y = 0; y < GAMEBOARD_HEIGHT; y++) {
        emptyCells.push({ x, y });
      }
    }
    return emptyCells;
  }

  ships = [];
  missedAttacks = [];

  getState() {
    return {
      ships: this.ships,
      missedAttacks: this.missedAttacks,
      emptyCells: this.emptyCells,
    };
  }

  getEmptyCells() {
    return [...this.emptyCells];
  }

  placeShip(coordinates) {
    const emtpyCoordinates = coordinates.filter((coords) => {
      return JSON.stringify(this.emptyCells).includes(JSON.stringify(coords));
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
    const attackCoordinates = JSON.stringify(coordinates);

    for (const ship of this.ships) {
      const shipCoordinates = JSON.stringify(ship.coordinates);
      const shipHitsTaken = JSON.stringify(ship.hitsTaken);

      if (shipCoordinates.includes(attackCoordinates)) {
        if (shipHitsTaken.includes(attackCoordinates)) return false;

        ship.hit(coordinates);
        return true;
      }
    }

    // If the coordinates don't belong to any ship, the attack missed.

    // Make sure that the coordinates aren't already in missedAttacks
    if (JSON.stringify(this.missedAttacks).includes(attackCoordinates)) {
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
