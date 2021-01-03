import hasOwnProp from './hasOwnProp'

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
const has = (obj: object, path: string[] | string): boolean => {
  const props = Array.isArray(path) ? path : (path + '').split('.')
  let target = obj

  for (let i = 0, len = props.length; i < len; ++i) {
    const key = props[i]
    if (!hasOwnProp(target, key)) {
      return false
    }
    target = target[key]
  }
  return true
}

export default has

