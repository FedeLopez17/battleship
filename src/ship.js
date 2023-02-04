export default class Ship {
  constructor(length) {
    if (length === undefined) throw new Error("Constructor argument missing!");

    if (typeof length !== "number" || length < 1) {
      throw new Error("Invalid constructor argument");
    }

    this.length = length;
    this.coordinates = null;
    this.hitsTaken = [];
    this.sunk = false;
  }

  hit(coordinates) {
    this.hitsTaken.push(coordinates);
  }

  isSunk() {
    return this.hitsTaken.length === this.length;
  }
}
