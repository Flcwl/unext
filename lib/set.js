"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasOwnProp_1 = require("../lib/hasOwnProp");
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
    const len = props.length - 1;
    let i = 0;
    let key = undefined;
    while (i < len) {
        key = props[i++];
        if (!hasOwnProp_1.default(obj, key)) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    obj[props[i]] = value;
};
exports.default = set;
