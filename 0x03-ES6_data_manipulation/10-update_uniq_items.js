/**
 * updateUniqueItems -  returns an updated map for all items with initial quantity at 1.
 * @param {*} mapObj - Map object to be manipulated
 * @returns - returns an updated map for all items with initial quantity at 1.
 */
export default function updateUniqueItems(mapObj) {
  mapObj.forEach((value, key) => {
    if (value === 1) mapObj.set(key, 100);
  });
  return mapObj;
}
