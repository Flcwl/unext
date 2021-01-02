/**
 * check an object is undefined or null
 *
 * @param {any} o
 */
export const hasValue = (o: any): boolean => {
  return typeof o !== 'undefined' && o !== null
}
