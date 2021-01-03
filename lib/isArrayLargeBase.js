"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check is an array with length large than base.
 *
 * @param {unknown} o
 * @param {number} base default is `0`
 */
const isArrayLargeBase = (o, base = 0) => {
    return Array.isArray(o) && o.length > base;
};
exports.default = isArrayLargeBase;
