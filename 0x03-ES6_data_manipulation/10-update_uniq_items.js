/**
 * updateUniqueItems -  returns an updated map for all items with initial quantity at 1.
 * @param {*} mapObj - Map object to be manipulated
 * @returns - returns an updated map for all items with initial quantity at 1.
 */
export default function updateUniqueItems(mapObj) {
  if (!mapObj || !(mapObj instanceof Map)) return 'Cannot process';

  const updatedMap = new Map(mapObj);
  updatedMap.forEach((value, key) => {
    if (value === 1) updatedMap.set(key, 100);
  });
  return updatedMap;
}
