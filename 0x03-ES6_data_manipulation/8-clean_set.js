/**
 * cleanSet - returns a string of all the set values that start
 * with a specific string (startString).
 * @param {*} set - a set to read data from
 * @param {*} startString - a substring to test with
 * @returns - returns a string of all the set values that start
 * with a specific string (startString).
 */
export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((elem) => {
    if (elem.startsWith(startString) && startString !== '') {
      result.push(elem.substr(startString.length));
    }
  });

  return result.join('-');
}
