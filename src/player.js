import Gameboard from "./gameboard";

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
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        legalMoves.push({ x, y });
      }
    }
    return legalMoves;
  }

  getRandomAttackCoordinates() {
    const randomIndex = Math.floor(Math.random() * this.legalMoves.length);
    const attackCoordinates = this.legalMoves[randomIndex];

    //remove the attack from the legal moves, so that the same coordinate isn't attacked twice
    this.legalMoves.splice(randomIndex, 1);

    return attackCoordinates;
  }
}
