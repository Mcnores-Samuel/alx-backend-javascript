/**
 * hasValuesFromArray - returns a boolean if all the elements in the array exist within the set.
 * @param {*} set - a set to compare values in array
 * @param {*} array - an array to check if all values are in set
 * @returns - returns a boolean if all the elements in the array exist within the set.
 */
export default function hasValuesFromArray(set, array) {
  let count = 0;
  array.map((item) => {
    if (set.has(item)) {
      count += 1;
    }
    return count;
  });
  if (array.length === count) {
    return true;
  }
  return false;
}
