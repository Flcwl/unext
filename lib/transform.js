"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelcase2underline = exports.underline2camelcase = void 0;
const isObject_1 = require("./isObject");
const transform = ({ obj, deep, separator, transHandler, transKeyHandler }) => {
    if (Array.isArray(obj)) {
        return obj.map((item) => transHandler(item, deep, separator));
    }
    else if (isObject_1.default(obj)) {
        return Object.keys(obj).reduce((result, key) => {
            const val = obj[key];
            const newKey = transKeyHandler(key, separator);
            const shouldDeep = deep && (isObject_1.default(val) || Array.isArray(val));
            const newVal = shouldDeep ? transHandler(val, deep, separator) : val;
            result[newKey] = newVal;
            return result;
        }, {});
    }
    else if (typeof obj === 'string') {
        return transKeyHandler(obj, separator);
    }
    return obj;
};
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
exports.underline2camelcase = (obj, deep = true, separator = '_') => {
    return transform({
        obj,
        deep,
        separator,
        transHandler: exports.underline2camelcase,
        transKeyHandler: function underline2CamelCaseKey(key, separator = '') {
            const reg = new RegExp(`${separator}([a-zA-Z])`, 'g');
            return key.replace(reg, (_, letter) => {
                return letter.toUpperCase();
            });
        },
    });
};
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
exports.camelcase2underline = (obj, deep = true, separator = '') => {
    return transform({
        obj,
        deep,
        separator,
        transHandler: exports.camelcase2underline,
        transKeyHandler: function camelCase2UnderlineKey(key, separator = '') {
            const reg = new RegExp(`${separator}([A-Z])`, 'g');
            return key.replace(reg, (_, letter) => {
                return `_${letter.toLowerCase()}`;
            });
        },
    });
};
