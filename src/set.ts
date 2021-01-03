import hasOwnProp from '../lib/hasOwnProp';
/**
 * Set value to deep key in nested object
 *
 * @param {object} obj
 * @param {(string[] | string)} path
 * @param {*} value
 * @example
 *
 * const a = { a: { b: 2 } }
 * set(a, 'a.b', 4)
 * // => { a: { b: 4 } }
 */
const set = (obj: object, path: string[] | string, value: unknown): void => {
  const props = Array.isArray(path) ? path : (path + '').split('.')

  const len = props.length - 1
  let i = 0
  let key = undefined

  while (i < len) {
    key = props[i++]
    if (!hasOwnProp(obj, key)) {
      obj[key] = {}
    }
    obj = obj[key]
  }
  obj[props[i]] = value
}

export default set
