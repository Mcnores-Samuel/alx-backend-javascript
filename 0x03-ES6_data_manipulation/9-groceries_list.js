/**
 * groceriesList - sets up a Map object
 * @returns - returns a map of groceries with the following items (name, quantity)
 */
export default function groceriesList() {
  const mapObj = new Map();
  mapObj.set('Apples', 10);
  mapObj.set('Tomatoes', 10);
  mapObj.set('Pasta', 1);
  mapObj.set('Rice', 1);
  mapObj.set('Banana', 5);
  return mapObj;
}
