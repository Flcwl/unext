"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * unique array
 *
 * @generic T
 * @param {T[]} arr
 */
const uniq = (arr) => {
    return Array.from(new Set(arr));
};
exports.default = uniq;
