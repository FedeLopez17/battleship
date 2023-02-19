export function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function arrIncludesObj(arr, obj) {
  const objKeys = Object.keys(obj);
  return arr.some((arrObj) => objKeys.every((key) => arrObj[key] === obj[key]));
}
