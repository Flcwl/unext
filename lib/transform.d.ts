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
export declare const toCamelcase: (obj: unknown, deep?: boolean, separator?: string) => any;
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
export declare const toUnderline: (obj: unknown, deep?: boolean, separator?: string) => any;
