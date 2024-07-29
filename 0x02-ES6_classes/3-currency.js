/**
 * Currency - class
 * @param {string} code - The currency code.
 * @param {string} name - The currency name.
 * Implement a class named Currency that has:
 *  - A constructor that takes two parameters: code and name.
 * - A getter for code that returns the currency code.
 * - A setter for code that sets the currency code.
 * - A getter for name that returns the currency name.
 * - A setter for name that sets the currency name.
 * - A method named displayFullCurrency that returns the currency code and name.
 */
export default class Currency {
  /**
   * constructor - Creates a new Currency.
   * @param {*} code - The currency code.
   * @param {*} name - The currency name.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
  
  displayFullCurrency() {
    return `${this._code} (${this._name})`;
  }

}
