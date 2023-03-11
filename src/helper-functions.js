export function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function arrIncludesObj(coordArr, searchCoord) {
  return coordArr.some(
    (coord) => coord.x === searchCoord.x && coord.y === searchCoord.y
  );
}
