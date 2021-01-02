"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLargeBase = void 0;
/**
 * Check is an array with length large than base.
 *
 * @param {unknown} o
 * @param {number} base default is `0`
 */
exports.isArrayLargeBase = (o, base = 0) => {
    return Array.isArray(o) && o.length > base;
};
