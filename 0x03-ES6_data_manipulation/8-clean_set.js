/**
 * cleanSet - returns a string of all the set values that start
 * with a specific string (startString).
 * @param {*} set - a set to read data from
 * @param {*} startString - a substring to test with
 * @returns - returns a string of all the set values that start
 * with a specific string (startString).
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
