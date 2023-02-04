import { ComputerPlayer } from "../player";

test("AI player public methods", () => {
  const computer = new ComputerPlayer();

  const firstAttackCoordinates = computer.getRandomAttackCoordinates();

  expect(computer.getRandomAttackCoordinates()).not.toEqual(
    firstAttackCoordinates
  );
});
