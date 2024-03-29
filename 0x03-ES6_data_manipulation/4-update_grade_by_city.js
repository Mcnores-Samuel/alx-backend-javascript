/**
 * updateStudentGradeByCity - returns an array of students for a specific city with their new grade
 * @param {*} list - list or array of objects
 * @param {*} city - a city or location to match
 * @param {*} grades - students grade to add or update
 * @returns returns an array of students for a specific city with their new grade
 */
export default function updateStudentGradeByCity(list, city, grades) {
  return list.map((item) => {
    const matchingGrade = grades.find((grade) => grade.studentId === item.id);
    if (item.location === city && matchingGrade) {
      return { ...item, grade: matchingGrade.grade };
    }
    return { ...item, grade: 'N/A' };
  }).filter((elem) => elem.location === city);
}
