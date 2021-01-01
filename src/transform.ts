import isObject from './isObject'

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
export const underline2camelcase = (obj: unknown, deep = true, separator = '_') => {
  return transform({
    obj,
    deep,
    separator,
    transHandler: underline2camelcase,
    transKeyHandler: function underline2CamelCaseKey(key: string, separator = '') {
      const reg = new RegExp(`${separator}([a-zA-Z])`, 'g')
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
export const camelcase2underline = (obj: unknown, deep = true, separator = '') => {
  return transform({
    obj,
    deep,
    separator,
    transHandler: camelcase2underline,
    transKeyHandler: function camelCase2UnderlineKey(key: string, separator = '') {
      const reg = new RegExp(`${separator}([A-Z])`, 'g')
      return key.replace(reg, (_, letter) => {
        return `_${letter.toLowerCase()}`
      })
    },
  })
}
