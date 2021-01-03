"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = require("./isObject");
const hasOwnProp_1 = require("./hasOwnProp");
const cloneDeep_1 = require("./cloneDeep");
/**
 * Merge objects deep but not union array
 *
 * @param target
 * @param objects
 * @example
 *
 * const hh = { hh: { gg: 33 } }
 * const t = { a: [hh, 4], c: { d: 1 } }
 * const s = { a: [2, hh], b: 2, c: { e: 2 }, f: { g: 2 } }
 * mergeDeep(t, s)
 * // => { a: [ 2, { hh: { gg: 33 } } ], c: { d: 1, e: 2 }, b: 2, f: { g: 2 } }
 */
const mergeDeep = (target, ...objects) => {
    if (typeof target !== 'object' || target === null) {
        target = {};
    }
    objects.forEach((source) => {
        for (const key in source) {
            if (hasOwnProp_1.default(source, key)) {
                const oldVal = source[key];
                const newVal = target[key];
                console.log(key, oldVal, newVal);
                target[key] = isObject_1.default(oldVal) ? mergeDeep(newVal, oldVal) : cloneDeep_1.default(oldVal);
            }
        }
    });
    return target;
};
exports.default = mergeDeep;
