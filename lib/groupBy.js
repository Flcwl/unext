"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("./get");
/**
 * Generate an object composed of keys transformed by key.
 *
 * @param {any[]} list
 * @param {string|Function} key
 * @returns {Object}
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 * groupBy(['one', 'two', 'three'], 'length')
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
const groupBy = (list, key) => {
    const iteratee = typeof key === 'function' ? key : (val) => get_1.default(val, key);
    return list.reduce((result, value) => {
        const type = iteratee(value);
        (result[type] = result[type] || []).push(value);
        return result;
    }, {});
};
exports.default = groupBy;
