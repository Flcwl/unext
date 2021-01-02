const _isNaN = Number.isNaN
/**
 * check an object is undefined or null
 *
 * @param {any} o
 */
export const hasValue = (o: unknown): boolean => {
  return typeof o !== 'undefined' && o !== null && !_isNaN(o)
}
