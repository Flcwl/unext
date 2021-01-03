import isObject from './isObject'
import trim from './trim';

const transform = ({ obj, deep, separator, transHandler, transKeyHandler }) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => transHandler(item, deep, separator))
  } else if (isObject(obj)) {
    return Object.keys(obj).reduce((result, key) => {
      const val = obj[key]
      const newKey = transKeyHandler(key, separator)
      const shouldDeep = deep && (isObject(val) || Array.isArray(val))
      const newVal = shouldDeep ? transHandler(val, deep, separator) : val
      result[newKey] = newVal
      return result
    }, {})
  } else if (typeof obj === 'string') {
    return transKeyHandler(obj, separator)
  }
  return obj
}

/**
 * transform object keys from underline to camelCase
 *
 * @param obj
 * @param deep
 * @param separator
 * @example
 *
 * underline2camelcase({
 *   abc_def_gh: {
 *     abc_def_gh: 'abc_def_gh'
 *   },
 * })
 * // => { abcDefGh: { abcDefGh: 'abc_def_gh' } }
 */
export const toCamelcase = (obj: unknown, deep = true, separator = '_') => {
  return transform({
    obj,
    deep,
    separator,
    transHandler: toCamelcase,
    transKeyHandler: function toCamelCaseKey(key: string, separator?: string) {
      separator = separator || '_'
      key = trim(key, separator)
      const reg = new RegExp(`${separator}+([^${separator}])`, 'g')
      return key.replace(reg, (_, letter) => {
        return letter.toUpperCase()
      })
    },
  })
}

/**
 * transform object keys from camelCase to underline
 *
 * @param obj
 * @param deep
 * @param separator
 * @example
 *
 * camelcase2underline({
 *   abcDefGh: {
 *     abcDefGh: 'abcDefGh',
 *   },
 * })
 * // => { abc_def_gh: { abc_def_gh: 'abcDefGh' } }
 */
export const toUnderline = (obj: unknown, deep = true, separator = '') => {
  return transform({
    obj,
    deep,
    separator,
    transHandler: toUnderline,
    transKeyHandler: function toUnderlineKey(key: string, separator = '') {
      const reg = new RegExp(`${separator}([A-Z])`, 'g')
      return key.replace(reg, (_, letter) => {
        return `_${letter.toLowerCase()}`
      })
    },
  })
}
