/**
 * getStudentsByLocation - returns an array of objects who are located in a specific city.
 * @param {*} array - array of objects to filter
 * @param {*} city - specific location to match
 * @returns  - returns an array of objects who are located in a specific city.
 */
export default function getStudentsByLocation(array, city) {
  if (Array.isArray(array)) {
    return array.filter((item) => item.location === city);
  }
  return [];
}
