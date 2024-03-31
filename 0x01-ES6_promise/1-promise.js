/**
 * @param {*} success - a boolean values
 * @returns - a promise with a resolve or a reject depending on the boolean value
 */
export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'success' });
    reject(new Error('The fake API is not working currently'));
  });
  return promise;
}
