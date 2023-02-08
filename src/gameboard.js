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

  receiveAttack(coordinates) {
    console.log(coordinates);

    for (const ship of this.ships) {
      const shipCoordinates = JSON.stringify(ship.coordinates);
      const attackCoordinates = JSON.stringify(coordinates);

      if (shipCoordinates.includes(attackCoordinates)) {
        ship.hit(coordinates);
        return;
      }
    }

    // If the coordinates don't belong to any ship, the attack missed.
    this.missedAttacks.push(coordinates);
  }

  allShipsSunk() {
    let sunkShips = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) sunkShips++;
    });

    return sunkShips === this.ships.length;
  }
}
