/**
 * cleanSet - returns a string of all the set values that start
 * with a specific string (startString).
 * @param {*} set - a set to read data from
 * @param {*} startString - a substring to test with
 * @returns - returns a string of all the set values that start
 * with a specific string (startString).
 */
export default function cleanSet(set, startString) {
  const array = Array.from(set);
  let str = '';
  if (startString) {
    array.map((elem) => {
      if (elem.startsWith(startString)) {
        if (str) str = str.concat('-');
        str = str.concat(elem.substr(startString.length));
      }
      return elem;
    });
  }
  return str;
}
