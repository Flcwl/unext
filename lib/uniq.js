"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = void 0;
/**
 * unique array
 *
 * @generic T
 * @param {T[]} arr
 */
exports.uniq = (arr) => {
    return Array.from(new Set(arr));
};
