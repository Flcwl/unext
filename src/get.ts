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
export const get = <T>(obj: Record<string, unknown>, path: string[] | string): T => {
  const props = Array.isArray(path) ? path : (path + '').split('.')
  let target = obj

  for (let i = 0, len = props.length; i < len; ++i) {
    target = target[props[i]]
  }
  return target
}

