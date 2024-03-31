/**
 * @param {*} promise - a promise prototype
 * @returns - an object with the following attributes
 * status: 200
 * body: success
 *  return an empty Error object
 */
export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
