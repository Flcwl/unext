"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasOwnProp_1 = require("./hasOwnProp");
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
const has = (obj, path) => {
    const props = Array.isArray(path) ? path : (path + '').split('.');
    let target = obj;
    for (let i = 0, len = props.length; i < len; ++i) {
        const key = props[i];
        if (!hasOwnProp_1.default(target, key)) {
            return false;
        }
        target = target[key];
    }
    return true;
};
exports.default = has;
