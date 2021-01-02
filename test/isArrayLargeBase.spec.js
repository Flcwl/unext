/**
 * Check is an array with length large than base.
 *
 * @param {unknown} o
 * @param {number} base default is `0`
 */
export const isArrayLargeBase = (o: unknown, base = 0): boolean => {
  return Array.isArray(o) && o.length > base
}
