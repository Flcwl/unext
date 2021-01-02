/**
 * Get value by deep key in nested object
 *
 * @param {object} obj
 * @param {(string[] | string)} path
 * @returns {any}
 * @refs https://github.com/jonschlinkert/get-value/blob/master/index.js
 * @example
 *
 * get({ a: { b: 3 } }, 'a.b')
 * // => 3
 */
export declare const get: <T>(obj: Record<string, unknown>, path: string[] | string) => T;
