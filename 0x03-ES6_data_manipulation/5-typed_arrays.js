/**
 * createInt8TypedArray - returns a new ArrayBuffer with an Int8 value at a specific position.
 * @param {*} length - integer
 * @param {*} position - integer
 * @param {*} value - integer
 * @returns - returns a new ArrayBuffer with an Int8 value at a specific position.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
