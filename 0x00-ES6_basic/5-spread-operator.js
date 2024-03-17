
export default function concatArrays(array1, array2, string) {
  const arr = [...string];
  return [...array1, ...array2, ...arr];
}
