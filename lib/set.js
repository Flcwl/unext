"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const set = (obj, path, value) => {
    const props = Array.isArray(path) ? path : (path + '').split('.');
    let i = 0;
    const len = props.length - 1;
    while (i < len) {
        obj = obj[props[i++]];
    }
    obj[props[i]] = value;
};
exports.default = set;
