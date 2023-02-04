import Ship from "./ship";

export default class Gameboard {
  ships = [];
  missedAttacks = [];

  getState() {
    return { ships: this.ships, missedAttacks: this.missedAttacks };
  }

  placeShip(coordinates) {
    const ship = new Ship(coordinates.length);
    ship.coordinates = coordinates;
    this.ships.push(ship);
  }

  receiveAttack(coordinates) {
    this.ships.forEach((ship) => {
      const shipCoordinates = JSON.stringify(ship.coordinates);
      const attackCoordinates = JSON.stringify(coordinates);

      if (shipCoordinates.includes(attackCoordinates)) {
        ship.hit(coordinates);
        return;
      }
    });

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
