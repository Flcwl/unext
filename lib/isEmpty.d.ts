/**
 * Checks if `value` is an empty string, object, array, map, or set.
 * @param {*} value
 * @returns {boolean}
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty(new Map())
 * // => true
 *
 * isEmpty(new Set())
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
declare const isEmpty: (value: any) => boolean;
export default isEmpty;
