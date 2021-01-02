/**
 * Generate an object composed of keys transformed by key.
 *
 * @param {any[]} list
 * @param {string|Function} key
 * @returns {Object}
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 * groupBy(['one', 'two', 'three'], 'length')
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
export declare const groupBy: (list: unknown[], key: string | Function) => unknown;
