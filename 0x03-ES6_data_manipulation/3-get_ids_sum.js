/**
 * getStudentIdsSum - returns the sum of all the student ids.
 * @param {*} students - array of objects
 * @returns - returns the sum of all the student ids.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((acc, currVal) => acc + currVal.id, 0);
}
