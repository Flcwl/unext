"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUnderline = exports.toCamelcase = void 0;
const isObject_1 = require("./isObject");
const trim_1 = require("./trim");
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
const toCamelcase = (obj, deep = true, separator = '_') => {
    return transform({
        obj,
        deep,
        separator,
        transHandler: exports.toCamelcase,
        transKeyHandler: function toCamelCaseKey(key, separator) {
            separator = separator || '_';
            key = trim_1.default(key, separator);
            const reg = new RegExp(`${separator}+([^${separator}])`, 'g');
            return key.replace(reg, (_, letter) => {
                return letter.toUpperCase();
            });
        },
    });
};
exports.toCamelcase = toCamelcase;
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
const toUnderline = (obj, deep = true, separator = '') => {
    return transform({
        obj,
        deep,
        separator,
        transHandler: exports.toUnderline,
        transKeyHandler: function toUnderlineKey(key, separator = '') {
            const reg = new RegExp(`${separator}([A-Z])`, 'g');
            return key.replace(reg, (_, letter) => {
                return `_${letter.toLowerCase()}`;
            });
        },
    });
};
exports.toUnderline = toUnderline;
