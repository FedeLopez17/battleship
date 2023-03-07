import { ComputerPlayer, Player } from "../player";

test("AI player can attack", () => {
  const humanPlayer = new Player();
  expect(() => new ComputerPlayer()).toThrow(Error);
  const computer = new ComputerPlayer(humanPlayer.gameboard);

  const humanPlayerShipsCoordinates = [
    [
      { x: 2, y: 3 },
      { x: 2, y: 4 },
      { x: 2, y: 5 },
      { x: 2, y: 6 },
      { x: 2, y: 7 },
    ],
    [
      { x: 0, y: 9 },
      { x: 1, y: 9 },
      { x: 2, y: 9 },
      { x: 3, y: 9 },
      { x: 4, y: 9 },
    ],
  ];

  humanPlayerShipsCoordinates.forEach((shipCoordinates) =>
    humanPlayer.gameboard.placeShip(shipCoordinates)
  );

  const getHumanTotalHits = () => {
    return humanPlayer.gameboard.ships.reduce((totalHits, currentShip) => {
      return totalHits + currentShip.hitsTaken.length;
    }, 0);
  };

  let hitsTakenBeforeAttack;
  let hitsTakenAfterAttack;
  const attacksOutcomes = [];
  do {
    hitsTakenBeforeAttack = getHumanTotalHits();
    computer.attack();
    hitsTakenAfterAttack = getHumanTotalHits();
    attacksOutcomes.push(hitsTakenAfterAttack > hitsTakenBeforeAttack);
  } while (!humanPlayer.gameboard.allShipsSunk());

  const firstShipIndices = [];
  const secondShipIndices = [];

  for (
    let outcomeIndex = 0;
    firstShipIndices.length < 5 || secondShipIndices.length < 5;
    outcomeIndex++
  ) {
    if (attacksOutcomes[outcomeIndex]) {
      firstShipIndices.length < 5
        ? firstShipIndices.push(outcomeIndex)
        : secondShipIndices.push(outcomeIndex);
    }
  }

  expect(
    firstShipIndices[firstShipIndices.length - 1] - firstShipIndices[0]
  ).toBeLessThanOrEqual(5);
  expect(
    secondShipIndices[secondShipIndices.length - 1] - secondShipIndices[0]
  ).toBeLessThanOrEqual(5);
});
