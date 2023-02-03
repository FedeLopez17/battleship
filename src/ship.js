export default class Ship {
  constructor(length) {
    if (length === undefined) throw new Error("Constructor argument missing!");

    if (typeof length !== "number" || length < 1) {
      throw new Error("Invalid constructor argument");
    }

    this.length = length;
  }

  hitsTaken = 0;
  sunk = false;

  hit() {
    this.hitsTaken++;
  }

  isSunk() {
    return this.hitsTaken === this.length;
  }
}
