"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Range map to an array
 * @param arr
 * @param start
 * @param end
 * @param callback
 */
const rangeMap = (arr, start, end, callback) => {
    const newArr = [];
    const len = arr.length;
    if (!Array.isArray(arr) || start >= end || start > len || end < 0)
        return newArr;
    if (start < 0)
        start = 0;
    if (end > len)
        end = len;
    const iteratee = typeof callback === 'function' ? callback : (v) => v;
    return arr.map(iteratee);
};
exports.default = rangeMap;
