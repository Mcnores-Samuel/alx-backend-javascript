/**
 * getListStudentIds - returns an array of ids from a list of object
 * @param {*} array - an array of objects
 * @returns - returns an array of ids from a list of object
 */
export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((item) => item.id);
  }
  return [];
}
