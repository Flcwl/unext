/**
 * Check if exist an value by deep key in nested object
 *
 * @param {object} obj
 * @param {(string[] | string)} path
 * @returns {boolean}
 * @example
 *
 * has({ a: { b: 3 } }, 'a.b')
 * // => true
 * has({ a: { b: 3 } }, 'a.b.c')
 * // => true
 */
export declare const has: (obj: object, path: string[] | string) => boolean;
